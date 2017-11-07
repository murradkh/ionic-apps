import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { newplace } from '../../data.types/place.interface';
import { File } from '@ionic-native/file';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage implements OnInit{
private place:newplace;
  constructor(public navParams: NavParams,private viewctrl:ViewController,private file:File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }
  ngOnInit() {
   this.place=this.navParams.data; 


 const currentname=this.place.imagepath.replace(/^.*[\\\/]/,'');
 const path=this.place.imagepath.replace(/[^\/]*$/,'');

 this.file.readAsDataURL(path,currentname).then(result => {
  let imgelement= document.getElementById("img");
  imgelement.setAttribute("src",result);
  
 
 }).catch((err)=>{
   alert(err);
 });

// console.log(this.place.loaction.Longitude);
  }
  leave(){
this.viewctrl.dismiss();
  }
  delete(){
    this.viewctrl.dismiss("delete");
    
  }

}
