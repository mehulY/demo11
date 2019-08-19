webpackJsonp([0],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(postsService, navCtrl) {
        this.postsService = postsService;
        this.navCtrl = navCtrl;
        this.data = [];
        this.items = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getRemoteData().subscribe(function (data) {
            console.log("Remote data");
            console.log(data);
            _this.data.push(data);
        });
    };
    HomePage.prototype.navigateToAboutPage = function () {
        this.navCtrl.push('AboutPage');
    };
    HomePage.prototype.initializeItems = function () {
        this.items = [
            'Python',
            'Go',
            'Java',
            'C#',
            'C',
            'Swift',
            'Objective C',
            'C++',
            'Javascript',
            'Php',
            'Angular JS',
            'React JS',
            'HTML',
        ];
    };
    HomePage.prototype.getItems = function (e) {
        this.initializeItems();
        var val = e.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\demo11\src\pages\home\home.html"*/'<ion-header>\n  	<ion-navbar>\n    	<ion-title>\n      		Ionic Blank\n    	</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content >\n	<button ion-button clear (click)=\'navigateToAboutPage()\'>About</button>\n    <ion-searchbar  (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor="let item of items">\n            {{item}}\n        </ion-item>\n    </ion-list>\n  	<ion-list>\n      <ion-item *ngFor="let number of reality">\n      <p>{{number}}</p>\n      <p>\n                The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n            </p>\n  </ion-item>\n      <ion-item>\n  		<pre *ngFor="let child of data">\n  			{{ child | json }}\n  		</pre>\n  	</ion-item>\n\n    </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"E:\demo11\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__["a" /* PostsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map