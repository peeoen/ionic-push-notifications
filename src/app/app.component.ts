import { Component } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AlertController, Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private alertCtrl: AlertController,
    firebase: Firebase) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      firebase.getToken().then(token => console.log(token)).catch(err=> console.log(err));
      firebase.onNotificationOpen().subscribe(data=>{
        console.log(data);
        // console.log(data.name)
        let alert = this.alertCtrl.create({
          title: 'Parameters',
          message: JSON.stringify(data)
        });
        alert.present();
      }, err=> console.log(err));

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

