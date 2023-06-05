import { Component, OnInit } from '@angular/core';
import { supplier } from 'src/app/models/supplier.model';
import { SupplierService } from 'src/app/services/supplier.service';
import { CartsComponent } from '../carts/carts.component';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-dashboard-dct',
  templateUrl: './dashboard-dct.component.html',
  styleUrls: ['./dashboard-dct.component.css']
})
export class DashboardDctComponent implements OnInit{

  public role : string
  public fullName : string
public ListDrug : any =[]
constructor(public Supplier : SupplierService, public cartService : CartsService){

}

  ngOnInit(): void {
    this.Supplier.GetSupplier().
    subscribe(
      res=>{
        this.ListDrug = res;
    })

    this.ListDrug.forEach((a:any) => {
      
      Object.assign(a,{quantity:1,total:a.drugs.price});
      console.log(this.ListDrug)
    });
   
  
    
  }
  addtocart(item : any){
    this.cartService.addtoCart(item);
  }







}
