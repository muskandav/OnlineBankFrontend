import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent{

  @Output() selectedIndex = true;
  @Input() userAccountNumber = '';


  constructor(
    private router: Router,
  ) {
    
  }
  Logout(){
      sessionStorage.clear();
      this.router.navigate(["../login"]);
    
    }
  }

