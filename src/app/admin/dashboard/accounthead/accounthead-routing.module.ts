import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisbursmentComponent } from './disbursment/disbursment.component';
import { LedgerprocessComponent } from './ledgerprocess/ledgerprocess.component';

const routes: Routes = [
  {path:'disbursment',component:DisbursmentComponent},
  {path:'ledgerprocess',component:LedgerprocessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountheadRoutingModule { }
