import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {quote} from '../data/quote.interface';
import collection from '../data/data';
import {QuotesPage} from '../quotes/quotes';
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
quoteCollection:{category:string,quotes:quote[],icon:string}[];
 
constructor(public navCtrl: NavController, public navParams: NavParams,private menuctrl:MenuController) {
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
this.quoteCollection=collection;
  }
  nclick(item:any){
this.navCtrl.push(QuotesPage,item);
  }
  openmenu(){
this.menuctrl.open();
  }


}
