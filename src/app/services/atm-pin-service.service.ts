import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AtmPinServiceService {

  readonly APIurl = "https://localhost:7282/Bank/";
  constructor(private http: HttpClient) { }
  changeAtmPin(ChangeAtmPin:any) : Observable<any>{
    return this.http.put(this.APIurl + "Atm/UpdateAtmPin",ChangeAtmPin,{responseType:'text'});
  }
}
