import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  
constructor(private fb : FormBuilder){

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
      console.log(this.loginForm.value);
      
    }
    else{
      console.log("Invalid form");
      ValidateForm.ValidateAllFormFeilds(this.loginForm);
      alert("Invalid Form");
      
    }
  }


}
