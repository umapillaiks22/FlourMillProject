import { Injectable, NgZone } from '@angular/core';

import * as firebase from 'firebase/app';
import { User } from "../interfaces/user-options";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  userData: any;

  constructor(
    private db : AngularFireDatabase,
    public afStore: AngularFirestore,
    private ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
  SignIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
  public getUID() : string {
    return firebase.auth().currentUser.uid;
  }







  // Register user with email/password
  RegisterUser(user:User)  : Promise<firebase.auth.UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(user.email,user.password,)
  }


  // Email verification when new user register
  SendVerificationMail() {
    return firebase.auth().currentUser.sendEmailVerification()

  }
  SetUserData(uid,user : User) : void {
    firebase.database().ref('users/' + uid).set({
      username: user.username,
      email:user.email,
    });
  }
  // Sign-out
  SignOut() {
    return firebase.auth().signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}
