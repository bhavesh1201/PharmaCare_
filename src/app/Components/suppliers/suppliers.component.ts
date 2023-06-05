import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Drugs } from 'src/app/models/drug.model';
import { supplier } from 'src/app/models/supplier.model';
import { DrugsService } from 'src/app/services/drugs.service';
import { SupplierService } from 'src/app/services/supplier.service';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {


  constructor(public ServiceSupl : SupplierService , public date : DatePipe){}
  ngOnInit() : void{
 
    this.ServiceSupl.GetSupplier().subscribe(data=>{
      this.ServiceSupl.listSupplier=data;
    })
    
  }


  populateSupplier(selectedSupplier : supplier){
    let df = this.date.transform(this.ServiceSupl.DataSupplier.drugs?.expiryDate,'yyyy-MM-dd');
    selectedSupplier.drugs.expiryDate= df;

    this.ServiceSupl.DataSupplier = selectedSupplier



  }


  DeleteSupplier(id:number){

    this.ServiceSupl.DeleteSupplier(id).subscribe(data=>{
        
                  this.ServiceSupl.GetSupplier().subscribe(dt=>{
                    this.ServiceSupl.listSupplier=dt;
                  })

    },err=>{
      console.log("Supplier cannot be remmoved")
    }
    )

  }

  

}
