import firebase from 'firebase';
import { NgForm } from '@angular/forms';

export class Authnicationservice{

    signup(form:NgForm){
return firebase.auth().createUserWithEmailAndPassword(form.value.mail,form.value.password);
    }
    signin(form:NgForm){
        return firebase.auth().signInWithEmailAndPassword(form.value.mail,form.value.password);
    }

    logout(){
        
    firebase.auth().signOut();
    
      }
      
}