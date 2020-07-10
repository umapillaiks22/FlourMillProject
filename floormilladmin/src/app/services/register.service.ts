import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  constructor(private http:HttpClient) { 

  }
  getRegister(){
    return this.http.get('http://localhost:3000/register');
  }
  add(l){
    return this.http.post('http://localhost:3000/login/add',l);
  }
}