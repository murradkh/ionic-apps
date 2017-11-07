
import { ingrediant } from '../data/ingrediatnt';
import { EventEmitter, Injectable } from '@angular/core';
import { recipe } from '../data/recipe';
import { Http } from '@angular/http';
import fire from 'firebase';
@Injectable()
export class Service {
    public event: EventEmitter<void>;
    private shoppinglist: ingrediant[];
    private recipes: recipe[];
    constructor(private http: Http) {
        this.shoppinglist = [];
        this.event = new EventEmitter<void>();
        this.recipes = [{ title: 'Spaggatti', difficulty: 'hard', description: "Its tasty,thats what they Say!", ingrediants: [{ name: "Meat", amount: 2 }, { name: 'Bread', amount: 5 }] }];
    }
    getshoppinglist(): ingrediant[] {
        return this.shoppinglist.slice();
    }
    setshoppinglist(ingrediants:ingrediant[]){
this.shoppinglist=ingrediants;
    }
    addnewitem(ingrediant: ingrediant) {
        this.shoppinglist.push(ingrediant);
        this.event.emit();
        // console.log(this.shoppinglist);
    }
    removeitem(index: number) {
        this.shoppinglist.splice(index, 1);
        this.event.emit();
    }
    edititem(index: number, ingrediant: ingrediant) {
        this.shoppinglist[index] = ingrediant;

    }
    addnewrecipe(Recipe: recipe) {
        this.recipes.push(Recipe);
    }
    getrecipes(): recipe[] {
        return this.recipes.slice();
    }
    getrecipe(index:number){
        return this.recipes[index];
    }
    setrecipes(recipes:recipe[]){
this.recipes=recipes;
    }

    editrecipe(index: number, Recipe: recipe) {
        this.recipes.splice(index, 1);
        this.recipes.push(Recipe);
    }
    removerecipe(index: number) {
        this.recipes.splice(index, 1);
    }
    storedataingrediants(token: string) {
        let userid = fire.auth().currentUser.uid;
        return this.http.put("https://shapus-ecbb4.firebaseio.com/" + userid + "/shoppinglist.json?auth=" + token, this.shoppinglist);
    }
    loaddataingrediants(token: string) {
        let userid = fire.auth().currentUser.uid;
        return this.http.get("https://shapus-ecbb4.firebaseio.com/" + userid + "/shoppinglist.json?auth=" + token);
    }
    storedatarecipe(token:string){
let userid=fire.auth().currentUser.uid;
        return this.http.put("https://shapus-ecbb4.firebaseio.com/"+userid+"/RecipesList.json"+"?auth="+token,this.recipes);
    }
    loaddatarecipe(token:string){
let userid=fire.auth().currentUser.uid;
return this.http.get("https://shapus-ecbb4.firebaseio.com/"+userid+"/RecipesList.json"+"?auth="+token);
    }
}