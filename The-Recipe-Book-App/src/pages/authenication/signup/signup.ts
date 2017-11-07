import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Authnicationservice } from '../authenicate.server';
// import { SigninPage } from '../signin/signin';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private menuctrl:MenuController,
     private service:Authnicationservice,
     private loadingctrl:LoadingController,
     private alertctrl:AlertController,
     private toastctrl:ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  openmenu(){
    this.menuctrl.open();
  }
  onsubmit(form:NgForm){
  let loading= this.loadingctrl.create({
      content:"Please Wait...",
    });
  
loading.present();
    this.service.signup(form).then((data)=>{
loading.dismiss();
this.toastctrl.create({
  message:"SignUp Success!",
  duration:3000
}).present();
}).catch(error=>  {

      this.alertctrl.create({
        title:"Signup Failed!",
        message:error.message,
        buttons:['Ok']
      }).present();
      loading.dismiss();      
    }
  );
      }
    
}
