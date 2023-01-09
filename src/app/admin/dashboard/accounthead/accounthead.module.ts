import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountheadRoutingModule } from './accounthead-routing.module';
import { DisbursmentComponent } from './disbursment/disbursment.component';
import { LedgerprocessComponent } from './ledgerprocess/ledgerprocess.component';


@NgModule({
  declarations: [
    DisbursmentComponent,
    LedgerprocessComponent
  ],
  imports: [
    CommonModule,
    AccountheadRoutingModule
  ],
  exports:[
    DisbursmentComponent,
    LedgerprocessComponent
  ]
})
export class AccountheadModule { }
