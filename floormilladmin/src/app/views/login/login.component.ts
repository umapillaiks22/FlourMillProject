import { Component,OnInit  } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  user:any =[];
  loginForm = new FormGroup({
    username: new FormControl(),
    password : new FormControl(),
  });
  login(){
    this.lser.getAll().subscribe(
      success=> {
        this.user=success;
        console.log(this.user)
        let u = this.loginForm.value.username;
        let p = this.loginForm.value.password;
  
        for(let i=0; i<this.user.length; i++)
        {
          if( u == this.user[i].username && p == this.user[i].password)
          {
            alert('Login successful');

          }
        }
      },
      error=>{console.log(error);
      });
      
  }
  constructor(private lser: LoginService) {
    this.lser.getAll().subscribe(success =>{this.user=success;},
      error => {console.log(error);
      });
  
   }
    ngOnInit() {
    }
  
  }