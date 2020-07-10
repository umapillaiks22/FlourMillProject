// import { Component, OnInit } from '@angular/core';
// import { NewordersService } from '../../../services/neworders.service';
// @Component({
//   selector: 'app-neworders',
//   templateUrl: './neworders.component.html',
//   styleUrls: ['./neworders.component.css']
// })
// export class NewordersComponent implements OnInit {

//   constructor(private ordersSer: NewordersService) { }
//   orders: any = [];
//   getAll() {
   
//     this.ordersSer.getAll().subscribe(success => {
//       console.log(success)
//       this.orders = snapshotToArray(success); 
//       console.log(this.orders);
      
//     } , error => {
//       console.log(error);
//     })
//   }

//   ngOnInit() {
    
//     this.getAll();
//   }

// }z

// const snapshotToArray = (snapshot) => {
//   var returnArr = [];
//   for(let item in snapshot)
  
//   {
//     let obj :any = {}
//     obj = snapshot[item];
//     obj.key = item;   
//     returnArr.push(obj);
//   }
//   console.log(returnArr);
//   return returnArr;
// }
import { Component, OnInit } from '@angular/core';
import { NewordersService } from '../../../services/neworders.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {StaffdetailsService} from '../../../services/staffdetails.service';


@Component({
  selector: 'app-neworders',
  templateUrl: './neworders.component.html',
  styleUrls: ['./neworders.component.css']
})
export class NewordersComponent implements OnInit {

  constructor(private ordersSer: NewordersService,private staffSer: StaffdetailsService,private act:ActivatedRoute, private router:Router) {

   }
  

  orders: any = [];
  staff: any=[];
  key : any=[];

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
    this.router.navigate(['/layout/assignedorders'],{
      queryParams :{
        key: staff.key,
        staffkey: staff.key
      } 
    });
  }


  // pending(){
  //   console.log(this.ordersForm.value);
  //   this.router.navigate(['/newdorders']);
  // }
  ngOnInit() {
    
    this.getAll();
    this.getAllStaff();

    this.act.queryParams.subscribe(params => {
      console.log(params);
      this.staff = params.key;
      this.staffSer.findByid(this.staff).subscribe(success=>{
        this.staff=success;
        console.log(this.staff);
      },error=>{
        console.log(error);
      })
    });

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

