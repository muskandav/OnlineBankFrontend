import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FundtransferService {
  readonly APIurl = "https://localhost:7282/Bank/";

  
  currentUser = JSON.parse(sessionStorage.getItem('user')!);
  accountNumber =this.currentUser.accountNumber;
  constructor(private http: HttpClient) { }
  fundTransfer(TransferRequest:any) : Observable<any>{
    return this.http.post(this.APIurl + "FundTransfer/Transfer",TransferRequest,{responseType:'text'});
  }
}