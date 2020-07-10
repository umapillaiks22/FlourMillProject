import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignedordersService {

  constructor(private http: HttpClient) { 

  }

  findByid(id){
    console.log(id);
    return this.http.get("http://localhost:3000/orders/findById?id="+id);
  } 
  // findByflag(id){
  //   console.log(id);
  //   return this.http.get("http://localhost:3000/staff/findById?id="+id);
  // } 
}
