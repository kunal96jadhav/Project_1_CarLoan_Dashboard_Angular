import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesexeRoutingModule } from './salesexe-routing.module';
import { CreateuserComponent } from './createuser/createuser.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { DocumentreportComponent } from './documentreport/documentreport.component';


@NgModule({
  declarations: [
    CreateuserComponent,
    ShowuserComponent,
    SendemailComponent,
    DocumentreportComponent
  ],
  imports: [
    CommonModule,
    SalesexeRoutingModule
  ],
  exports:[
    CreateuserComponent,
    ShowuserComponent,
    SendemailComponent,
    DocumentreportComponent
  ]
})
export class SalesexeModule { }
