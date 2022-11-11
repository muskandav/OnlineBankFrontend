import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../public/interfaces';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "https://localhost:7282/Bank/";
  constructor(private http: HttpClient) { }
 register(RegisterRequest:any) : Observable<any>{
    return this.http.post(this.APIurl + "User/Register",RegisterRequest,{responseType:'text'});
  }
login(request:LoginRequest): Observable<any>{
  return this.http.post(this.APIurl + "User/Login",request,{responseType:'text'});
}
}