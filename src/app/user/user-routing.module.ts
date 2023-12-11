import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewLeadComponent } from './view-lead/view-lead.component';
import { AddLeadComponent } from './add-lead/add-lead.component';

const routes: Routes = [
  {
    path: '', component: UserHomeComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'viewLead', component: ViewLeadComponent },
      { path: 'addlead', component: AddLeadComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
