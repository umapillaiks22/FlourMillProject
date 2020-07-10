import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AssignedordersComponent } from './assignedorders/assignedorders.component';
import { NewordersComponent } from './neworders/neworders.component';
import { PendingordersComponent } from './pendingorders/pendingorders.component';
import { PricemodificationComponent } from './pricemodification/pricemodification.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Form, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AddproductComponent } from './addproduct/addproduct.component';



@NgModule({
  declarations: [
    AdminhomeComponent,
    AssignedordersComponent,
    NewordersComponent,
    PendingordersComponent,
    PricemodificationComponent,
    StaffdetailsComponent,
    AddstaffComponent,
    AddproductComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CollapseModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ]
})
export class LayoutModule { }
