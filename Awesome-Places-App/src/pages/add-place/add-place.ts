import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from './set-location/set-location';
import { location } from '../data.types/Loaction.interface';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { Service } from '../service';
import { File } from '@ionic-native/file';

declare var cordova:any;
@IonicPage()

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage implements OnInit {
  private defualtloaction: location;
  private marker: location;
  private imagedata = "";
  private imageURI="";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modaleCtrl: ModalController,
    private geogl: Geolocation,
    private loadingctrl: LoadingController,
    private toastctrl: ToastController,
    private camera: Camera,
    private service: Service,
    private file: File
  ) {
  }
  ngOnInit() {
    this.defualtloaction = { Latitude: 32, Longitude: 35 };
    this.marker = undefined;

let path=cordova.file.externalCacheDirectory;
    const cachename = path.replace(cordova.file.externalApplicationStorageDirectory, '');
   
   this.file.removeRecursively(cordova.file.externalApplicationStorageDirectory,cachename);
    

  }
  onsubmit(form: NgForm) {
    
    this.service.addplace(form, this.imageURI, this.marker);
    
    this.imagedata = "";
    this.defualtloaction = { Latitude: 32, Longitude: 35 };
    this.marker = undefined;


  }

  openmap() {
    let mapmodal = this.modaleCtrl.create(SetLocationPage, this.defualtloaction);
    mapmodal.present();
    mapmodal.onDidDismiss((data) => {
      // console.log(data);
      if (data)
        this.marker = data;
    });
  }

  locateme() {
    let loadinggetlocation = this.loadingctrl.create({
      content: "Getting your Location..."
    });

    loadinggetlocation.present();
    this.geogl.getCurrentPosition().then((data) => {

      loadinggetlocation.dismiss();
      this.marker = { Latitude: data.coords.latitude, Longitude: data.coords.longitude };
    }).catch((error) => {
      // console.log(error);
      loadinggetlocation.dismiss();
      this.toastctrl.create({
        message: error.message,
        duration: 3500
      }).present();
    });

  }

  Takephoto() {

    if(this.imageURI!=""){    
      
      setTimeout(()=>{
        const currentname = this.imageURI.replace(/^.*[\\\/]/, '');
        const path = this.imageURI.replace(/[^\/]*$/, '');
        this.file.removeFile(path,currentname);   
      }, 500);
        
       }


this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }).then((imageURI: string) => {
      const currentname = imageURI.replace(/^.*[\\\/]/, '');
      const path = imageURI.replace(/[^\/]*$/, '');
      
this.imageURI=imageURI;

      setTimeout(() => {
         
        this.file.readAsDataURL(path, currentname).then(result => {
          this.imagedata = result;
          
        }).catch((err) => {

          this.file.removeFile(path,currentname);
          
          this.toastctrl.create({
            message: "error occur",
            duration: 3000
          }).present();
          
        });
        
      }, 500);


    }).catch(error => {
      this.toastctrl.create({
        message: "image not taked!. Please try again",
        duration: 3000
      }).present();
    } );
    
  }

}
