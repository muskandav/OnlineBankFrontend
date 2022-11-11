import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions.service';
import { Router } from '@angular/router';
import { TransactionResponse } from '../../interfaces';
@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit{
  constructor(
    private router: Router,
    private transactionService: TransactionsService,
   
  ) { }
  
  ngOnInit(){
    this.getTransactions()
  }
  
  displayedColumns: string[] = ['transDate', 'transactionType', 'amount'];
  transactions: any=[];
  currentUser = JSON.parse(sessionStorage.getItem('user')!);
  name=this.currentUser.userName;
  accountNumber =this.currentUser.accountNumber;
  balance=this.currentUser.balance;
  // accNo:any=sessionStorage.getItem('user');
  // accountNumber = JSON.parse(accNo);
  getTransactions():any{
   
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
        console.log(this.transactions); 
        
      });
}
  }
 
