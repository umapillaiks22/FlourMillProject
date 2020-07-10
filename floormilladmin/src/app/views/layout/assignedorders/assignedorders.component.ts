import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { NewordersService } from '../../../services/neworders.service';
import {StaffdetailsService} from '../../../services/staffdetails.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-assignedorders',
  templateUrl: './assignedorders.component.html',
  styleUrls: ['./assignedorders.component.css']
})
export class AssignedordersComponent implements OnInit {
  orders: any = [];
  staff: any=[];
  key:any=[];

  constructor(private ordersSer: NewordersService,private staffSer: StaffdetailsService,private router : Router, private act:ActivatedRoute) {
  }
  ordersForm = new FormGroup({
    id : new FormControl(''),
    name : new FormControl('')
  });

  getAll() {
    this.ordersSer.getAll().subscribe(success => {
      console.log(success)
      this.orders = snapshotToArray(success);
      console.log(this.orders);

    } , error => {
      console.log(error);
    })
  }
  ngOnInit() {
    // this.getAll();
    this.getAllStaff();

    this.act.queryParams.subscribe(params => {
      console.log(params);
      this.orders = params.key;
      this.ordersSer.findByid(this.orders).subscribe(success=>{
        this.orders=success;
        console.log(this.orders);
      },error=>{
        console.log(error);
      })
    });
  }

  getAllStaff(){
    this.staffSer.getAll().subscribe(success => {
      console.log(success)
      this.staff = snapshotToArray(success);
      console.log(this.staff);

    } , error => {
      console.log(error);
    })
  }

  selectedStaff;
  assignStaff()
  {
    console.log(this.selectedStaff);

  }


  assigstaff(staff){

    console.log(this.selectedStaff);
    this.router.navigate(['/layout/neworders'],{
      queryParams :{
        key: this.staff.key
      }
    });
  }
  getOrder(){
    //console.log("Here too");
    this.ordersSer.findByid(this.orders).subscribe(success=>{
      this.orders=success;
      console.log(this.orders);
    },error=>{
      console.log(error);
    })
  }

}

const snapshotToArray = (snapshot) => {
  var returnArr = [];
  for(let item in snapshot)

  {
    let obj :any = {}
    obj = snapshot[item];
    obj.key = item;
    returnArr.push(obj);
  }
  console.log(returnArr);
  return returnArr;
}
