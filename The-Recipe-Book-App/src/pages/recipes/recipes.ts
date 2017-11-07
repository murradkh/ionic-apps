import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController, PopoverController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { NewRecipePage } from './New-Recipe/recipes';
import { Service } from '../service/service';
import { recipe } from '../data/recipe';
import { ModalPage } from './Modal/Modal';
import { MyPopOver } from '../shopping-list/mypopover/mypopover';
import fire from 'firebase';
import { Response } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
private recipes:recipe[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private service:Service,
              private modelCtrl:ModalController,
              private menuctrl:MenuController,
              private popoverctrl:PopoverController,
              private loadctrl:LoadingController,
              private alertctrl:AlertController,
              private toastctrl:ToastController) {
                
  }

ionViewWillEnter(){
  this.recipes=this.service.getrecipes();

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }
  newRecipe(){
    this.navCtrl.push(NewRecipePage);
  }
  openrecipe(index:number){
let modal=this.modelCtrl.create(ModalPage,{index:index,recipe:this.recipes[index]});
modal.present();
modal.onDidDismiss(()=>{
  this.recipes=this.service.getrecipes();
});
  }
  openmenu(){
    this.menuctrl.open();
    }
    openpopover(event:any){

      let load=this.loadctrl.create({
        content:"Loading..."
      });

let popover=this.popoverctrl.create(MyPopOver);
popover.present({ev:event});

popover.onDidDismiss((data)=>{

  if(data!=null){
    load.present();    
if(data.action=='load'){
fire.auth().currentUser.getToken().then((token:string)=>{
this.service.loaddatarecipe(token).subscribe((response:Response)=>{
let data=response.json();
if(data){
this.recipes=data;
this.service.setrecipes(this.recipes.slice());
}else{
  this.recipes=[];
  this.service.setrecipes(this.recipes.slice());
  
}
load.dismiss();              
this.toasthandler("List Loaded!");

},(error)=>{
  load.dismiss();
  this.alerthandler(error);
});
}).catch((error)=>{
  load.dismiss();
  this.alerthandler(error);
});

}else{
  fire.auth().currentUser.getToken().then((token:string)=>{
this.service.storedatarecipe(token).subscribe(()=>{
  load.dismiss();
  this.toasthandler("List Saved!");  
},(error)=>{

});
  },(error)=>{
    load.dismiss()
    this.alerthandler(error);
  }).catch((error)=>{
    load.dismiss();            
    this.alerthandler(error);

  });

}
  }
});

    }

    alerthandler(message:string){
      this.alertctrl.create({
        title:"Something Wrong!!",
        message:message,
        buttons:['OK']
      }).present();
    }
    toasthandler(message:string){
      this.toastctrl.create({
        message:message,
        duration:3000
      }).present();
    }

}
