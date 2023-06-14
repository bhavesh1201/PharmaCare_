import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup' 
import { TokenInterceptor } from './Interceptor/token.interceptor';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { DrugsComponent } from './Components/drugs/drugs.component';
import { DatePipe } from '@angular/common';
import { DrugFormsComponent } from './Components/drugs/drug-forms/drug-forms.component';
import { SuppliersComponent } from './Components/suppliers/suppliers.component';
import { Notfound404Component } from './Components/errors/notfound404/notfound404.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { SupplierFormComponent } from './Components/suppliers/supplier-form/supplier-form.component';
import { DashboardDctComponent } from './Components/DoctorUI/dashboard-dct/dashboard-dct.component';
import { CartsComponent } from './Components/DoctorUI/carts/carts.component';
import { ResponsesComponent } from './Components/responses/responses.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrderFormComponent } from './Components/orders/order-form/order-form.component';
import { OrderFormUserComponent } from './Components/DoctorUI/order-form-user/order-form-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SalesReportComponent } from './Components/sales-report/sales-report.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DrugsComponent,
    DrugFormsComponent,
    SuppliersComponent,
    Notfound404Component,
    SupplierFormComponent,
    DashboardDctComponent,
    CartsComponent,
    ResponsesComponent,
    OrdersComponent,
    OrderFormComponent,
    OrderFormUserComponent,
    SalesReportComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    MdbCheckboxModule,
    NgxPaginationModule
    

   
  ],
  providers: [{
  provide:HTTP_INTERCEPTORS,
  useClass : TokenInterceptor,
  multi : true
  },
  DatePipe

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
