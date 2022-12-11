import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddtaskComponent } from './addtask/addtask.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"dash",
    component:DashboardComponent
  },
  {
    path:"addemployee",
    component:AddEmployeeComponent
  },
  {
    path:"viewemployee",
    component:ViewEmployeeComponent
  },
  {
    path:"addtask",
    component:AddtaskComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    NavigationComponent,
    UserNavComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
