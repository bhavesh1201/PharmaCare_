import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-form-user',
  templateUrl: './order-form-user.component.html',
  styleUrls: ['./order-form-user.component.css']
})
export class OrderFormUserComponent implements OnInit{
  tez: string;
  totalPrice: number;
  tp : number=87;
  



  constructor(public orderServic : OrderService , public route : Router , public rs : ActivatedRoute){

  }
  ngOnInit() {
    this.tp = Number(this.rs.snapshot.paramMap.get('qunt'))
    this.orderServic.DataOrder.totalPrice = this.tp;
  }


  
  submit(form:NgForm)
  {
    console.log("Kam");

    if(this.orderServic.DataOrder.orderId==0 || this.orderServic.DataOrder.orderId==null)
    { 
      console.log("this is total prcie" + this.tp)
      
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
      Swal.fire('Order Added Successfully')
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
