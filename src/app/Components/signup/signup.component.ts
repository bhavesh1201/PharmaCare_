import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateform from 'src/app/helpers/validateform';

@Component({
  
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
})
export class SignupComponent  implements OnInit {
  registerForm : FormGroup;
constructor(private fb : FormBuilder){

}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username :['',Validators.required],
      password :['',Validators.required],
      name :['',Validators.required],
      age :['',Validators.required]
    })
    
  }

  OnSubmit(){
    if(this.registerForm.valid){
      console.log("Worked");
      
    }
    else {
            console.log("Not Working");
            validateform.ValidateAllFormFeilds(this.registerForm);
            alert("Invalid Details.");

            
    }

  }

  

}
