import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationexeRoutingModule } from './operationexe-routing.module';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { CibilcheckComponent } from './cibilcheck/cibilcheck.component';


@NgModule({
  declarations: [
    ViewenquiryComponent,
    ViewcustomerComponent,
    CibilcheckComponent
  ],
  imports: [
    CommonModule,
    OperationexeRoutingModule
  ],
  exports:[ViewenquiryComponent,
    ViewcustomerComponent,
    CibilcheckComponent]
})
export class OperationexeModule { }
