import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private userPayload : any;

  private baseUrl : string ="https://localhost:7004/api/User/";
  constructor(private http : HttpClient , private route : Router ) {
    this.userPayload = this.decodedToken();
   }

  SignUp(UserObj:object){
    return this.http.post<any>(`${this.baseUrl}SignUp`,UserObj);

  }

  Login(LoginObj : object){
    return this.http.post<any>(`${this.baseUrl}Login`,LoginObj);
  }

  Logout(){
localStorage.clear();
this.route.navigate(['login'])

  }

  storeToken (tokenValue: string){
    localStorage.setItem('token',tokenValue);

  }

  getToken() {
  

    return localStorage.getItem('token')
  }

  
  isLogged():boolean{
  

    return !! localStorage.getItem('token')
  }

  decodedToken(){
     const jwtHelper = new JwtHelperService();
    const token = this.getToken();
    var nex = <string>token;

     return jwtHelper.decodeToken(nex);
  }
  
  getFullNameFromToken(){
    if(this.userPayload)
    return this.userPayload.unique_name;
  }
  getRoleFromToken(){
    if(this.userPayload){
      return this.userPayload.role;
    }
  }

}
