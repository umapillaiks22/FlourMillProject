import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {FormGroup , FormControl} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{
  register:any =[];
  registerForm = new FormGroup({
    username : new FormControl(),
    email : new FormControl(),
    lane : new FormControl(),
    area : new FormControl(),
    city : new FormControl(),
    circle : new FormControl(),
    password : new FormControl(),
    cpassword : new FormControl(),
  });

    addinfo(){
      console.log(this.registerForm.value);
      this.rser.add(this.registerForm.value).subscribe(
        success => {console.log(success);
          this.rser.getRegister().subscribe(success =>{this.register=success;},
            error =>{console.log(error);
            });
        },
        error => {console.log(error);
        });
      }

      constructor(private rser:RegisterService) {
        this.rser.getRegister().subscribe(success =>{this.register=success;},
          error => {console.log(error);
          });
    
       }
      
      ngOnInit() {
      }
    
    }
  
  