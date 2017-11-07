import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Service } from '../../services/service';
import {quote} from '../../data/quote.interface';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {
author:string;
text:string;
Quote:quote;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewctrl:ViewController,
  private service:Service) {
  }

  ionViewDidLoad() {
let qoute=this.navParams.data;
    this.author=qoute.person;
    this.text=qoute.text;
    this.Quote=qoute;
  }
  ngOnInit() {
    // console.log("ngonInitied");
    
    
  }
  unfavorite(){
    this.service.removequotefromfavorites(this.Quote);
    this.viewctrl.dismiss();
  }
  dismiss(){
this.viewctrl.dismiss();
  }
}
