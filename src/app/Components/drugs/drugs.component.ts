import { DatePipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Drugs } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {

  constructor(public drugService : DrugsService , private date : DatePipe ){

  }

  ngOnInit(): void {
    this.drugService.GetDrug().subscribe(data=>{
      this.drugService.listDrug=data;
    });
    
  }
  populateDrug(selectedDrug : Drugs){
  
    let df = this.date.transform(selectedDrug.dateCreated,'yyyy-MM-dd');
    selectedDrug.dateCreated = df;
    let FF = this.date.transform(selectedDrug.expiryDate,'yyyy-MM-dd');
    selectedDrug.expiryDate = FF;
  
    console.log(df);
          
      console.log(selectedDrug);
      this.drugService.DrugData=selectedDrug;
  
  
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
    
            this.drugService.DeleteDrug(id).subscribe(data=>{
              console.log("Drug has been removed");
              this.drugService.GetDrug().subscribe(data=>{
                this.drugService.listDrug=data;
              });
               
              
            },err=>{
              console.log("An Error Occured , Drug cannot be removed");
            }
            )
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      
      
  
    }


}
