import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SignupService } from "../../services/signup.service";
import { LoadingController, AlertController } from '@ionic/angular';
import {User} from "../../interfaces/user-options"
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SignUpModule } from './signup.module';
import { Storage } from '@ionic/storage';
import { database } from 'firebase';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  submitted = false;
  createUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
    });
  constructor(
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public signupService: SignupService,
    public router: Router,
    public alertCtrl: AlertController
  ) { }
   createUser() : void {
    console.log('user',this.createUserForm.value);
    this.signupService.RegisterUser(this.createUserForm.value).then(data =>{
      console.log('uid account: ', data.user.uid);
      var uid = data.user.uid
      this.signupService.SetUserData(uid,this.createUserForm.value);
      console.log("registration successfull");
      this.router.navigateByUrl('app/tabs/home');
    },(reason) => {
      console.log("error in registeration",reason);
    });
  }
  ngOnInit() {
  }

}
