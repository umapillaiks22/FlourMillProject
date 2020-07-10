import { Component, OnInit } from '@angular/core';
import { PricemodificationService } from '../../../services/pricemodification.service';

@Component({
  selector: 'app-pricemodification',
  templateUrl: './pricemodification.component.html',
  styleUrls: ['./pricemodification.component.css']
})
export class PricemodificationComponent implements OnInit {
  price: any = [];
  product : any = [] ;
  isEnabled: boolean = false;

  constructor(private pricemodSer: PricemodificationService) { }

  getAll() {
    console.log('here');
    this.pricemodSer.getAll().subscribe(success => {
      console.log(success);
      this.product = snapshotToArray(success);
      console.log(this.product);
    } , error => {
      console.log(error);
    });
  }

  ngOnInit() {
    console.log('in ngoninit');
    this.getAll();
  }


}

const snapshotToArray = (snapshot) => {
  const returnArr = [];
  for (let item in snapshot) {
    let obj:any = [];
    obj = snapshot[item];
    obj.key = item;
    returnArr.push(obj);
  }
  console.log(returnArr);
  return returnArr;
};
