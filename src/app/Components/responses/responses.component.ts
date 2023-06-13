import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit{

p=1;
  constructor(public feedb: FeedbackService){

  }
  ngOnInit() {

    this.feedb.GetFeedback().subscribe(data=>{
             this.feedb.FeedbackList = data;
  
    })  
  }
  DeleteSupplier(id:number){

    

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.feedb.DeleteFeedback(id).subscribe(data=>{
        
          this.feedb.GetFeedback().subscribe(dt=>{
            this.feedb.FeedbackList=dt;
          })

},err=>{
console.log("Supplier cannot be remmoved")
}
)



        Swal.fire(
          'Deleted!',
          'The Response has been Removed.',
          'success'
        )
      }
    })



    

  

  }



}
