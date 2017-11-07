webpackJsonp([5],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewRecipePage = (function () {
    function NewRecipePage(actionsheetctrl, navParams, alertctrl, toastctrl, service, navCtrl) {
        this.actionsheetctrl = actionsheetctrl;
        this.navParams = navParams;
        this.alertctrl = alertctrl;
        this.toastctrl = toastctrl;
        this.service = service;
        this.navCtrl = navCtrl;
    }
    NewRecipePage.prototype.ngOnInit = function () {
        this.Difficulty = ['Easy', 'Medium', 'Hard'];
        if (this.navParams.get('index') != undefined) {
            this.editmode = true;
            this.mode = "Edit";
            this.index = this.navParams.get('index');
            this.Recipe = this.navParams.get('recipe');
            //////////////////////////////////////////////////////////////////////////important
            this.ingrediants = this.Recipe.ingrediants.slice();
            //////////////////////////////////////////////////////////////////////////important
        }
        else {
            this.mode = "New";
            this.editmode = false;
            this.ingrediants = [];
            this.Recipe = { title: "", description: "", difficulty: "", ingrediants: [] };
        }
    };
    NewRecipePage.prototype.onsubmit = function (form) {
        if (this.editmode == true) {
            var newRecipe = { title: form.value.title, description: form.value.description, difficulty: form.value.difficulty, ingrediants: this.ingrediants };
            this.service.editrecipe(this.index, newRecipe);
            this.navCtrl.pop();
        }
        else {
            form.value.ingrediants = this.ingrediants;
            this.service.addnewrecipe(form.value);
            this.navCtrl.pop();
        }
    };
    NewRecipePage.prototype.manageingrediants = function () {
        var _this = this;
        var actionsheet = this.actionsheetctrl.create({
            title: 'What do you Want to Do?',
            buttons: [
                { text: "Add Ingrediant",
                    handler: function () {
                        _this.createNewAlertprompt().present();
                    }
                }, {
                    text: "Remove All Ingrediants",
                    role: 'destructive',
                    handler: function () {
                        var x = _this.ingrediants.length;
                        for (var i = 0; i < x; i++) {
                            _this.ingrediants.pop();
                        }
                        _this.createtoastprompt('All ingrediants Deleted!').present();
                    }
                }, { text: "Cancel",
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionsheet.present();
    };
    NewRecipePage.prototype.createNewAlertprompt = function () {
        var _this = this;
        var promptalert = this.alertctrl.create({
            title: "Add Ingrediant",
            inputs: [{
                    name: "ingrediantname",
                    placeholder: "Name",
                    type: 'text'
                }, { name: 'amount',
                    placeholder: "Amount",
                    type: 'number' }
            ], buttons: [{
                    text: "Add",
                    role: 'ok',
                    handler: function (data) {
                        if (data.ingrediantname.trim() == "" || data.amount == "" || data.ingrediantname.trim() == undefined) {
                            _this.createNewAlertprompt().present();
                            _this.createtoastprompt('Please enter a Valid Value!').present();
                        }
                        else {
                            _this.ingrediants.push({ name: data.ingrediantname, amount: data.amount });
                            _this.createtoastprompt('Item Added!').present();
                        }
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }]
        });
        return promptalert;
    };
    NewRecipePage.prototype.createtoastprompt = function (text) {
        return this.toastctrl.create({
            message: text,
            duration: 3000,
            position: 'bottom'
        });
    };
    return NewRecipePage;
}());
NewRecipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "new-recipe",template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\recipes\New-Recipe\recipes.html"*/'<ion-header>\n\n<ion-navbar>\n\n    <ion-title>\n\n        {{mode}} Recipe\n\n    </ion-title>\n\n</ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="onsubmit(f)" #f=ngForm>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label for="title" floating>Title</ion-label>\n\n            <ion-input name="title" type="text" [ngModel]="Recipe.title" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n                <ion-label for="description" floating>Description</ion-label>\n\n                <ion-input name="description" type="text" [ngModel]="Recipe.description" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n                <ion-label for="difficulty" floating>Difficulty</ion-label>\n\n                <ion-select name="difficulty" [ngModel]="Recipe.difficulty" required>\n\n                  <ion-option [value]="item" *ngFor="let item of Difficulty">{{item}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n            <button large ion-button type="button" clear margin-top block class="crazy" (click)="manageingrediants()" >Manage Ingrediants</button>\n\n        </ion-item>\n\n    \n\n\n\n        <ion-grid ngModelGroup="ingrediants">\n\n                <ion-row *ngFor="let item of ingrediants;let i=index" [ngModelGroup]="\'ingrediant\'+i">\n\n                  <ion-col>\n\n                        <ion-label>Name</ion-label>\n\n                        <ion-input  name="name"  type="text"\n\n                        [(ngModel)]="item.name" required></ion-input>           \n\n                  </ion-col>\n\n                  <ion-col>\n\n                        <ion-label>Amount</ion-label>\n\n                        <ion-input  name="amount"   type="number"\n\n                        [(ngModel)]="item.amount" required pattern="[1-9][0-9]*"></ion-input> \n\n                  </ion-col>\n\n                </ion-row>\n\n        </ion-grid>\n\n\n\n    \n\n       \n\n    </ion-list>\n\n\n\n    <button ion-button block type="submit" margin-top [disabled]="!f.valid" >{{mode}} Recipe</button>\n\n    \n\n</form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\recipes\New-Recipe\recipes.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Service */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _f || Object])
], NewRecipePage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPopOver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyPopOver = (function () {
    function MyPopOver(viewctrl) {
        this.viewctrl = viewctrl;
    }
    MyPopOver.prototype.Action = function (action) {
        this.viewctrl.dismiss({ action: action });
    };
    return MyPopOver;
}());
MyPopOver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-grid>\n      <h3 text-center>Store & Load</h3>\n      <ion-row>\n      <button ion-button block outline (click)=\"Action('store')\">Store List</button>\n      </ion-row>\n      <ion-row>\n      <button ion-button block outline (click)=\"Action('load')\">Load List</button>\n      </ion-row>\n    </ion-grid>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], MyPopOver);

//# sourceMappingURL=mypopover.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenicate_server__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, menuctrl, service, loadingctrl, alertctrl, toastctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuctrl = menuctrl;
        this.service = service;
        this.loadingctrl = loadingctrl;
        this.alertctrl = alertctrl;
        this.toastctrl = toastctrl;
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.ngOnInit = function () {
    };
    SigninPage.prototype.openmenu = function () {
        this.menuctrl.open();
    };
    SigninPage.prototype.onsubmit = function (form) {
        var _this = this;
        var loading = this.loadingctrl.create({
            content: "SignIn loading..."
        });
        this.service.signin(form).then(function () {
            loading.dismiss();
            _this.toastctrl.create({
                message: "Signed In!",
                duration: 3000
            }).present();
        }).catch(function (error) {
            loading.dismiss();
            _this.alertctrl.create({
                title: "SignIn Failed",
                message: error,
                buttons: ['Ok']
            }).present();
        });
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\authenication\signin\signin.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signin</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="openmenu()">\n          <ion-icon name="menu"></ion-icon>\n          \n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="onsubmit(f)" #f="ngForm">\n<ion-list>\n <ion-item>\n   <ion-input placeholder="Mail" required type="mail" email ngModel name="mail"></ion-input>\n </ion-item>\n <ion-item>    \n <ion-input placeholder="Password" required type="password" ngModel name="password" [minlength]="6"></ion-input>\n </ion-item>\n</ion-list>\n<button ion-button block type="submit" [disabled]="!f.valid">Signin</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\authenication\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__authenicate_server__["a" /* Authnicationservice */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenicate_server__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SigninPage } from '../signin/signin';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, menuctrl, service, loadingctrl, alertctrl, toastctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuctrl = menuctrl;
        this.service = service;
        this.loadingctrl = loadingctrl;
        this.alertctrl = alertctrl;
        this.toastctrl = toastctrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.openmenu = function () {
        this.menuctrl.open();
    };
    SignupPage.prototype.onsubmit = function (form) {
        var _this = this;
        var loading = this.loadingctrl.create({
            content: "Please Wait...",
        });
        loading.present();
        this.service.signup(form).then(function (data) {
            loading.dismiss();
            _this.toastctrl.create({
                message: "SignUp Success!",
                duration: 3000
            }).present();
        }).catch(function (error) {
            _this.alertctrl.create({
                title: "Signup Failed!",
                message: error.message,
                buttons: ['Ok']
            }).present();
            loading.dismiss();
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\authenication\signup\signup.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n    <ion-buttons>\n      <button ion-button (click)="openmenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="onsubmit(f)" #f="ngForm">\n        <ion-list>\n         <ion-item>\n           <ion-input placeholder="Mail" required type="mail" email ngModel name="mail"></ion-input>\n         </ion-item>\n         <ion-item>                \n         <ion-input placeholder="Password" required type="password" ngModel name="password" [minlength]="6"></ion-input>\n         </ion-item>\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="!f.valid">Signup</button>\n        </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\authenication\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__authenicate_server__["a" /* Authnicationservice */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__New_Recipe_recipes__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_Modal__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_list_mypopover_mypopover__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipesPage = (function () {
    function RecipesPage(navCtrl, navParams, service, modelCtrl, menuctrl, popoverctrl, loadctrl, alertctrl, toastctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.modelCtrl = modelCtrl;
        this.menuctrl = menuctrl;
        this.popoverctrl = popoverctrl;
        this.loadctrl = loadctrl;
        this.alertctrl = alertctrl;
        this.toastctrl = toastctrl;
    }
    RecipesPage.prototype.ionViewWillEnter = function () {
        this.recipes = this.service.getrecipes();
    };
    RecipesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipesPage');
    };
    RecipesPage.prototype.newRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__New_Recipe_recipes__["a" /* NewRecipePage */]);
    };
    RecipesPage.prototype.openrecipe = function (index) {
        var _this = this;
        var modal = this.modelCtrl.create(__WEBPACK_IMPORTED_MODULE_4__Modal_Modal__["a" /* ModalPage */], { index: index, recipe: this.recipes[index] });
        modal.present();
        modal.onDidDismiss(function () {
            _this.recipes = _this.service.getrecipes();
        });
    };
    RecipesPage.prototype.openmenu = function () {
        this.menuctrl.open();
    };
    RecipesPage.prototype.openpopover = function (event) {
        var _this = this;
        var load = this.loadctrl.create({
            content: "Loading..."
        });
        var popover = this.popoverctrl.create(__WEBPACK_IMPORTED_MODULE_5__shopping_list_mypopover_mypopover__["a" /* MyPopOver */]);
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) {
            if (data != null) {
                load.present();
                if (data.action == 'load') {
                    __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.getToken().then(function (token) {
                        _this.service.loaddatarecipe(token).subscribe(function (response) {
                            var data = response.json();
                            if (data) {
                                _this.recipes = data;
                                _this.service.setrecipes(_this.recipes.slice());
                            }
                            else {
                                _this.recipes = [];
                                _this.service.setrecipes(_this.recipes.slice());
                            }
                            load.dismiss();
                            _this.toasthandler("List Loaded!");
                        }, function (error) {
                            load.dismiss();
                            _this.alerthandler(error);
                        });
                    }).catch(function (error) {
                        load.dismiss();
                        _this.alerthandler(error);
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.getToken().then(function (token) {
                        _this.service.storedatarecipe(token).subscribe(function () {
                            load.dismiss();
                            _this.toasthandler("List Saved!");
                        }, function (error) {
                        });
                    }, function (error) {
                        load.dismiss();
                        _this.alerthandler(error);
                    }).catch(function (error) {
                        load.dismiss();
                        _this.alerthandler(error);
                    });
                }
            }
        });
    };
    RecipesPage.prototype.alerthandler = function (message) {
        this.alertctrl.create({
            title: "Something Wrong!!",
            message: message,
            buttons: ['OK']
        }).present();
    };
    RecipesPage.prototype.toasthandler = function (message) {
        this.toastctrl.create({
            message: message,
            duration: 3000
        }).present();
    };
    return RecipesPage;
}());
RecipesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recipes',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\recipes\recipes.html"*/'<!--\n  Generated template for the RecipesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recipes</ion-title>\n    <ion-buttons start >\n        <button ion-button  (click)="openmenu()">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button  (click)="newRecipe()">\n    <ion-icon name="add" class="change" ></ion-icon>\n  </button>\n  <button ion-button icon-only (click)="openpopover($event)"><ion-icon name="more"></ion-icon></button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list >\n  <button ion-item *ngFor="let item of recipes;let i=index" (click)="openrecipe(i)">\n    <h2>{{item.title}}</h2>\n    <ion-note>{{item.difficulty}}</ion-note>\n  </button>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\recipes\recipes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], RecipesPage);

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mypopover_mypopover__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingListPage = (function () {
    function ShoppingListPage(navCtrl, navParams, service, menuctrl, popoverctrl, loadctrl, alertctrl, toastctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.menuctrl = menuctrl;
        this.popoverctrl = popoverctrl;
        this.loadctrl = loadctrl;
        this.alertctrl = alertctrl;
        this.toastctrl = toastctrl;
    }
    ShoppingListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.editstate = false;
        this.shoppinglist = this.service.getshoppinglist();
        this.service.event.subscribe(function () {
            _this.shoppinglist = _this.service.getshoppinglist();
        });
    };
    ShoppingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingListPage');
    };
    ShoppingListPage.prototype.onsubmit = function (form) {
        if (!this.editstate)
            this.service.addnewitem({ name: form.value.name, amount: parseInt(form.value.amount) });
        else {
            this.edit();
        }
        this.form.reset();
    };
    ShoppingListPage.prototype.removeitem = function (index) {
        this.service.removeitem(index);
    };
    ShoppingListPage.prototype.edititem = function (index) {
        this.editstate = true;
        this.selecteditem = index;
        this.nameinput = this.shoppinglist[index].name;
        this.amountinput = this.shoppinglist[index].amount;
    };
    ShoppingListPage.prototype.edit = function () {
        this.service.edititem(this.selecteditem, { name: this.form.value.name, amount: parseInt(this.form.value.amount) });
        this.shoppinglist[this.selecteditem] = { name: this.form.value.name, amount: parseInt(this.form.value.amount) };
        this.editstate = false;
        this.nameinput = undefined;
        this.amountinput = undefined;
    };
    ShoppingListPage.prototype.openmenu = function () {
        this.menuctrl.open();
    };
    ShoppingListPage.prototype.openpopover = function (event) {
        var _this = this;
        var load = this.loadctrl.create({
            content: "Loading..."
        });
        var popover = this.popoverctrl.create(__WEBPACK_IMPORTED_MODULE_4__mypopover_mypopover__["a" /* MyPopOver */]);
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) {
            if (data != null) {
                load.present();
                if (data.action == 'load') {
                    __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.getToken().then(function (token) {
                        _this.service.loaddataingrediants(token).subscribe(function (response) {
                            if (response.json()) {
                                _this.shoppinglist = response.json();
                                _this.service.setshoppinglist(_this.shoppinglist.slice());
                            }
                            else {
                                _this.shoppinglist = [];
                                _this.service.setshoppinglist(_this.shoppinglist.slice());
                            }
                            load.dismiss();
                            _this.toasthandler("List Loaded!");
                        }, function (error) {
                            load.dismiss();
                            _this.alerthandler(error);
                        });
                    }).catch(function (error) {
                        load.dismiss();
                        _this.alerthandler(error);
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.getToken().then(function (token) {
                        _this.service.storedataingrediants(token).subscribe(function () {
                            load.dismiss();
                            _this.toasthandler("List Saved!");
                        }, function (error) {
                            load.dismiss();
                            _this.alerthandler(error);
                        });
                    }).catch(function (error) {
                        load.dismiss();
                        _this.alerthandler(error);
                    });
                }
            }
        });
    };
    ShoppingListPage.prototype.alerthandler = function (message) {
        this.alertctrl.create({
            title: "Something Wrong!!",
            message: message,
            buttons: ['OK']
        }).present();
    };
    ShoppingListPage.prototype.toasthandler = function (message) {
        this.toastctrl.create({
            message: message,
            duration: 3000
        }).present();
    };
    return ShoppingListPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('f'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
], ShoppingListPage.prototype, "form", void 0);
ShoppingListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shopping-list',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\shopping-list\shopping-list.html"*/'<!--\n  Generated template for the ShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>shopping-list</ion-title>\n    <ion-buttons end >\n<button ion-button icon-only (click)="openpopover($event)">\n  <ion-icon name="more"></ion-icon>\n</button>\n    </ion-buttons>\n    <ion-buttons start >\n        <button ion-button  (click)="openmenu()">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="onsubmit(f)" #f=\'ngForm\'>\n  <ion-list >\n    <ion-item>\n      <ion-label floating>\n        Name\n      </ion-label>\n      <ion-input type="text" name="name" [ngModel]="nameinput" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Amount</ion-label>\n      <ion-input type="number" pattern="[1-9][0-9]*" name="amount" [ngModel]="amountinput" required></ion-input>\n    </ion-item>\n    <button ion-button block type="submit" margin-top [disabled]="!f.valid" *ngIf="!editstate">Add</button>\n    <button ion-button block type="submit" margin-top [disabled]="!f.valid" *ngIf="editstate">Edit</button>\n    \n  </ion-list>\n</form>\n\n<ion-list>\n    <ion-item-sliding *ngFor="let item of shoppinglist;let i=index">\n  <ion-item (click)="edititem(i)">\n    <h2>{{item.name}} ({{item.amount}})</h2>\n  </ion-item>\n  <ion-item-options>\n    <button ion-button color="danger" large (click)="removeitem(i)">\n        <ion-icon name="trash"></ion-icon>\n    </button>\n    </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\shopping-list\shopping-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], ShoppingListPage);

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipes_recipes__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TapsPage = (function () {
    function TapsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TapsPage.prototype.ionViewDidLoad = function () {
    };
    TapsPage.prototype.ngOnInit = function () {
        this.shoppinglistpage = __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list__["a" /* ShoppingListPage */];
        this.recipepage = __WEBPACK_IMPORTED_MODULE_3__recipes_recipes__["a" /* RecipesPage */];
    };
    return TapsPage;
}());
TapsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-taps',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\taps\taps.html"*/'\n<ion-tabs>\n  <ion-tab tabTitle=\'Shopping List\' [root]=\'shoppinglistpage\' tabIcon="list-box"></ion-tab>\n<ion-tab tabTitle="Recipes" [root]="recipepage" tabIcon="book"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\taps\taps.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TapsPage);

//# sourceMappingURL=taps.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/authenication/signin/signin.module": [
		421,
		4
	],
	"../pages/authenication/signup/signup.module": [
		422,
		3
	],
	"../pages/recipes/recipes.module": [
		423,
		2
	],
	"../pages/shopping-list/shopping-list.module": [
		424,
		1
	],
	"../pages/taps/taps.module": [
		425,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__New_Recipe_recipes__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalPage = (function () {
    function ModalPage(Navparams, service, viewctrl, navctrl, alertctrl) {
        this.Navparams = Navparams;
        this.service = service;
        this.viewctrl = viewctrl;
        this.navctrl = navctrl;
        this.alertctrl = alertctrl;
    }
    ModalPage.prototype.ngOnInit = function () {
        //   console.log(this.Navparams.get('index'));
        this.index = this.Navparams.get('index');
        this.Recipe = this.Navparams.get('recipe');
    };
    ModalPage.prototype.ionViewWillEnter = function () {
        this.Recipe = this.service.getrecipe(this.index);
    };
    ModalPage.prototype.passingtoshoppinglist = function () {
        for (var _i = 0, _a = this.Recipe.ingrediants; _i < _a.length; _i++) {
            var item = _a[_i];
            this.service.addnewitem(item);
        }
        this.viewctrl.dismiss();
    };
    ModalPage.prototype.cancel = function () {
        this.viewctrl.dismiss();
    };
    ModalPage.prototype.editrecipe = function () {
        this.navctrl.push(__WEBPACK_IMPORTED_MODULE_3__New_Recipe_recipes__["a" /* NewRecipePage */], { recipe: this.Recipe, index: this.index });
    };
    ModalPage.prototype.deleterecipe = function () {
        var _this = this;
        this.alertctrl.create({
            subTitle: "Are you Sure want to Delete " + this.Recipe.title + " Recipe?",
            buttons: [{
                    text: "Cancel",
                    role: 'cancel'
                }, {
                    text: "Ok",
                    role: 'ok',
                    handler: function () {
                        _this.service.removerecipe(_this.index);
                        _this.viewctrl.dismiss();
                    }
                }]
        }).present();
    };
    return ModalPage;
}());
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-Modal',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\recipes\Modal\Modal.html"*/'\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <ion-title>{{Recipe.title}}</ion-title>\n\n        \n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content padding>\n\n<h1 text-center>{{Recipe.title}}</h1>\n\n<p   text-center>{{Recipe.difficulty}}</p>\n\n<br>\n\n<h5 text-center>{{Recipe.description}}</h5>\n\n<ion-list>\n\n    <ion-item *ngFor="let item of Recipe.ingrediants">\n\n            {{item.name}}   ({{item.amount}})\n\n    </ion-item>\n\n</ion-list>    \n\n<br>\n\n<button clear ion-button type="button" color=\'primary\' text-center block (click)="passingtoshoppinglist()">Add Ingrediants To Shopping List</button>\n\n\n\n<button outline ion-button type="button" color=\'primary\' style="margin-left: 40px" (click)="editrecipe()" >Edit Recipe </button>\n\n\n\n<button outline ion-button type="button" color=\'danger\' (click)="deleterecipe()" >Delete Recipe</button>\n\n<ion-row>\n\n<button margin-top block color="primary"  ion-button type="button"   (click)="cancel()">Canel</button>\n\n</ion-row>\n\n</ion-content>\n\n    '/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\pages\recipes\Modal\Modal.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Service */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object])
], ModalPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recipes_New_Recipe_recipes__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_taps_taps__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recipes_recipes__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_service_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recipes_Modal_Modal__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_authenication_signin_signin__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_authenication_signup_signup__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_authenication_authenicate_server__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_shopping_list_mypopover_mypopover__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_recipes_recipes__["a" /* RecipesPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_taps_taps__["a" /* TapsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_recipes_New_Recipe_recipes__["a" /* NewRecipePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_recipes_Modal_Modal__["a" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_authenication_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_authenication_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_shopping_list_mypopover_mypopover__["a" /* MyPopOver */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/authenication/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/authenication/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recipes/recipes.module#RecipesPageModule', name: 'RecipesPage', segment: 'recipes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shopping-list/shopping-list.module#ShoppingListPageModule', name: 'ShoppingListPage', segment: 'shopping-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/taps/taps.module#TapsPageModule', name: 'TapsPage', segment: 'taps', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_recipes_recipes__["a" /* RecipesPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_taps_taps__["a" /* TapsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_recipes_New_Recipe_recipes__["a" /* NewRecipePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_recipes_Modal_Modal__["a" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_authenication_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_authenication_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_shopping_list_mypopover_mypopover__["a" /* MyPopOver */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__pages_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_14__pages_authenication_authenicate_server__["a" /* Authnicationservice */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_taps_taps__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_authenication_signin_signin__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_authenication_signup_signup__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_authenication_authenicate_server__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, service) {
        var _this = this;
        this.service = service;
        this.isAuthnicated = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_taps_taps__["a" /* TapsPage */];
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyABh5mvOXy7lwRl0knUqxyYPlqLSHEHfLU",
            authDomain: "shapus-ecbb4.firebaseapp.com"
        });
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuthnicated = true;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_taps_taps__["a" /* TapsPage */];
            }
            else {
                _this.isAuthnicated = false;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_authenication_signin_signin__["a" /* SigninPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.signinpage = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_authenication_signin_signin__["a" /* SigninPage */];
        this.menuctrl.close();
    };
    MyApp.prototype.signuppage = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_authenication_signup_signup__["a" /* SignupPage */];
        this.rootPage();
        this.menuctrl.close();
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
        this.menuctrl.close();
    };
    MyApp.prototype.recipebook = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_taps_taps__["a" /* TapsPage */];
        this.menuctrl.close();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('menu'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */])
], MyApp.prototype, "menuctrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\app\app.html"*/'<ion-menu [content]="nav" #menu>\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>\n                Menu\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)="recipebook()" *ngIf="isAuthnicated">\n                <ion-icon name="book" item-left></ion-icon>\n                Recipe Book\n            </button>\n            <button ion-item (click)="signinpage()" *ngIf="!isAuthnicated">\n                <ion-icon name="log-in" item-left></ion-icon>\n                Signin</button>\n            <button ion-item (click)="signuppage()" *ngIf="!isAuthnicated">\n                <ion-icon name="person" item-left></ion-icon>\n                Signup</button>\n                <button ion-item (click)="logout()" *ngIf="isAuthnicated">\n                        <ion-icon name="log-out" item-left></ion-icon>\n                        Logout</button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\The-Recipe-Book-App\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__pages_authenication_authenicate_server__["a" /* Authnicationservice */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Service = (function () {
    function Service(http) {
        this.http = http;
        this.shoppinglist = [];
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.recipes = [{ title: 'Spaggatti', difficulty: 'hard', description: "Its tasty,thats what they Say!", ingrediants: [{ name: "Meat", amount: 2 }, { name: 'Bread', amount: 5 }] }];
    }
    Service.prototype.getshoppinglist = function () {
        return this.shoppinglist.slice();
    };
    Service.prototype.setshoppinglist = function (ingrediants) {
        this.shoppinglist = ingrediants;
    };
    Service.prototype.addnewitem = function (ingrediant) {
        this.shoppinglist.push(ingrediant);
        this.event.emit();
        // console.log(this.shoppinglist);
    };
    Service.prototype.removeitem = function (index) {
        this.shoppinglist.splice(index, 1);
        this.event.emit();
    };
    Service.prototype.edititem = function (index, ingrediant) {
        this.shoppinglist[index] = ingrediant;
    };
    Service.prototype.addnewrecipe = function (Recipe) {
        this.recipes.push(Recipe);
    };
    Service.prototype.getrecipes = function () {
        return this.recipes.slice();
    };
    Service.prototype.getrecipe = function (index) {
        return this.recipes[index];
    };
    Service.prototype.setrecipes = function (recipes) {
        this.recipes = recipes;
    };
    Service.prototype.editrecipe = function (index, Recipe) {
        this.recipes.splice(index, 1);
        this.recipes.push(Recipe);
    };
    Service.prototype.removerecipe = function (index) {
        this.recipes.splice(index, 1);
    };
    Service.prototype.storedataingrediants = function (token) {
        var userid = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        return this.http.put("https://shapus-ecbb4.firebaseio.com/" + userid + "/shoppinglist.json?auth=" + token, this.shoppinglist);
    };
    Service.prototype.loaddataingrediants = function (token) {
        var userid = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        return this.http.get("https://shapus-ecbb4.firebaseio.com/" + userid + "/shoppinglist.json?auth=" + token);
    };
    Service.prototype.storedatarecipe = function (token) {
        var userid = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        return this.http.put("https://shapus-ecbb4.firebaseio.com/" + userid + "/RecipesList.json" + "?auth=" + token, this.recipes);
    };
    Service.prototype.loaddatarecipe = function (token) {
        var userid = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        return this.http.get("https://shapus-ecbb4.firebaseio.com/" + userid + "/RecipesList.json" + "?auth=" + token);
    };
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Service);

var _a;
//# sourceMappingURL=service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authnicationservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var Authnicationservice = (function () {
    function Authnicationservice() {
    }
    Authnicationservice.prototype.signup = function (form) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(form.value.mail, form.value.password);
    };
    Authnicationservice.prototype.signin = function (form) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(form.value.mail, form.value.password);
    };
    Authnicationservice.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    return Authnicationservice;
}());

//# sourceMappingURL=authenicate.server.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map