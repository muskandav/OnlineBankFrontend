import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FixedDepositService } from 'src/app/services/fixed-deposit.service';
import { FdRequest } from '../../interfaces';

@Component({
  selector: 'app-openfd',
  templateUrl: './openfd.component.html',
  styleUrls: ['./openfd.component.css']
})
export class OpenfdComponent {
  public showMsg: boolean = false;
  public msg:string;
  currentUser = JSON.parse(sessionStorage.getItem('user')!);
  name=this.currentUser.userName;
  accountNumber =this.currentUser.accountNumber;
  fdPeriods: number[] = [1,2,3,4,5];
  fdProducts: string[] = ['Standard', 'Tax Savings', 'Special', 'Corporate', 'Regular', 'Senior Citizen', 'Flexi'];
  formData = new FormGroup({
    product: new FormControl('', [Validators.required]),
    fdPeriod: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  })

  OnSubmit(): void {
    this.showMsg = true;
    this.msg = 'New FD opened!'
  }
  constructor(
    private router: Router,
    private fixedDepositService: FixedDepositService
  ) { }

  createFdRequest()    
  {    
    const request = this.formData.value;  
    request.accountNumber=this.accountNumber;
    this.createFd(request);    
  }    
  createFd(request:FdRequest)    
  {    
    console.log(request);
    this.fixedDepositService.AddFd(request).subscribe(    
    (data)=>    
    {    
      console.log(data);
      this.showMsg=true;
      this.msg = 'New FD opened!'
    });    
  }    
  

}
