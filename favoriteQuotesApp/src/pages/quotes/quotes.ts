import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { quote } from '../data/quote.interface';
import { Service } from '../services/service';



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
quotescollection:{category:string,quotes:quote[],icon:string};
// FaviroateorunFaviroate:string="faviroate";
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private alertctrl:AlertController,
     private service:Service) {
  }

  ionViewDidLoad() {
  
    
  }
  ngOnInit() {
    this.quotescollection=this.navParams.data;
    
    
  }
  change(Quote:quote){

    // if('faviortedasdda){

let alert=this.alertctrl.create({
  title:"Add Quote",
  subTitle:'Are you sure?',
  message:"Are you sure you want add this Quote to Favorites?",
  buttons:[
    {
      text:"Yes,GO Ahead!",
      handler:()=>{
this.service.addquotetofavorites(Quote);
      }
      
    },
    {
      text:"NO, I Change MY Mind!",
      handler:()=>{
      }
    }
  ]
});
alert.present();
    }
    remove(Quote:quote){
      this.service.removequotefromfavorites(Quote);
    }

isfavorite(item:quote){
  return this.service.isfavorite(item);
}

}
