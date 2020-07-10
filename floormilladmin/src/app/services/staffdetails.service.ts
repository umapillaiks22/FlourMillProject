import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffdetailsService {
  constructor( private http: HttpClient) {

  }

  getAll() {
    // return this.afd.object('staffS').snapshotChanges();
      return this.http.get('http://localhost:3000/staff');
  }

  findByid(id){
    console.log(id);
    return this.http.get("http://localhost:3000/staff/findById?id="+id);
  } 

}
