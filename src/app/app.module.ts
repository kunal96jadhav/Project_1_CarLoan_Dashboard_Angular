import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidebarComponent } from './admin/sidebar/sidebar.component';

import {HeaderComponent } from './template/header/header.component';
import {FooterComponent } from './template/footer/footer.component';

import {NavigationComponent } from './template/navigation/navigation.component';

import {HomeComponent } from './admin/home/home.component';
import {DashboardComponent } from './admin/dashboard/dashboard.component';
import {LoginComponent } from './component/login/login.component';
import {RegistrationComponent } from './component/registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { OperationexeModule } from './admin/dashboard/operationexe/operationexe.module';
import { OperationexeRoutingModule } from './admin/dashboard/operationexe/operationexe-routing.module';
import { SalesexeModule } from './admin/dashboard/salesexe/salesexe.module';
import { SalesexeRoutingModule } from './admin/dashboard/salesexe/salesexe-routing.module';
import { AccountheadModule } from './admin/dashboard/accounthead/accounthead.module';
import { AccountheadRoutingModule } from './admin/dashboard/accounthead/accounthead-routing.module';
import { RelationalexeModule } from './admin/dashboard/relationalexe/relationalexe.module';
import { RelationalexeRoutingModule } from './admin/dashboard/relationalexe/relationalexe-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,

    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDividerModule,
    OperationexeModule,
    OperationexeRoutingModule,
    SalesexeModule,
    SalesexeRoutingModule,
    AccountheadModule,
    AccountheadRoutingModule,
    RelationalexeModule,
    RelationalexeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
