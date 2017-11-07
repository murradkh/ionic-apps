import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActionSheetController, AlertController, ToastController, NavController, NavParams } from "ionic-angular";
import { ingrediant } from "../../data/ingrediatnt";
import { Service } from "../../service/service";
import { recipe } from "../../data/recipe";


@Component({
    selector:"new-recipe",
    templateUrl:"recipes.html"
})
export class NewRecipePage implements OnInit{

    private Difficulty:string[];
    private ingrediants:ingrediant[];
    private editmode:boolean;
    private Recipe:recipe;
    private index:number;
    private mode:string;

    constructor(private actionsheetctrl:ActionSheetController,
        private navParams:NavParams,
        private alertctrl:AlertController,
        private toastctrl:ToastController,
        private service:Service,
        private navCtrl:NavController){

    }
    ngOnInit(){
        this.Difficulty=['Easy','Medium','Hard'];
      
if(this.navParams.get('index')!=undefined){
this.editmode=true;
this.mode="Edit";
this.index=this.navParams.get('index');
this.Recipe=this.navParams.get('recipe');
//////////////////////////////////////////////////////////////////////////important
this.ingrediants=this.Recipe.ingrediants.slice();
//////////////////////////////////////////////////////////////////////////important

}else{
    this.mode="New";
    this.editmode=false;
    this.ingrediants=[];
    this.Recipe={title:"",description:"",difficulty:"",ingrediants:[]};
}
        
    }

    onsubmit(form:NgForm){
        if(this.editmode==true){
            let newRecipe:recipe={title:form.value.title,description:form.value.description,difficulty:form.value.difficulty,ingrediants:this.ingrediants};
            this.service.editrecipe(this.index,newRecipe);
            this.navCtrl.pop();
            
        }else{
        form.value.ingrediants=this.ingrediants;
this.service.addnewrecipe(form.value);
this.navCtrl.pop();

        }
    }
    manageingrediants(){
let actionsheet=this.actionsheetctrl.create({
    title:'What do you Want to Do?',
buttons:[
   { text:"Add Ingrediant",
    handler: ()=>{
this.createNewAlertprompt().present();
    }
},{
        text:"Remove All Ingrediants",
        role:'destructive',
        handler:()=>{
            let x=this.ingrediants.length;
            for(let i=0;i<x;i++){
            this.ingrediants.pop();
            }
            this.createtoastprompt('All ingrediants Deleted!').present();
            
          
        }
        
    },{text:"Cancel",
    role:'cancel',
    handler:()=>{
    }
}

]
});
actionsheet.present();

}
createNewAlertprompt(){
    let promptalert=this.alertctrl.create({
        title:"Add Ingrediant",
        inputs:[{
            name:"ingrediantname",
            placeholder:"Name",
            type:'text'
        },{ name: 'amount',
            placeholder:"Amount",
            type: 'number'}
        ],buttons:[{
            text:"Add",
            role:'ok',
            handler:(data)=>{
               
                if(data.ingrediantname.trim()=="" || data.amount=="" ||data.ingrediantname.trim()==undefined)
              { this.createNewAlertprompt().present();
                this.createtoastprompt('Please enter a Valid Value!').present();
               } else { this.ingrediants.push({name:data.ingrediantname,amount:data.amount});
               this.createtoastprompt('Item Added!').present();
            
            }
            }
        },{
            text:'Cancel',
            role:'cancel'
        }]
    });
 return   promptalert;
     
}
createtoastprompt(text:string){
return this.toastctrl.create({
    message:text,
duration:3000,
position:'bottom'
});
}

}