import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountheadModule } from './admin/dashboard/accounthead/accounthead.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OperationexeModule } from './admin/dashboard/operationexe/operationexe.module';
import { RelationalexeModule } from './admin/dashboard/relationalexe/relationalexe.module';
import { SalesexeModule } from './admin/dashboard/salesexe/salesexe.module';
import { HomeComponent } from './admin/home/home.component';


import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { LoginComponent } from './component/login/login.component';

import { NavigationComponent } from './template/navigation/navigation.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent,
   children:[
             {path:"operationexe",loadChildren:()=>OperationexeModule},
             {path:"salesexe",loadChildren:()=>SalesexeModule},
             {path:"accounthead",loadChildren:()=>AccountheadModule},
             {path:"relationalexe",loadChildren:()=>RelationalexeModule}
            ]
   },

  {path:'sidebar',component:SidebarComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'nav',component:NavigationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
