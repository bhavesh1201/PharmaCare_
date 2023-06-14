import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl : string ="https://localhost:7004/api/User/";
  constructor(private http :HttpClient) { }
getUsers()
{
  console.log('Api service called')
  return this.http.get<any>(`${this.baseUrl}GetAllUser`)
}

}
