import { Injectable } from '@angular/core';
import { supplier } from '../models/supplier.model';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

 supplierUrl : string = 'https://localhost:7004/api/Supplier'
listSupplier : supplier[]=[];
DataSupplier : supplier = new supplier();

 

  constructor(public http : HttpClient) { }

GetSupplier():Observable<supplier[]>{
   return this.http.get<supplier[]>(this.supplierUrl)  

}
InsertSupplier(){

  return this.http.post(this.supplierUrl,this.DataSupplier)

}

UpdateSupplier(){
  return this.http.put(`${this.supplierUrl}/${this.DataSupplier.suppilerId}`,this.DataSupplier)
}
DeleteSupplier(id:number){

  return this.http.delete(`${this.supplierUrl}/${id}`)
}

}

