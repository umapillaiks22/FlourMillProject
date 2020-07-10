import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PricemodificationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/producttype');
  }

  update () {
    return this.http.get('http://localhost:3000/producttype/update');
  }
}
