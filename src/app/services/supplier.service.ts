import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

 supplierUrl : string = 'https://localhost:7004/api/Supplier'
 

  constructor() { }
}
