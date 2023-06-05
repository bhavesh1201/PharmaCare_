import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { DrugsComponent } from './Components/drugs/drugs.component';
import { DrugFormsComponent } from './Components/drugs/drug-forms/drug-forms.component';
import { HomeComponent } from './Components/home/home.component';
import { Notfound404Component } from './Components/errors/notfound404/notfound404.component';
import { SuppliersComponent } from './Components/suppliers/suppliers.component';
import { SupplierFormComponent } from './Components/suppliers/supplier-form/supplier-form.component';
import { DashboardDctComponent } from './Components/DoctorUI/dashboard-dct/dashboard-dct.component';
import { CartsComponent } from './Components/DoctorUI/carts/carts.component';
import { ResponsesComponent } from './Components/responses/responses.component';


const routes: Routes = [
  {path:'home', component : HomeComponent},
  { path : "login" , component : LoginComponent},
  {path : "signup" , component : SignupComponent},
  {path : "dashboard" , component : DashboardComponent, canActivate:[AuthGuard]},
  {path : "drugs" , component : DrugsComponent},
  {path : "drugEdit" , component : DrugFormsComponent},
  {path :'supplier' , component : SuppliersComponent},
  {path : 'supplierForm' , component : SupplierFormComponent},
  {path :'dasboardDct' , component : DashboardDctComponent},
  {path :'cart' , component : CartsComponent},
  {path :'respi',component : ResponsesComponent},
  {path :"" ,component: HomeComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
