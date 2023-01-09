import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationalexeRoutingModule } from './relationalexe-routing.module';
import { BasicformComponent } from './basicform/basicform.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CommunicatewithcustomerComponent } from './communicatewithcustomer/communicatewithcustomer.component';


@NgModule({
  declarations: [
    BasicformComponent,
    EnquiryComponent,
    CommunicatewithcustomerComponent
  ],
  imports: [
    CommonModule,
    RelationalexeRoutingModule
  ],
  exports:[
    BasicformComponent,
    EnquiryComponent,
    CommunicatewithcustomerComponent
  ]
})
export class RelationalexeModule { }
