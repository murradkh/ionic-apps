import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { RecipesPage } from '../recipes/recipes';

/**
 * Generated class for the TapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taps',
  templateUrl: 'taps.html',
})
export class TapsPage implements OnInit{
private shoppinglistpage:any;
private recipepage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {

  }
  ngOnInit() {
    this.shoppinglistpage=ShoppingListPage;
    this.recipepage=RecipesPage;
  }

}
