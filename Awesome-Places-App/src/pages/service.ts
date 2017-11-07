import { newplace } from "./data.types/place.interface";
import { NgForm } from "@angular/forms";
import { location } from "./data.types/Loaction.interface";
import { File ,Entry} from '@ionic-native/file';
import { Injectable } from "@angular/core";
import { NativeStorage } from '@ionic-native/native-storage';

declare var cordova:any;
@Injectable()
export class Service {
   private places:newplace[];
    
   constructor(private file:File,private storage:NativeStorage){
    this.places=[];
 //this.storage.clear();
               this.storage.getItem('places')
               .then(
                 (data:newplace[]) => {
                    //  alert("places taked")
        this.places=data;
      
    }

               );
              // this.storage.clear().then(()=>alert("storage cleared")).catch(err=>alert(err))
    // this.storage.getItem("places").then((places:newplace[])=>{
    //     // if(places!=null)
    //     // this.places=places;
    //     // else this.places=[];
    //     // alert("sucess");
    //            }).catch((err)=>alert(err));

   }
  
   addplace(form:NgForm,imagepath:string,marker:location){

    
const currentname=imagepath.replace(/^.*[\\\/]/,'');
const path=imagepath.replace(/[^\/]*$/,'');

this.file.moveFile(path,currentname,cordova.file.dataDirectory,currentname).then(
 (data:Entry)=>{
 
     this.places.push({title:form.value.title,description:form.value.decription,imagepath:data.nativeURL,loaction:marker});
    this.storage.setItem("places",this.places).then().catch((err)=>{
        this.places.splice(this.places.length-1,1);
     
    })
     form.reset(); 
    }
).catch((err)=>{alert("error occur")
this.file.removeFile(path,currentname);
form.reset(); 

});



   }
   getplaces(){
return this.places.slice();
   }
   removeplace(index:number){
this.places.splice(index,1);
this.storage.setItem("places",this.places).then().catch((err)=>{
alert(err);
});    
   }

}