import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Toggle } from 'ionic-angular';
import { Service } from '../services/service';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
@ViewChild('togg') private status:Toggle;
public statusnow:boolean=false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private menuctrl:MenuController,
     private service:Service) {
  }

  ionViewDidLoad() {
this.statusnow=this.service.changebackground;
  }
  openmenu(){
this.menuctrl.open();
  }
  change(){
// console.log(this.status);
 this.service.changebackground=this.status.checked;
  }

}
