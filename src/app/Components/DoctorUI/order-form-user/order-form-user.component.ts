import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { order } from 'src/app/models/order.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import Swal from 'sweetalert2';
import { CartsComponent } from '../carts/carts.component';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-order-form-user',
  templateUrl: './order-form-user.component.html',
  styleUrls: ['./order-form-user.component.css']
})
export class OrderFormUserComponent implements OnInit{
  tez: string;
  totalPrice: number;
  tp : number=87;
  ti : number;
  



  constructor(public orderServic : OrderService , public route : Router , public rs : ActivatedRoute , public userStore : UserStoreService 
    ,public authSer : AuthService , public cartSe : CartsService){

  }
  ngOnInit() {
    this.tp = Number(this.rs.snapshot.paramMap.get('qunt'))
    this.ti = Number(this.rs.snapshot.paramMap.get('qunt2'))
    this.orderServic.DataOrder.totalPrice = this.tp;
    this.orderServic.DataOrder.totalItems = this.ti;
    this.orderServic.DataOrder.email = String(this.authSer.getEmailFromToken());

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
      this.route.navigate(['dasboardDct']);
      Swal.fire('Your Order has been Placed')

  this.cartSe.removeAllCart();
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
