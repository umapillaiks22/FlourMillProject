import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  add(order) {
    return this.http.post('http://localhost:3000/checkout/add',order);
  }
}
