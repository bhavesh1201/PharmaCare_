import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl : string ="https://localhost:7004/api/User/";
  constructor(private http : HttpClient) { }

  SignUp(UserObj:object){
    return this.http.post<any>(`${this.baseUrl}SignUp`,UserObj);

  }

  Login(LoginObj : object){
    return this.http.post<any>(`${this.baseUrl}Login`,LoginObj);
  }
}
