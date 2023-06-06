import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit{


  constructor(public feedb: FeedbackService){

  }
  ngOnInit() {

    this.feedb.GetFeedback().subscribe(data=>{
             this.feedb.FeedbackList = data;
  
    })  
  }
  DeleteSupplier(id:number){

    this.feedb.DeleteFeedback(id).subscribe(data=>{
        
                  this.feedb.GetFeedback().subscribe(dt=>{
                    this.feedb.FeedbackList=dt;
                  })

    },err=>{
      console.log("Supplier cannot be remmoved")
    }
    )

  }



}
