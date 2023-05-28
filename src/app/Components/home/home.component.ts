import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.models';
import { DrugsService } from 'src/app/services/drugs.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  constructor(public feedbackServic : FeedbackService , public route : Router){  }


  submit(form:NgForm){
    console.log("Feedback submit button called")
    this.insertForm(form);
    

  }

  insertForm(from:NgForm){
    console.log("FeedBack insert form has been called")
     this.feedbackServic.InsertFeedback().subscribe(d=>{
            this.ResetForm(from);
            Swal.fire('Thank You , You will be contacted soon')
              console.log('inserted');
              
     })


  }

ResetForm(form:NgForm){
  form.form.reset();
  this.feedbackServic.FeedbackData = new Feedback();
}
Refresh(form:NgForm){

this.feedbackServic.GetFeedback().subscribe(res=>{
     this.feedbackServic.FeedbackList = res;
})

}


}
