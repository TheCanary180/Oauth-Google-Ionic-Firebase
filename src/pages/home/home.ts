import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public googleplus:GooglePlus) {

  }
  login(){
    this.googleplus.login({
      'webClientId':'1096048744973-bm16v2jq2bjmpjoosc0tn1ol8o3267gs.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
        alert("LOGIN SUC")
      }).catch(ns=>{
        alert("Not Succ")
      })
    })
  }
}
