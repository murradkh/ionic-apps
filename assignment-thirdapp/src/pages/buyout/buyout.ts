
import { NavParams, NavController } from 'ionic-angular';
import { Component,OnInit } from '@angular/core';

@Component({
    templateUrl:'./buyout.html'
})
export class Buyout implements OnInit{
    public name:string;

    constructor(private navcontrol:NavController,private navparmas:NavParams){
    }
ngOnInit() {
    this.name=this.navparmas.data.name;
    
}
Buy(){
    this.navcontrol.popToRoot();
}

}