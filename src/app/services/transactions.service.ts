import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, TransactionResponse } from '../public/interfaces';


@Injectable({
  providedIn: 'root'
})

export class TransactionsService {
  readonly APIurl = "https://localhost:7282/Bank/";

  
  currentUser = JSON.parse(sessionStorage.getItem('user')!);
  accountNumber =this.currentUser.accountNumber;
  constructor(private http: HttpClient) { }
  
  getTransactions(): Observable<any>{
  //let queryParams = new HttpParams().append("accountNumber",this.accountNumber);
  return this.http.get(this.APIurl + "FundTransfer/GetTransaction/"+this.accountNumber);
}
}