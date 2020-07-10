import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddstaffService } from '../../../services/addstaff.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  staffForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required)
  });
 
  
  constructor(private addstaffSer: AddstaffService) { }

  submit() {
    console.log(this.staffForm.value);
    this.addstaffSer.add(this.staffForm.value).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    });
  }

  reset() {
    this.staffForm.reset();
  }
  ngOnInit() {
  }

}
