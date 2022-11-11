import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckBookService } from 'src/app/services/check-book.service';
import { checkBook } from '../../interfaces';

@Component({
  selector: 'app-issuecheque',
  templateUrl: './issuecheque.component.html',
  styleUrls: ['./issuecheque.component.css']
})
export class IssuechequeComponent{
  public showMsg: boolean = false;
  public msg: string = 'Request Raised!';
  currentUser = JSON.parse(sessionStorage.getItem('user')!);
  name=this.currentUser.userName;
  accountNumber =this.currentUser.accountNumber;

  formData = new FormGroup({
    options: new FormControl('', [Validators.required]),
});


  constructor(
    private router: Router,
    private checkBookService: CheckBookService
  ) { }


  OnSubmit(): void {
    if(this.formData.value.options == "Yes"){
      this.formData.value.accountNumber=this.accountNumber;
      this.formData.value.requestedDate=new Date();
      const request=this.formData.value;
      this.CbRequest(request);
    }
    else{
      this.msg="Select yes to submit checkbook request! "
    }
    
  }
  CbRequest(request:checkBook)
  {    
    console.log(request);
    this.checkBookService.AddCb(request).subscribe(    
    (data)=>    
    {    
      console.log(data);
      this.showMsg=true;
      this.msg = 'Checkbook request submitted!'
    });    
  }   
}
