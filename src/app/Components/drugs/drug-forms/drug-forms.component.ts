import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Drugs } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drug-forms',
  templateUrl: './drug-forms.component.html',
  styleUrls: ['./drug-forms.component.css']
})
export class DrugFormsComponent  {


  tez:string =""

  constructor(public DrugService : DrugsService , private route : Router , private toast : NgToastService ){

  }

  submit(form:NgForm)
  {
    console.log("Kam");

    if(this.DrugService.DrugData.id==0 || this.DrugService.DrugData.id==null)
    { 
      
      this.tez='Add Drug'
      this.insertForm(form);
      
     
    }
    else{
      this.UpdateForm(form);
      
    }
  }

  insertForm(from:NgForm){
 
    console.log("insert called");
    this.DrugService.InsertDrug().subscribe(d=>{
      
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['drugs']);
      Swal.fire('Added Successfully')
      console.log("Saved");
     
    });

  }

  UpdateForm(from:NgForm){
    this.DrugService.UpdateDrug().subscribe(d=>{
      this.ResetForm(from);
      this.Refresh();
      this.route.navigate(['drugs']);
     Swal.fire('Updated Successfully')
      //this.toast.success({detail:"Updated" , summary :"Drug has been updated"})
      console.log("Refresh & update done");
    });

  }

  ResetForm(from:NgForm){
    from.form.reset();
    this.DrugService.DrugData= new Drugs();

  }

  Refresh(){
    this.DrugService.GetDrug().subscribe(res=>{
      this.DrugService.listDrug = res;
    });
  }

}
