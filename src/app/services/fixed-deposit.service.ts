import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FixedDepositService {
  readonly APIurl = "https://localhost:7282/Bank/";

  constructor(private http: HttpClient) { }
  AddFd(FdRequest:any) : Observable<any>{
    return this.http.post(this.APIurl + "FixedDeposit/Add",FdRequest,{responseType:'text'});
  }
}
