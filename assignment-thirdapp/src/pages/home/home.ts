import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ShopPage} from '../shop/shop';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  toshopping(){
    this.navCtrl.push(ShopPage).then(()=>{
      // console.log("i dont understand");
    
    });
  }
  ionViewCanLeave():boolean|Promise<void>{
    let num:number=Math.random();
    console.log("ionviewcan leave" +num);

//     const promise =new Promise<string>((resolve,reject)=>{
// setTimeout(function() {
//   reject("testing2");
// console.log("dasdad");  
//   resolve("testing1");
// }, 2000);
//     });
//      promise.then((data:string)=>{
//       console.log(data);
//      }).catch((error:string)=>{
//       console.log(error+"this is fine");
//      });
const promise =new Promise<void>((resolve,reject)=>{
  setTimeout(function() {

    resolve();
// reject();
  }, 2000);
      });

    return promise;

  }

}
