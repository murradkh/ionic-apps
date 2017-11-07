import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
   template: `
    <ion-grid>
      <h3 text-center>Store & Load</h3>
      <ion-row>
      <button ion-button block outline (click)="Action('store')">Store List</button>
      </ion-row>
      <ion-row>
      <button ion-button block outline (click)="Action('load')">Load List</button>
      </ion-row>
    </ion-grid>
  `
})
export class MyPopOver{

    constructor(private viewctrl:ViewController){

    }
Action(action:string){
this.viewctrl.dismiss({action:action});
}
}