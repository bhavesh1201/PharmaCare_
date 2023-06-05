import { Component, OnInit } from '@angular/core';
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
  constructor(private cartService : CartsService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.totelPriceCal();
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
}
