import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { location } from '../../data.types/Loaction.interface';

/**
 * Generated class for the SetLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage implements OnInit {
private initlocation:location;
private marker:location;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewctrl:ViewController) {
  }

  ngOnInit() {
    this.initlocation=this.navParams.data;

// console.log(this.navParams.data);
  }
  setmarker(event:any){
this.marker={Latitude:event.coords.lat,Longitude:event.coords.lng};
  }
  confirm(){
this.viewctrl.dismiss(this.marker);
  }
  abort(){
    this.viewctrl.dismiss();
  }

}
