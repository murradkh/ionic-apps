import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,MenuController } from 'ionic-angular';
import {quote} from '../data/quote.interface';
import { Service } from '../services/service';
import { QuotePage } from '../quotes/quote/quote';
@IonicPage()
@Component({
  selector: 'page-favirotepage',
  templateUrl: 'favirotepage.html',
})
export class FavirotepagePage implements OnInit{
public  faviortequotes:quote[];
public changebackground:boolean=false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private service:Service,
     private modalctrl:ModalController,
     private menuctrl:MenuController ) {
  }

  ionViewDidLoad() {
 
  }
  ngOnInit() {
   this.changebackground=this.service.changebackground;
  }
  ionViewDidEnter(){
    this.faviortequotes=this.service.getFavoritequotes();
    
  }
  onview(Quote:quote){
   let modal= this.modalctrl.create(QuotePage,Quote);
   modal.present();
   modal.onDidDismiss(()=>{
this.faviortequotes=this.service.getFavoritequotes();
   });
  
  }
  remove(item:quote){
this.service.removequotefromfavorites(item);
this.faviortequotes=this.service.getFavoritequotes();
  }
  openmenu(){
   this.menuctrl.open();

  }
  
}
