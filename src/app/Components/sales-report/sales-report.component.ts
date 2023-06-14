import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent {

  @ViewChild('cont' , {static : false}) el! : ElementRef;
  p=1;
  constructor(public orderServ : OrderService , private date : DatePipe ){

  }
  

  ngOnInit(): void {
    this.orderServ.GetOrder().subscribe(data=>{
      this.orderServ.listOrder=data;
    
    });
    
  }
  populateDrug(selectedOrder : order){
  
    let df = this.date.transform(selectedOrder.orderDate,'yyyy-MM-dd');
    selectedOrder.orderDate = df;
   
  
    console.log(df);
          
      console.log(selectedOrder);
      this.orderServ.DataOrder=selectedOrder;
  
  
    }


    pdfgen(){
   let pdf = new jsPDF('p','pt','a4');
   pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
      pdf.save("SalesReport.pdf");
    }
   });

    }
    
    DeleteDrug(id:number){
     
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
    
            this.orderServ.DeleteOrder(id).subscribe(data=>{
              console.log("Drug has been removed");
              this.orderServ.GetOrder().subscribe(data=>{
                this.orderServ.listOrder=data;
              });
               
              
            },err=>{
              console.log("An Error Occured , Drug cannot be removed");
            }
            )
            
            Swal.fire(
              'Deleted!',
              'Order has Been Removed',
              'success'
            )
          }
        })
      
      
  
    }

}
