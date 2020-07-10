import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SignupService } from './services/signup.service';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { environment } from '../environments/environment';
//  import {BrowserModule} from '@angular/platform-browser';


var firebaseConfig = {
  apiKey: "AIzaSyBCJFq-gTC3m9pML2dW01E2i-KcoT_hw5E",
  authDomain: "floormillproject.firebaseapp.com",
  databaseURL: "https://floormillproject.firebaseio.com",
  projectId: "floormillproject",
  storageBucket: "floormillproject.appspot.com",
  messagingSenderId: "390603983153",
  appId: "1:390603983153:web:1f0dea1653db80efe88810",
  measurementId: "G-V9P8TNTG1C"
};
@NgModule({
  imports: [

    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestoreModule,AngularFireAuthModule, AngularFireDatabaseModule, InAppBrowser, SplashScreen, StatusBar,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
