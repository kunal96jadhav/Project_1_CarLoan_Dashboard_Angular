import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';


import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { LoginComponent } from './component/login/login.component';
import { MainpageComponent } from './template/mainpage/mainpage.component';
import { NavigationComponent } from './template/navigation/navigation.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'nav',component:NavigationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
