import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import validateform from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
})
export class SignupComponent  implements OnInit {
  registerForm : FormGroup;
constructor(private fb : FormBuilder , private auth : AuthService , private router : Router
  ,private Toast : NgToastService){

}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username :['',Validators.required],
      password :['',Validators.required],
      name :['',Validators.required],
      age :['',Validators.required],
      email :['',Validators.required]
    })
    
  }

  OnSubmit(){
    if(this.registerForm.valid){
      

      this.auth.SignUp(this.registerForm.value)
        .subscribe({
                next:(res=>{
             
                  this.Toast.success({detail:"Success", summary : res.message , duration:3500});
            
            this.registerForm.reset();
             this.router.navigate(['login']);
          })
        ,error:(err=>{
         
          this.Toast.error({detail:"Error", summary :err?.error.message, duration:3500});
          
        })


      })
    
      console.log(this.registerForm.value);
      console.log("kam kia yha tak");
      
    }
    else {
            console.log("Not Working");
            validateform.ValidateAllFormFeilds(this.registerForm);
            alert("Invalid Details.");

            
    }

  }

  

}
