import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  hdn : boolean = false;
  public totalItem : number = 0;

  constructor(public  authSer : AuthService, public route : Router , public cartService : CartsService){}

  ngOnInit(): void {
   this.isLoggedinCheck();
  
   this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })


  }

 isLoggedinCheck(){
  if(this.authSer)
  {
    console.log("is logged in of head component is called");
    
    this.hdn=false;
  }
  else{
    this.hdn=true;
  }
 }
 logout(){
  console.log("logout has been called in header component")
  this.hdn=true
  this.authSer.Logout();
  

 
  
  
  

}



  

}
