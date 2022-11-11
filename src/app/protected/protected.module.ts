import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { PublicModule } from '../public/public.module';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        // Import our Routes for this module
        ProtectedRoutingModule,
        // Angular Material Imports
        MatButtonModule,
        PublicModule
        
    ]
})
export class ProtectedModule { }