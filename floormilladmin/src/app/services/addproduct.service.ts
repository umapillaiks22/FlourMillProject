import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private http: HttpClient) { }

  add(product) {
    return this.http.post('http://localhost:3000/producttype/add',product);
  }
}
