import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddPlacePage } from '../add-place/add-place';
import { Service } from '../service';
import { newplace } from '../data.types/place.interface';
import { PlacePage } from './place/place';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
private places:newplace[];
  constructor(public navCtrl: NavController,
              private service:Service,
              private modalctrl:ModalController,
              private file:File) {

  }
  ionViewWillEnter(){
    this.places=this.service.getplaces();

    for(let i=0;i<this.places.length;i++){
// alert(this.places[i].title);
 const currentname=this.places[i].imagepath.replace(/^.*[\\\/]/,'');
    const path=this.places[i].imagepath.replace(/[^\/]*$/,'');

    this.file.readAsDataURL(path,currentname).then(result => {
     let imgelement= document.getElementById(i+"");
     imgelement.setAttribute("src",result);
     
     
    }).catch((err)=>{
      alert(err);
    });

    }
  }
  
  toaddplacepage(){
    this.navCtrl.push(AddPlacePage);
  }
  openplace(index:number){
   
let modal=this.modalctrl.create(PlacePage,this.places[index]);
modal.present();
modal.onDidDismiss(data=>{
  if(data=="delete"){
this.places.splice(index,1);
this.service.removeplace(index);
  }
});
  }
 

}
