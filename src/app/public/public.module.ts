import { PublicRoutingModule } from './public-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio'; 
import { ChangepinComponent } from './components/changepin/changepin.component';
import { FundtransferComponent } from './components/fundtransfer/fundtransfer.component';
import { IssuechequeComponent } from './components/issuecheque/issuecheque.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { OpenfdComponent } from './components/openfd/openfd.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    LoginComponent,
        RegisterComponent,
        ChangepinComponent,
        FundtransferComponent,
        IssuechequeComponent,
        FrontpageComponent,
        CheckbalanceComponent,
        OpenfdComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
      MatTabsModule,
      FormsModule,
      MatFormFieldModule,
      CommonModule,
      ReactiveFormsModule,
      MatTableModule,
      MatRadioModule,
      MatSelectModule
    ],
    exports: [
        ChangepinComponent,
        FundtransferComponent,
        IssuechequeComponent,
        FrontpageComponent,
        CheckbalanceComponent,
        OpenfdComponent
    ]
})
export class PublicModule { }
