import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { DocumentreportComponent } from './documentreport/documentreport.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { ShowuserComponent } from './showuser/showuser.component';

const routes: Routes = [
  {path:'createuser',component:CreateuserComponent},
  {path:'showuser',component:ShowuserComponent},
  {path:'sendemail',component:SendemailComponent},
  {path:'documentsreport',component:DocumentreportComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesexeRoutingModule { }
