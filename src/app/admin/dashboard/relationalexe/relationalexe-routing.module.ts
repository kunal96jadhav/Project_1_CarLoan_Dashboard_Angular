import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicformComponent } from './basicform/basicform.component';
import { CommunicatewithcustomerComponent } from './communicatewithcustomer/communicatewithcustomer.component';
import { EnquiryComponent } from './enquiry/enquiry.component';

const routes: Routes = [
  {path:'basicform',component:BasicformComponent},
  {path:'communicatewithcustomer',component:CommunicatewithcustomerComponent},
  {path:'enquiry',component:EnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationalexeRoutingModule { }
