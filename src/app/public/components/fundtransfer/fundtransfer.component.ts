import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FundtransferService } from 'src/app/services/fundtransfer.service';
import { TransferRequest } from '../../interfaces';
@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent {
  public showMsg: boolean = false;
  public msg: string = 'Transfer Successful';
  currentUser = JSON.parse(sessionStorage.getItem('user')!);
  name=this.currentUser.userName;
  accountNumber =this.currentUser.accountNumber;
  formData = new FormGroup({
    destAccNumber: new FormControl('', [Validators.required]),
    destAccTypeId: new FormControl('', [Validators.required]),
    transferAmount: new FormControl('', [Validators.required]),
  })
  
  constructor(
    private router: Router,
    private fundTransferService: FundtransferService
  ) { }

  fundTransfer()    
  {    
    const transfer = this.formData.value;  
    transfer.sourceAccNumber=this.accountNumber;
    this.fundTransferUser(transfer);    
  }    
  fundTransferUser(transfer:TransferRequest)    
  {    
    console.log(transfer);
  this.fundTransferService.fundTransfer(transfer).subscribe(    
    (data)=>    
    {    
      console.log(data);
      this.showMsg=true;
    });    
  }    
}    

 

