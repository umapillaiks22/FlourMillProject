import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewordersService {

  constructor( private http: HttpClient) {

  }

  getAll() {
    // return this.afd.object('staffS').snapshotChanges();
      return this.http.get("http://localhost:3000/orders");
  }
  getAllStaff() {
      return this.http.get("http://localhost:3000/staff");
  }
  
  findByid(id){
    console.log(id);
    return this.http.get("http://localhost:3000/orders/findById?id="+id);
  }  

}

