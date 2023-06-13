import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Drugs } from 'src/app/models/drug.model';
import { order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
 
  tez: string;




  constructor(public orderServic : OrderService , public route : Router){

  }
  
  submit(form:NgForm)
  {
    console.log("Kam");

    if(this.orderServic.DataOrder.orderId==0 || this.orderServic.DataOrder.orderId==null)
    { 
      
      
      this.insertForm(form);
      
     
    }
    else{
      this.UpdateForm(form);
      
    }
  }

  insertForm(from:NgForm){
 
    console.log("insert called");
    this.orderServic.InsertOrder().subscribe(d=>{
      
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['order']);
      Swal.fire('Added Successfully')
      console.log("Saved");
     
    });

  }

  UpdateForm(from:NgForm){
    this.orderServic.UpdateOrder().subscribe(d=>{
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['order']);
     Swal.fire('Updated Successfully')
      //this.toast.success({detail:"Updated" , summary :"Drug has been updated"})
      console.log("Refresh & update done");
    });

  }

  ResetForm(from:NgForm){
    from.form.reset();
    this.orderServic.DataOrder= new order();

  }

  Refresh(){
    this.orderServic.GetOrder().subscribe(res=>{
      this.orderServic.listOrder = res;
    });
  }


}
