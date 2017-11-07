import { Component,OnInit } from "@angular/core";
import {NavParams,NavController} from 'ionic-angular' ;
@Component({

    templateUrl:'user.html'
})

export class Userpage implements OnInit{
name:string;
constructor(private navparms:NavParams,private navcontr:NavController){

}
ngOnInit() {

this.name=this.navparms.data.name;

}
ongoback(){
// this.navcontr.pop();
this.navcontr.popToRoot();
}
}