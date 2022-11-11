import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../../custom-validator';
import { AuthService } from '../../services/auth-service/auth.service';
import { SharedService } from '../../../services/shared.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  message :string;
  registerForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    middlename:new FormControl(null),
    lastname: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    username : new FormControl(null, [Validators.required]),
    accountTypeId : new FormControl(null, [Validators.required]),
    mobileNumber: new FormControl(null,[ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]),
    
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
  )

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  register()    
  {    
    const register = this.registerForm.value;  
    if(register.middlename==null)  
    {
      register.middlename="";
    }
    if(register.accountNumber==null)  
    {
      register.accountNumber="";
    }
    this.registerUser(register);    
  }    
  registerUser(register:RegisterRequest)    
  {    
    console.log(register);
  this.sharedService.register(register).subscribe(    
    (data)=>    
    {    
      console.log(data);
      this.message="Registration successful";
      this.router.navigate(["../login"]);
    });    
  }    
}    

 

