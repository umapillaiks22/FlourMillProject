import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddstaffService {

  constructor(private http: HttpClient) { }

  add(staff) {
    return this.http.post('http://localhost:3000/staff/add', staff);
  }
}
