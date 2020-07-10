import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  add(person) {
    return this.http.post('http://localhost:3000/account/add',person);
  }
  getAll() {
    return this.http.get("http://localhost:3000/account");
  }
}
