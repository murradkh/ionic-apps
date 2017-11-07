import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TapsPage } from '../pages/taps/taps';
import { SigninPage } from '../pages/authenication/signin/signin';
import { SignupPage } from '../pages/authenication/signup/signup';
import fire from 'firebase';
import { Authnicationservice } from '../pages/authenication/authenicate.server';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('menu') private menuctrl:MenuController;
  private isAuthnicated:boolean=false;
  private rootPage:any = TapsPage;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private service:Authnicationservice) {

    fire.initializeApp({
      apiKey: "AIzaSyABh5mvOXy7lwRl0knUqxyYPlqLSHEHfLU",
      authDomain: "shapus-ecbb4.firebaseapp.com"
    });
    
    fire.auth().onAuthStateChanged((user)=>{
if(user){
  this.isAuthnicated=true;
  this.rootPage=TapsPage;
}else{
  this.isAuthnicated=false;
  this.rootPage=SigninPage;
}
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  signinpage(){
    this.rootPage=SigninPage;
    this.menuctrl.close();
  }
  signuppage(){
    this.rootPage=SignupPage;
    this.rootPage();    
    this.menuctrl.close();
    
  }
  logout(){
    
this.service.logout();
    this.menuctrl.close();

  }
  recipebook(){
    this.rootPage=TapsPage;
    this.menuctrl.close();
    
  }
}

