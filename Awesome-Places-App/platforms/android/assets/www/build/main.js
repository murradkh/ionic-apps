webpackJsonp([3],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_location_set_location__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPlacePage = (function () {
    function AddPlacePage(navCtrl, navParams, modaleCtrl, geogl, loadingctrl, toastctrl, camera, service, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modaleCtrl = modaleCtrl;
        this.geogl = geogl;
        this.loadingctrl = loadingctrl;
        this.toastctrl = toastctrl;
        this.camera = camera;
        this.service = service;
        this.file = file;
        this.imagedata = "";
        this.imageURI = "";
    }
    AddPlacePage.prototype.ngOnInit = function () {
        this.defualtloaction = { Latitude: 32, Longitude: 35 };
        this.marker = undefined;
        var path = cordova.file.externalCacheDirectory;
        var cachename = path.replace(cordova.file.externalApplicationStorageDirectory, '');
        this.file.removeRecursively(cordova.file.externalApplicationStorageDirectory, cachename);
    };
    AddPlacePage.prototype.onsubmit = function (form) {
        this.service.addplace(form, this.imageURI, this.marker);
        this.imagedata = "";
        this.defualtloaction = { Latitude: 32, Longitude: 35 };
        this.marker = undefined;
    };
    AddPlacePage.prototype.openmap = function () {
        var _this = this;
        var mapmodal = this.modaleCtrl.create(__WEBPACK_IMPORTED_MODULE_2__set_location_set_location__["a" /* SetLocationPage */], this.defualtloaction);
        mapmodal.present();
        mapmodal.onDidDismiss(function (data) {
            // console.log(data);
            if (data)
                _this.marker = data;
        });
    };
    AddPlacePage.prototype.locateme = function () {
        var _this = this;
        var loadinggetlocation = this.loadingctrl.create({
            content: "Getting your Location..."
        });
        loadinggetlocation.present();
        this.geogl.getCurrentPosition().then(function (data) {
            loadinggetlocation.dismiss();
            _this.marker = { Latitude: data.coords.latitude, Longitude: data.coords.longitude };
        }).catch(function (error) {
            // console.log(error);
            loadinggetlocation.dismiss();
            _this.toastctrl.create({
                message: error.message,
                duration: 3500
            }).present();
        });
    };
    AddPlacePage.prototype.Takephoto = function () {
        var _this = this;
        if (this.imageURI != "") {
            setTimeout(function () {
                var currentname = _this.imageURI.replace(/^.*[\\\/]/, '');
                var path = _this.imageURI.replace(/[^\/]*$/, '');
                _this.file.removeFile(path, currentname);
            }, 500);
        }
        this.camera.getPicture({
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        }).then(function (imageURI) {
            var currentname = imageURI.replace(/^.*[\\\/]/, '');
            var path = imageURI.replace(/[^\/]*$/, '');
            _this.imageURI = imageURI;
            setTimeout(function () {
                _this.file.readAsDataURL(path, currentname).then(function (result) {
                    _this.imagedata = result;
                }).catch(function (err) {
                    _this.file.removeFile(path, currentname);
                    _this.toastctrl.create({
                        message: "error occur",
                        duration: 3000
                    }).present();
                });
            }, 500);
        }).catch(function (error) {
            _this.toastctrl.create({
                message: "image not taked!. Please try again",
                duration: 3000
            }).present();
        });
    };
    return AddPlacePage;
}());
AddPlacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-place',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\pages\add-place\add-place.html"*/'<!--\n  Generated template for the AddPlacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title  style="margin-left: 55px">Add a Place</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="onsubmit(f)" #f="ngForm">\n<ion-list>\n<ion-item>\n  <ion-label fixed>Title</ion-label>\n  <ion-input required type="text" name="title" ngModel placeholder="Beautiful Church..."></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label stacked><h2>Short Description</h2></ion-label>\n    <ion-input required type="text" name="decription" ngModel></ion-input>    \n</ion-item>\n</ion-list>\n<ion-row margin-top>\n<ion-col col-5>\n<button ion-button outline icon-left type="button" (click)="locateme()"><ion-icon name="locate" >\n  </ion-icon>Locate me</button>  \n</ion-col>  \n<ion-col col-6>\n    <button ion-button outline icon-left type="button" (click)="openmap()">\n      <ion-icon name="map"></ion-icon>Select on Map</button>      \n</ion-col>\n</ion-row >\n<ion-col>\n<sebm-google-map *ngIf="marker" [latitude]="marker.Latitude" \n[longitude]="marker.Longitude" >\n<sebm-google-map-marker [latitude]="marker.Latitude" \n[longitude]="marker.Longitude">\n\n</sebm-google-map-marker>\n</sebm-google-map>\n</ion-col>\n<ion-row>\n\n</ion-row>\n<h2 text-center>Take a Photo!</h2>\n<ion-row>\n<button ion-button block outline type="button" icon-left (click)="Takephoto()">\n  <ion-icon  name="camera"></ion-icon>Open Camera</button>\n</ion-row>\n<ion-row *ngIf="imagedata!=\'\'">\n \n  <img [src]="imagedata" style="max-height: 250px" id="myImage">\n\n</ion-row>\n<ion-row>\n<button ion-button block  color="secondary" type="submit" [disabled]="!f.valid || !marker || imagedata==\'\' ">\n  Add this Place</button>\n</ion-row>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\pages\add-place\add-place.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_5__service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
], AddPlacePage);

//# sourceMappingURL=add-place.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the SetLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetLocationPage = (function () {
    function SetLocationPage(navCtrl, navParams, viewctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewctrl = viewctrl;
    }
    SetLocationPage.prototype.ngOnInit = function () {
        this.initlocation = this.navParams.data;
        // console.log(this.navParams.data);
    };
    SetLocationPage.prototype.setmarker = function (event) {
        this.marker = { Latitude: event.coords.lat, Longitude: event.coords.lng };
    };
    SetLocationPage.prototype.confirm = function () {
        this.viewctrl.dismiss(this.marker);
    };
    SetLocationPage.prototype.abort = function () {
        this.viewctrl.dismiss();
    };
    return SetLocationPage;
}());
SetLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-set-location',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\pages\add-place\set-location\set-location.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Choose Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n<sebm-google-map [latitude]="initlocation.Latitude" \n[longitude]="initlocation.Longitude" (mapClick)="setmarker($event)" >\n  <sebm-google-map-marker *ngIf="marker" [latitude]="marker.Latitude" \n  [longitude]="marker.Longitude" ></sebm-google-map-marker>\n</sebm-google-map>\n</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-5>\n<button ion-button type="button" block (click)="confirm()" color="secondary" [disabled]="!marker">Confirm</button>\n</ion-col>\n<ion-col col-7>\n<button ion-button type="button" block (click)="abort()" color="danger">Abort</button>\n</ion-col>\n</ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\pages\add-place\set-location\set-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], SetLocationPage);

//# sourceMappingURL=set-location.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(42);
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
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlacePage = (function () {
    function PlacePage(navParams, viewctrl, file) {
        this.navParams = navParams;
        this.viewctrl = viewctrl;
        this.file = file;
    }
    PlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacePage');
    };
    PlacePage.prototype.ngOnInit = function () {
        this.place = this.navParams.data;
        var currentname = this.place.imagepath.replace(/^.*[\\\/]/, '');
        var path = this.place.imagepath.replace(/[^\/]*$/, '');
        this.file.readAsDataURL(path, currentname).then(function (result) {
            var imgelement = document.getElementById("img");
            imgelement.setAttribute("src", result);
        }).catch(function (err) {
            alert(err);
        });
        // console.log(this.place.loaction.Longitude);
    };
    PlacePage.prototype.leave = function () {
        this.viewctrl.dismiss();
    };
    PlacePage.prototype.delete = function () {
        this.viewctrl.dismiss("delete");
    };
    return PlacePage;
}());
PlacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-place',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\pages\home\place\place.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{place.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-row>\n  <ion-col>\n    <img [src]="" id="img">\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n    {{place.description}}\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n      <sebm-google-map  [latitude]="place.loaction.Latitude" \n      [longitude]="place.loaction.Longitude" >\n      <sebm-google-map-marker [latitude]="place.loaction.Latitude" \n      [longitude]="place.loaction.Longitude">\n      \n      </sebm-google-map-marker>\n      </sebm-google-map>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col col-5>\n    <button ion-button type="button" (click)="leave()" block>\n      Leave</button>\n  </ion-col>\n  <ion-col col-7>\n      <button ion-button type="button" (click)="delete()" block color="danger">\n        Delete</button>\n      \n  </ion-col>\n  \n</ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\pages\home\place\place.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
], PlacePage);

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-place/add-place.module": [
		293,
		2
	],
	"../pages/add-place/set-location/set-location.module": [
		294,
		1
	],
	"../pages/home/place/place.module": [
		295,
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_place_add_place__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_place__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, service, modalctrl, file) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.modalctrl = modalctrl;
        this.file = file;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.places = this.service.getplaces();
        var _loop_1 = function (i) {
            // alert(this.places[i].title);
            var currentname = this_1.places[i].imagepath.replace(/^.*[\\\/]/, '');
            var path = this_1.places[i].imagepath.replace(/[^\/]*$/, '');
            this_1.file.readAsDataURL(path, currentname).then(function (result) {
                var imgelement = document.getElementById(i + "");
                imgelement.setAttribute("src", result);
            }).catch(function (err) {
                alert(err);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.places.length; i++) {
            _loop_1(i);
        }
    };
    HomePage.prototype.toaddplacepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_place_add_place__["a" /* AddPlacePage */]);
    };
    HomePage.prototype.openplace = function (index) {
        var _this = this;
        var modal = this.modalctrl.create(__WEBPACK_IMPORTED_MODULE_4__place_place__["a" /* PlacePage */], this.places[index]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data == "delete") {
                _this.places.splice(index, 1);
                _this.service.removeplace(index);
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Awesome Places\n    </ion-title>\n    <ion-buttons end>\n<button ion-button icon-only (click)="toaddplacepage()">\n  <ion-icon name="add"></ion-icon>\n</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-card *ngFor="let place of places;let i=index" (click)="openplace(i)">\n    <img [src]="" [id]="i">\n    \n<ion-card-content text-center>\n  <ion-card-title>\n{{place.title}}\n\n  </ion-card-title>\n  <p>{{place.description}}</p>\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_place_add_place__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_place_set_location_set_location__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_place_place__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__ = __webpack_require__(169);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_add_place_add_place__["a" /* AddPlacePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_place_set_location_set_location__["a" /* SetLocationPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_place_place__["a" /* PlacePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-place/add-place.module#AddPlacePageModule', name: 'AddPlacePage', segment: 'add-place', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-place/set-location/set-location.module#SetLocationPageModule', name: 'SetLocationPage', segment: 'set-location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD26oFeiQWr2cFSlKhK6xEGZmFLx473rsw'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_add_place_add_place__["a" /* AddPlacePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_place_set_location_set_location__["a" /* SetLocationPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_place_place__["a" /* PlacePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_13__pages_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__["a" /* NativeStorage */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\Awesome-Places-App\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_file__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(169);
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
    function Service(file, storage) {
        var _this = this;
        this.file = file;
        this.storage = storage;
        this.places = [];
        //this.storage.clear();
        this.storage.getItem('places')
            .then(function (data) {
            //  alert("places taked")
            _this.places = data;
        });
        // this.storage.clear().then(()=>alert("storage cleared")).catch(err=>alert(err))
        // this.storage.getItem("places").then((places:newplace[])=>{
        //     // if(places!=null)
        //     // this.places=places;
        //     // else this.places=[];
        //     // alert("sucess");
        //            }).catch((err)=>alert(err));
    }
    Service.prototype.addplace = function (form, imagepath, marker) {
        var _this = this;
        var currentname = imagepath.replace(/^.*[\\\/]/, '');
        var path = imagepath.replace(/[^\/]*$/, '');
        this.file.moveFile(path, currentname, cordova.file.dataDirectory, currentname).then(function (data) {
            _this.places.push({ title: form.value.title, description: form.value.decription, imagepath: data.nativeURL, loaction: marker });
            _this.storage.setItem("places", _this.places).then().catch(function (err) {
                _this.places.splice(_this.places.length - 1, 1);
            });
            form.reset();
        }).catch(function (err) {
            alert("error occur");
            _this.file.removeFile(path, currentname);
            form.reset();
        });
    };
    Service.prototype.getplaces = function () {
        return this.places.slice();
    };
    Service.prototype.removeplace = function (index) {
        this.places.splice(index, 1);
        this.storage.setItem("places", this.places).then().catch(function (err) {
            alert(err);
        });
    };
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
], Service);

//# sourceMappingURL=service.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map