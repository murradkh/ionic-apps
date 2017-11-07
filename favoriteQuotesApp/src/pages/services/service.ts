
import {quote} from '../data/quote.interface';

export class Service{

    private faviortes:quote[]=[];
    public changebackground:boolean=false;
    constructor(){
        this.faviortes=[];
    }
    addquotetofavorites(Quote:quote){
this.faviortes.push(Quote);
    }
    removequotefromfavorites(Quote:quote){
      
        for(let i=0;i<this.faviortes.length;i++){
            if(this.faviortes[i].id==Quote.id){
            this.faviortes.splice(i,1);
            }
        }
    }
    getFavoritequotes():quote[]{
        return this.faviortes.slice();
    }

    isfavorite(Quote:quote){
        for(let i=0;i<this.faviortes.length;i++){
            if(this.faviortes[i].id==Quote.id){
return true;
            }
        }
        return false;
    }

}