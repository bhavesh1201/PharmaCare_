import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Subscriber } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  
constructor(private fb : FormBuilder, private auth : AuthService , 
  private route : Router , private Toast : NgToastService , private userStore : UserStoreService){

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
            
          this.auth.storeToken(res.token);
          let tokenPayload = this.auth.decodedToken()
        this.userStore.setFullNameForStore(tokenPayload.unique_name);
        this.userStore.setRoleForStore(tokenPayload.role);
        this.userStore.setEmailFromStore(tokenPayload.email)
        console.log(this.userStore.getFullNameFromStore()+'mail at login')
          this.Toast.success({detail:"Success", summary : res.message , duration:3500});
          
          this.loginForm.reset();
          
           
          if(tokenPayload.role=="Doctor"){
            this.route.navigate(['dasboardDct'])
            console.log(tokenPayload.role);;
          }
          else{
            
           this.route.navigate(['dashboard']);
          }
        },
        error : (err)=>{
          this.Toast.error({detail:"Error", summary :err.error.message , duration:3500});
         
        }
       })
      
    }
    else{

      this.Toast.error({detail:"Error", summary :"Please Enter Id and Password" , duration:3500});
      ValidateForm.ValidateAllFormFeilds(this.loginForm);
      
      
    }
  }


}
