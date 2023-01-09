import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CibilcheckComponent } from './cibilcheck/cibilcheck.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';

const routes: Routes = [
  {path:"viewenquiry",component:ViewenquiryComponent},
  {path:"viewcustomer",component:ViewcustomerComponent},
  {path:"cibilcheck",component:CibilcheckComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationexeRoutingModule { }
