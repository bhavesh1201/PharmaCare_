import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drugs } from 'src/app/models/drug.model';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  public totalItem : number;
  constructor(private cartService : CartsService , public route : Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.totelPriceCal();
      this.totalItem = this.totelItemCal()
    })

    console.log(this.products);
    
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  totelPriceCal():number{
    let tp : number = 0
    this.products.map((a:any)=>{
      tp += a.drugs.price;
    })
    console.log(tp);
    return tp;

  


  }

  totelItemCal():number{
    let ti =0;
    this.products.map((a:any)=>{
      ti++;
      
    })
    return ti;
  }
}
