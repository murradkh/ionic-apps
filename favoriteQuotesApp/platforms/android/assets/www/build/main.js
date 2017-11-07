webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotePage = (function () {
    function QuotePage(navCtrl, navParams, viewctrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewctrl = viewctrl;
        this.service = service;
    }
    QuotePage.prototype.ionViewDidLoad = function () {
        var qoute = this.navParams.data;
        this.author = qoute.person;
        this.text = qoute.text;
        this.Quote = qoute;
    };
    QuotePage.prototype.ngOnInit = function () {
        // console.log("ngonInitied");
    };
    QuotePage.prototype.unfavorite = function () {
        this.service.removequotefromfavorites(this.Quote);
        this.viewctrl.dismiss();
    };
    QuotePage.prototype.dismiss = function () {
        this.viewctrl.dismiss();
    };
    return QuotePage;
}());
QuotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quote',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\quotes\quote\quote.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{author}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <ion-card>\n    <ion-card-content>\n      {{text}}\n    </ion-card-content>\n    <button ion-button outline small color="danger" (click)="unfavorite()">unfavorite</button>\n  </ion-card>\n  <button (click)="dismiss()" ion-button color="danger">Cancel</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\quotes\quote\quote.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_service__["a" /* Service */]])
], QuotePage);

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavirotepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotes_quote_quote__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavirotepagePage = (function () {
    function FavirotepagePage(navCtrl, navParams, service, modalctrl, menuctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.modalctrl = modalctrl;
        this.menuctrl = menuctrl;
        this.changebackground = false;
    }
    FavirotepagePage.prototype.ionViewDidLoad = function () {
    };
    FavirotepagePage.prototype.ngOnInit = function () {
        this.changebackground = this.service.changebackground;
    };
    FavirotepagePage.prototype.ionViewDidEnter = function () {
        this.faviortequotes = this.service.getFavoritequotes();
    };
    FavirotepagePage.prototype.onview = function (Quote) {
        var _this = this;
        var modal = this.modalctrl.create(__WEBPACK_IMPORTED_MODULE_3__quotes_quote_quote__["a" /* QuotePage */], Quote);
        modal.present();
        modal.onDidDismiss(function () {
            _this.faviortequotes = _this.service.getFavoritequotes();
        });
    };
    FavirotepagePage.prototype.remove = function (item) {
        this.service.removequotefromfavorites(item);
        this.faviortequotes = this.service.getFavoritequotes();
    };
    FavirotepagePage.prototype.openmenu = function () {
        this.menuctrl.open();
    };
    return FavirotepagePage;
}());
FavirotepagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favirotepage',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\favirotepage\favirotepage.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>favirotepage</ion-title>\n    <ion-buttons end>\n        <button ion-button color=\'primary\' (click)="openmenu()" icon-only >\n            <ion-icon name="menu"></ion-icon>\n            </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n    <ion-item-sliding *ngFor="let item of faviortequotes">\n<ion-item (click)="onview(item)" [ngClass]="{\'newcolor\': changebackground}">\n<h3 padding-top>{{item.person}}</h3>\n<p>{{item.text}}</p>\n</ion-item>\n<ion-item-options>\n    <button ion-button color="danger" large (click)="remove(item)">\n    <ion-icon name=\'trash\'>\n    </ion-icon>\n    </button>\n    </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\favirotepage\favirotepage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], FavirotepagePage);

//# sourceMappingURL=favirotepage.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotes_quotes__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LibraryPage = (function () {
    function LibraryPage(navCtrl, navParams, menuctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuctrl = menuctrl;
    }
    LibraryPage.prototype.ionViewDidLoad = function () {
    };
    LibraryPage.prototype.ngOnInit = function () {
        this.quoteCollection = __WEBPACK_IMPORTED_MODULE_2__data_data__["a" /* default */];
    };
    LibraryPage.prototype.nclick = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quotes_quotes__["a" /* QuotesPage */], item);
    };
    LibraryPage.prototype.openmenu = function () {
        this.menuctrl.open();
    };
    return LibraryPage;
}());
LibraryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-library',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\library\library.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Quotes Library</ion-title>\n    <ion-buttons end>\n      <button ion-button color=\'primary\' (click)="openmenu()"  icon-only >\n          <ion-icon name="menu"></ion-icon>\n          </button>\n  </ion-buttons>\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Select Your Favorite Quote</h3>\n<ion-list>\n  <button ion-item *ngFor="let item of quoteCollection" (click)="nclick(item)">\n    <ion-icon [name]="item.icon" item-left></ion-icon>\n   <h3 padding-top>{{item.category | uppercase}}</h3> \n  <p>{{item.quotes.length}} Quotes</p>\n  </button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\library\library.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], LibraryPage);

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesPage = (function () {
    // FaviroateorunFaviroate:string="faviroate";
    function QuotesPage(navCtrl, navParams, alertctrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertctrl = alertctrl;
        this.service = service;
    }
    QuotesPage.prototype.ionViewDidLoad = function () {
    };
    QuotesPage.prototype.ngOnInit = function () {
        this.quotescollection = this.navParams.data;
    };
    QuotesPage.prototype.change = function (Quote) {
        // if('faviortedasdda){
        var _this = this;
        var alert = this.alertctrl.create({
            title: "Add Quote",
            subTitle: 'Are you sure?',
            message: "Are you sure you want add this Quote to Favorites?",
            buttons: [
                {
                    text: "Yes,GO Ahead!",
                    handler: function () {
                        _this.service.addquotetofavorites(Quote);
                    }
                },
                {
                    text: "NO, I Change MY Mind!",
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    QuotesPage.prototype.remove = function (Quote) {
        this.service.removequotefromfavorites(Quote);
    };
    QuotesPage.prototype.isfavorite = function (item) {
        return this.service.isfavorite(item);
    };
    return QuotesPage;
}());
QuotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quotes',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\quotes\quotes.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{quotescollection.category| uppercase}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card *ngFor="let item of quotescollection.quotes;let i=index">\n        <ion-card-header>\n#{{i+1}}\n          \n        </ion-card-header>\n        <ion-card-content >\n<p>{{item.text}} </p>\n<p class="author">{{item.person}}</p>\n<button style="margin:0%;padding: 0%;" small ion-button color="danger" \n(click)="remove(item)" clear float-right *ngIf="isfavorite(item)">unfaviorte</button>\n<button style="margin:0%;padding: 0%;" small ion-button color="danger" \n(click)="change(item)" clear float-right *ngIf="!isfavorite(item)">faviorte</button>\n        </ion-card-content>\n      </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\quotes\quotes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__services_service__["a" /* Service */]])
], QuotesPage);

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, menuctrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuctrl = menuctrl;
        this.service = service;
        this.statusnow = false;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        this.statusnow = this.service.changebackground;
    };
    SettingsPage.prototype.openmenu = function () {
        this.menuctrl.open();
    };
    SettingsPage.prototype.change = function () {
        // console.log(this.status);
        this.service.changebackground = this.status.checked;
    };
    return SettingsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('togg'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Toggle */])
], SettingsPage.prototype, "status", void 0);
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\settings\settings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n    <ion-buttons end>\n      <button ion-button color=\'primary\' (click)="openmenu()" icon-only >\n          <ion-icon name="menu"></ion-icon>\n          </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n  <ion-row>\n    <ion-col col-8>\n        <ion-label>Alternate Background</ion-label>      \n    </ion-col>\n    <ion-col>\n        <ion-toggle (ionChange)="change()" #togg [checked]="statusnow"></ion-toggle>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__services_service__["a" /* Service */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favirotepage/favirotepage.module": [
		270,
		4
	],
	"../pages/library/library.module": [
		271,
		3
	],
	"../pages/quotes/quote/quote.module": [
		269,
		2
	],
	"../pages/quotes/quotes.module": [
		272,
		1
	],
	"../pages/settings/settings.module": [
		273,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tabspage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favirotepage_favirotepage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var tabspage = (function () {
    function tabspage() {
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_1__favirotepage_favirotepage__["a" /* FavirotepagePage */];
        this.libraryPage = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
    }
    return tabspage;
}());
tabspage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab tabTitle=\'Favorites\' [root]="favoritesPage" tabIcon="star">\n\n    </ion-tab>\n\n    <ion-tab tabTitle=\'Library\' [root]="libraryPage" tabIcon="book">\n\n    </ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\pages\tabs\tabs.html"*/
    })
], tabspage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_library_library__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favirotepage_favirotepage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quotes_quote_quote__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_services_service__ = __webpack_require__(40);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_favirotepage_favirotepage__["a" /* FavirotepagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__["a" /* QuotesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_quotes_quote_quote__["a" /* QuotePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* tabspage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/quotes/quote/quote.module#QuotePageModule', name: 'QuotePage', segment: 'quote', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favirotepage/favirotepage.module#FavirotepagePageModule', name: 'FavirotepagePage', segment: 'favirotepage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/quotes/quotes.module#QuotesPageModule', name: 'QuotesPage', segment: 'quotes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_favirotepage_favirotepage__["a" /* FavirotepagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__["a" /* QuotesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_quotes_quote_quote__["a" /* QuotePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* tabspage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__pages_services_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//alternativly: export const testing=[....]
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'inspirational',
        quotes: [
            {
                id: '1',
                person: 'Theodore Roosevelt',
                text: 'Believe you can and you\'re halfway there'
            },
            {
                id: '2',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world.'
            },
            {
                id: '3',
                person: 'Robert H. Schuller',
                text: 'What great thing would you attempt if you knew you could not fail?'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'ability',
        quotes: [
            {
                id: '4',
                person: 'John Wooden',
                text: 'Ability may get you to the top, but it takes character to keep you there.'
            },
            {
                id: '5',
                person: 'Robert Frost',
                text: 'Education is the ability to listen to almost anything without losing your temper.'
            }
        ],
        icon: 'bicycle'
    },
    {
        category: 'enthusiasm',
        quotes: [
            {
                id: '6',
                person: 'Benjamin Disraeli',
                text: 'Every product of genius must be the product of enthusiasm.'
            },
            {
                id: '7',
                person: 'Norman Vincent Peale',
                text: 'Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.'
            }
        ],
        icon: 'battery-charging'
    },
    {
        category: 'motivational',
        quotes: [
            {
                id: '8',
                person: 'Jim Rohn',
                text: 'Either you run the day or the day runs you.'
            },
            {
                id: '9',
                person: 'Donna Brazile',
                text: 'I was motivated to be different in part because I was different.'
            }
        ],
        icon: 'body'
    }
]);
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(104);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* tabspage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        if (page == 'settings')
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */];
        else
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* tabspage */];
        this.menuctrl.close();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('menuctrl'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */])
], MyApp.prototype, "menuctrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\app\app.html"*/'<ion-menu [content]="nav" #menuctrl>\n<ion-header>\n<ion-toolbar>\n    <ion-title>\n        Menu\n    </ion-title>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n <ion-list>\n\n     <button ion-item (click)=\'onLoad("settings")\'>\n<ion-icon name="settings" item-left></ion-icon>\nSettings\n     </button>\n     <button ion-item (click)=\'onLoad("tabspage")\'>\n         <ion-icon name="quote" item-left>\n            </ion-icon>\nQoutes\n     </button>\n </ion-list>\n</ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"C:\Users\admin\Desktop\second time ionic\favoriteQuotesApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
var Service = (function () {
    function Service() {
        this.faviortes = [];
        this.changebackground = false;
        this.faviortes = [];
    }
    Service.prototype.addquotetofavorites = function (Quote) {
        this.faviortes.push(Quote);
    };
    Service.prototype.removequotefromfavorites = function (Quote) {
        for (var i = 0; i < this.faviortes.length; i++) {
            if (this.faviortes[i].id == Quote.id) {
                this.faviortes.splice(i, 1);
            }
        }
    };
    Service.prototype.getFavoritequotes = function () {
        return this.faviortes.slice();
    };
    Service.prototype.isfavorite = function (Quote) {
        for (var i = 0; i < this.faviortes.length; i++) {
            if (this.faviortes[i].id == Quote.id) {
                return true;
            }
        }
        return false;
    };
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map