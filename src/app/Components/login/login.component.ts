import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  
constructor(private fb : FormBuilder, private auth : AuthService , private route : Router){

}
  loginForm :FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username :['',Validators.required],
      password :['',Validators.required]
    })

    
    
  }
  OnSubmit(){
    if(this.loginForm.valid){
      console.log("Form is valid");
    this.auth.Login(this.loginForm.value)
       .subscribe({
        next :(res)=>{
          alert(res.message)
          this.loginForm.reset();
           this.route.navigate(['dashboard']);
        },
        error : (err)=>{
          alert(err.error.message)
        }
       })
      
    }
    else{
      console.log("Invalid form");
      ValidateForm.ValidateAllFormFeilds(this.loginForm);
      alert("Invalid Form");
      
    }
  }


}
