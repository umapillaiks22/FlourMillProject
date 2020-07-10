import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { PricemodificationComponent } from './pricemodification/pricemodification.component';
import { AssignedordersComponent } from './assignedorders/assignedorders.component';
import { PendingordersComponent } from './pendingorders/pendingorders.component';
import { NewordersComponent } from './neworders/neworders.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Layout'
    },
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: AdminhomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'staffdetails',
        component: StaffdetailsComponent,
        data: {
          title: 'Staff Details'
        }
      },
      {
        path: 'pricemodification',
        component: PricemodificationComponent,
        data: {
          title: 'Price Modification'
        }
      },
      {
        path: 'assignedorders',
        component: AssignedordersComponent,
        data: {
          title: 'Assigned Order'
        }
      },
      {
        path: 'pendingorders',
        component: PendingordersComponent,
        data: {
          title: 'Pending Order'
        }
      },
      {
        path: 'neworders',
        component: NewordersComponent,
        data: {
          title: 'New Orders'
        }
      },
      {
        path: 'addproduct',
        component: AddproductComponent,
        data: {
          title: 'add product'
        }
      },
      {
        path: 'addstaff',
        component: AddstaffComponent,
        data: {
          title: 'Add Staff'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
