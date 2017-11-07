import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Service } from '../service/service';
import { ingrediant } from '../data/ingrediatnt';
import { MyPopOver } from './mypopover/mypopover';
import fire from "firebase";
import { Response } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage implements OnInit {
  private shoppinglist: ingrediant[];
  private editstate: boolean;
  private selecteditem: number;
  private nameinput: string;
  private amountinput: number;
  @ViewChild('f') private form: NgForm;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: Service,
    private menuctrl: MenuController,
    private popoverctrl: PopoverController,
    private loadctrl:LoadingController,
    private alertctrl:AlertController,
    private toastctrl:ToastController) {
  }
  ngOnInit() {
    this.editstate = false;
    this.shoppinglist = this.service.getshoppinglist();
    this.service.event.subscribe(() => {
      this.shoppinglist = this.service.getshoppinglist();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }
  onsubmit(form: NgForm) {

    if (!this.editstate)
      this.service.addnewitem({ name: form.value.name, amount: parseInt(form.value.amount) });
    else {
      this.edit();
    }
    this.form.reset();

  }
  removeitem(index: number) {
    this.service.removeitem(index);
  }
  edititem(index: number) {
    this.editstate = true;
    this.selecteditem = index;
    this.nameinput = this.shoppinglist[index].name;
    this.amountinput = this.shoppinglist[index].amount;
  }
  edit() {
    this.service.edititem(this.selecteditem, { name: this.form.value.name, amount: parseInt(this.form.value.amount) });
    this.shoppinglist[this.selecteditem] = { name: this.form.value.name, amount: parseInt(this.form.value.amount) };
    this.editstate = false;
    this.nameinput = undefined;
    this.amountinput = undefined;
  }
  openmenu() {
    this.menuctrl.open();
  }
  openpopover(event: any) {
    let load=this.loadctrl.create({
      content:"Loading..."
    });

    let popover = this.popoverctrl.create(MyPopOver);
    popover.present({ ev: event });
    popover.onDidDismiss((data) => {
      if (data != null) {
        load.present();
        if (data.action == 'load') {
          
          fire.auth().currentUser.getToken().then((token) => {
            this.service.loaddataingrediants(token).subscribe((response: Response) => {
              if(response.json()){
              this.shoppinglist = response.json();
              this.service.setshoppinglist(this.shoppinglist.slice());
              }else{ this.shoppinglist=[];
                this.service.setshoppinglist(this.shoppinglist.slice());
                
              }
              load.dismiss();              
              this.toasthandler("List Loaded!");
            },(error)=>{
              load.dismiss();
              this.alerthandler(error);
            })
            
          }).catch((error) => {
            load.dismiss();
            this.alerthandler(error);
          });

        } else {
          fire.auth().currentUser.getToken().then((token) => {
            this.service.storedataingrediants(token).subscribe(() => {
              load.dismiss();
              this.toasthandler("List Saved!");
            }, (error) =>        { 
              load.dismiss()
              this.alerthandler(error);
            });
          }).catch((error) => {
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