import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
export const firebaseConfig={
  apiKey: "AIzaSyC4ltciV1tQkS--LPB6kcTtryUDUR9in2s",
  authDomain: "ionicoauth-98db5.firebaseapp.com",
  databaseURL: "https://ionicoauth-98db5.firebaseio.com",
  projectId: "ionicoauth-98db5",
  storageBucket: "ionicoauth-98db5.appspot.com",
  messagingSenderId: "1096048744973"
}
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,

  ]
})
export class AppModule {}
