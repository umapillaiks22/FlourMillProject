import { Component, OnInit } from '@angular/core';
import { StaffdetailsService } from '../../../services/staffdetails.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { NewordersService } from '../../../services/neworders.service';


@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.component.html',
  styleUrls: ['./staffdetails.component.css']
})
export class StaffdetailsComponent implements OnInit {

  constructor(private staffSer: StaffdetailsService,private actRoute:ActivatedRoute, private router:Router) { }
  staffs: any = [];
  key: any = [];
  isCollapsed: boolean = false;
  show: boolean = false;

  staffForm = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    // age : new FormControl(''),
    // contact: new FormControl(''),
    // address: new FormControl(''),
    // pin: new FormControl('')
  });

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  getAllStaff() {
   
    this.staffSer.getAll().subscribe(success => {
      console.log(success)
      this.staffs = snapshotToArray(success); 
      console.log(this.staffs);
      
    } , error => {
      console.log(error);
    })
  }

  assignstaff(staff){
    this.router.navigate(['/layout/assignedorders'],{
      queryParams :{
        key: staff.key
      } 
    });
  }

  ngOnInit() {
    //console.log('in ngoninit');
    this.getAllStaff();
  }

}

const snapshotToArray = (snapshot) => {
  const returnArr = [];
  for (let item in snapshot) {
    let obj :any = {}
    obj = snapshot[item];
    obj.key = item;
    returnArr.push(obj);
  };
  console.log(returnArr);
  return returnArr;
};
