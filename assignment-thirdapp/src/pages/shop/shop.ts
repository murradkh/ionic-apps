import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Buyout} from '../buyout/buyout';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }
  tobuyout(name:string){
    this.navCtrl.push(Buyout,{name:name});
  }
  onBack(){
    this.navCtrl.pop();
  }
  // ionViewCanEnter():boolean|Promise<boolean>{
  //   let num:number=Math.random();
    
  //   return num>0.5;
  // }
  ionViewCanLeave():boolean| Promise<void> {


return true;
  }


}
