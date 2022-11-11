import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmPinServiceService } from 'src/app/services/atm-pin-service.service';
import { ChangeAtmPin } from '../../interfaces';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChangepinComponent {

  public showMsg: boolean = false;
  public msg: string = '';
    
  formData = new FormGroup({
    oldAtmPin: new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]+')]),
    newAtmPin: new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]+')]),
    ConfirmNewPin: new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]+')]),
  });
  currentUser = JSON.parse(sessionStorage.getItem('user')!);
  name=this.currentUser.userName;
  accountNumber =this.currentUser.accountNumber;

  constructor(
    
    private atmPinService: AtmPinServiceService
  ) { }

  OnSubmit(): void {
    const newP = this.formData.get('newAtmPin')?.value;
    const Confirmnew = this.formData.get('ConfirmNewPin')?.value;
    if (newP == Confirmnew) {
      console.log(this.formData.value);
      console.log(this.formData.valid);
      const atmPin = this.formData.value;  
      atmPin.accountNumber=this.accountNumber;
      this.ChangeAtmpPin(atmPin);
      this.showMsg = true;
    }
    else {
      console.log("Should be the same as New Pin");
      this.msg = 'Confirm PIN should be the same as new PIN.';
      this.showMsg = true;
    }
     
    }
    ChangeAtmpPin(atmPin:ChangeAtmPin){
      this.atmPinService.changeAtmPin(atmPin).subscribe(    
        (data)=>    
        {    
          console.log(data);
          this.msg = 'PIN changed!';
          this.showMsg=true;
        });
    
  }
 
}
