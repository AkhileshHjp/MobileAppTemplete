import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatListModule} from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { ViewLeadComponent } from './view-lead/view-lead.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    DashboardComponent,
    AddLeadComponent,
    ViewLeadComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    RouterModule
   
    
  ]
})
export class UserModule { }
