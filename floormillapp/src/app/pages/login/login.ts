import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { SignupService } from "../../services/signup.service";

import { UserData } from '../../providers/user-data';

import { User } from '../../interfaces/user-options';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: User = { username: '', password: '' ,email:'',uid:''};

  constructor(  public signupService: SignupService,
    public userData: UserData,
    public router: Router

  ) { }

  Ulogin(email,password){
    this.signupService.SignIn(email.value,password.value)
    .then((res) => {
      console.log(res)

      this.router.navigateByUrl('/app/tabs/home');

    }).catch((error) => {
      window.alert(error.message)
    })
}
}
