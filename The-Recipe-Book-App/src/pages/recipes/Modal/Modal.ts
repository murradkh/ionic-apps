import { Component, OnInit } from "@angular/core";
import { NavParams, ViewController, NavController, AlertController } from "ionic-angular";
import { recipe } from "../../data/recipe";
import { Service } from "../../service/service";
import { NewRecipePage } from "../New-Recipe/recipes";


@Component({
selector:'app-Modal',
templateUrl:"Modal.html"
})
export class ModalPage implements OnInit {
private Recipe:recipe;
private index:number;
    constructor(private Navparams:NavParams,
                private service:Service,
                private viewctrl:ViewController  ,
                private navctrl:NavController,
                private alertctrl:AlertController      
            ){
                
    }
ngOnInit(){
 //   console.log(this.Navparams.get('index'));
    this.index=this.Navparams.get('index');
    this.Recipe=this.Navparams.get('recipe');
}
ionViewWillEnter(){
this.Recipe=this.service.getrecipe(this.index);
}

passingtoshoppinglist(){
    for(let item of this.Recipe.ingrediants)
this.service.addnewitem(item);
this.viewctrl.dismiss();

}
cancel(){
this.viewctrl.dismiss();
}
editrecipe(){
    this.navctrl.push(NewRecipePage,{recipe:this.Recipe,index:this.index});
   
}
deleterecipe(){

this.alertctrl.create({
    subTitle:"Are you Sure want to Delete "+this.Recipe.title+" Recipe?",
    buttons:[{
        text:"Cancel",
        role:'cancel'
    },{
        text:"Ok",
        role:'ok',
        handler:()=>{
            this.service.removerecipe(this.index);
            this.viewctrl.dismiss();
        }
    }]
}).present();


}
}