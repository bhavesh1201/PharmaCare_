import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  isLoggedIn = false;
  private roles: string[] = [];
  showUserBoard = false;
  showAdminBoard = false;
  username?: string;
  currentUser: any;

  hdn : boolean = false;
  public totalItem : number = 0;

  constructor(public  authSer : AuthService,
     public route : Router ,
      public cartService : CartsService,
      public User : UserStoreService
      ){}

  ngOnInit(): void {
   this.isLoggedinCheck();
   this.isLoggedIn = !! this.authSer.getToken();
  
       if(this.isLoggedIn){
        this.roles = this.authSer.getRoleFromToken();
        this.User.getRoleFromStore()
    .subscribe(val=>{
      let roleFromToken = this.authSer.getRoleFromToken();
      this.roles = val || roleFromToken
    })
        console.log(this.roles);
        
        this.username = this.authSer.getFullNameFromToken();
        this.showAdminBoard = this.roles.includes('Admin')
         this.showUserBoard = this.roles.includes('Doctor')

       }

   this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    this.User.getFullNameFromStore()
    .subscribe(val=>{
      let fullNameFromToken = this.authSer.getFullNameFromToken();
      this.currentUser = val || fullNameFromToken
    })
       
        console.log(this.currentUser + 'work in header')

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
