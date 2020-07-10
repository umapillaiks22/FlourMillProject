import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddproductService } from '../../../services/addproduct.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });
  constructor(private addproductSer: AddproductService) { }
  submit() {
    console.log(this.productForm.value);
    this.addproductSer.add(this.productForm.value).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    });
  }

  reset() {
    this.productForm.reset();
  }
  ngOnInit() {
  }

}
