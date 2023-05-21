import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private auth : AuthService , private route : Router , private toast : NgToastService){

}

   
  
  canActivate():boolean {
    
    if(this.auth.isLogged())
    {
      console.log("work authguard");
      
      return true;
    }
    else
   {
    console.log("not work authGuard")
     this.toast.error({detail:"Error", summary:"Please Login First"})
      this.route.navigate(['login'])
    return false;
   }

  }
  
}
