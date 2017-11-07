import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Authnicationservice } from '../authenicate.server';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private menuctrl:MenuController,
              private service:Authnicationservice,
              private loadingctrl:LoadingController,
              private alertctrl:AlertController,
              private toastctrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  ngOnInit() {

  }
  openmenu(){
this.menuctrl.open();
  }
  onsubmit(form:NgForm){
let loading=this.loadingctrl.create({
  content:"SignIn loading..."
});
this.service.signin(form).then(()=>{
loading.dismiss();
this.toastctrl.create({
  message:"Signed In!",
  duration:3000
}).present();
}).catch(error=>{
  loading.dismiss();
  this.alertctrl.create({
    title:"SignIn Failed",
    message:error,
    buttons:['Ok']
}).present();

});
  }

}
