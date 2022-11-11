import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { LoginRequest } from '../../interfaces';
import { SharedService } from '../../../services/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  msg:string;
  showMsg:boolean=false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

 
  login()    
  {    
    const request = this.loginForm.value;  
    this.loginUser(request);    
  }    
  loginUser(request:LoginRequest)    
  {    
    console.log(request);
  this.sharedService.login(request).subscribe(    
    (data)=>    
    {    

      // console.log(data);
      let userdata=JSON.parse(data);
      sessionStorage.setItem('user',data);
      console.log(userdata);
      console.log(userdata.userName);
      this.router.navigate(["../../protected/dashboard"]);
    }, (error) => {
      console.log(error);
      alert("User Not Found");
   }
);    
    
   
  }    

}
