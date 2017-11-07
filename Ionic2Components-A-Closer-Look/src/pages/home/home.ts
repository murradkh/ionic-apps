import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
public tapped:number;
public pressed:number;
public rules:string;
  constructor(public navCtrl: NavController) {

  }
ngOnInit() {
this.tapped=0;
this.pressed=0;
this.rules="Tap twice,press four times";
}
Tapped(){
this.tapped++;
this.chicking();
}
press(){
this.pressed++;
this.chicking();
}
chicking(){
if(this.tapped==2 && this.pressed==4)
{
  this.rules="you Won!";
}
}
resetall(){
this.tapped=0;
this.pressed=0;
this.rules="Tap twice,press four times";
}
resettaps(){
this.tapped=0;  
this.rules="Tap twice,press four times";

}
resetpresses(){
this.pressed=0;  
this.rules="Tap twice,press four times";

}
}