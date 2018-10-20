import { ErrorHandler, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { Firebase } from '@ionic-native/firebase';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';

const firebase = {
  apiKey: "AIzaSyDWp-Y6kBxO_vjL3Kpuez54KvE8LAN9PBU",
  authDomain: "work-medium.firebaseapp.com",
  databaseURL: "https://work-medium.firebaseio.com",
  projectId: "work-medium",
  storageBucket: "work-medium.appspot.com",
  messagingSenderId: "389575909358"
 }

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
