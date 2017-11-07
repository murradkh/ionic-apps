import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Userpage } from './user/user';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  onclick(name:string){
    this.navCtrl.push(Userpage, { name: name });
  }

  ionViewDidLoad() {
  }

}
