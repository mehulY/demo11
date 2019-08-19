webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(postsService, navCtrl, navParams) {
        this.postsService = postsService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.scripted = [];
        this.documentry = [];
        this.animation = [];
        this.gameShow = [];
        this.reality = [];
        this.productData = [];
        this.Products = [];
    }
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getJsonData().subscribe(function (data) {
            console.log("Json Data");
            console.log(data);
            _this.data.push(data);
        });
        this.postsService.getProductsData().subscribe(function (proData) {
            console.log(proData);
            _this.productData.push(proData);
        });
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.consoleData = function () {
        this.Products.push(this.productData.ProductCollection);
        console.log(this.Products);
    };
    AboutPage.prototype.filterData = function () {
        var i = 0;
        if (i === 0) {
            for (var j = 0; j < 10; j++) {
                if (this.data[i][j].show.type === "Reality") {
                    console.log("hii1");
                    this.reality.push(this.data[i][j].show);
                }
                if (this.data[i][j].show.type === "Scripted") {
                    console.log("hii2");
                    this.scripted.push(this.data[i][j].show);
                }
                if (this.data[i][j].show.type === "Documentry") {
                    console.log("hii3");
                    this.documentry.push(this.data[i][j].show);
                }
                if (this.data[i][j].show.type === "Animation") {
                    console.log("hii4");
                    this.animation.push(this.data[i][j].show);
                }
                if (this.data[i][j].show.type === "Game Show") {
                    console.log("hii5");
                    this.gameShow.push(this.data[i][j].show);
                }
            }
            console.log("done");
        }
        console.log(this.scripted);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\demo11\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>about</ion-title>\n  </ion-navbar>\n</ion-header>\n	<!-- <ion-item *ngFor="let items of data">\n		<pre>\n			{{items | json}}\n		</pre>\n	</ion-item> -->\n<ion-content class="about">\n	<button ion-button clear (click)="consoleData()">Console data</button>\n	<ion-list>\n		<ion-item *ngFor="let items of scripted">\n			<ion-col><ion-row>{{items.id}}</ion-row></ion-col>\n			<ion-col><ion-row>{{items.url}}</ion-row></ion-col>\n		</ion-item>\n	</ion-list>\n  <!-- <ion-row class="recent">\n  <ion-col col-12 col-xl-3 col-lg class="section-title">\n    <h2>Recent</h2>\n    <span>Satsang</span>\n    <div class="view">View all</div>\n  </ion-col>  \n\n   <ion-col col-12 col-lg col-xl-9>\n     <ion-slides>\n       <ion-slide class="re-img" *ngFor="let prod of productData">\n         <div class="recent-thumb">\n                  <div class="clip">\n                    <img src="{{prod.img}}" /> \n                   </div>\n                   <div class="text">\n                      <div>{{prod.Name}}</div>\n                     <span>{{prod.Price}}</span>\n                   </div>\n               </div>\n       </ion-slide>       \n     </ion-slides>\n   </ion-col> \n </ion-row> -->\n <!-- <ion-grid no-padding>\n    <ion-row>\n      <ion-col no-padding col-6 col-md-3 *ngFor="let product of Products">\n        <ion-card>\n          <img [src]="product.img"/>\n          <ion-card-content>\n            <ion-card-title no-padding>\n              {{product.Name}}\n            </ion-card-title>\n            <ion-row no-padding class="center">\n              <ion-col>\n                <b>{{product.Price | currency }} &nbsp; </b> <span class="discount">{{product.listPrice | currency}}</span> \n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <ion-grid>\n    <ion-row class="bg_img">\n      <ion-slides>\n        <ion-slide col-6 col-md-3>\n          <ion-col col-6 col-md-3>\n            <ion-card>\n              <img src="../../assets/imgs/HT-1001.jpg">\n              <ion-card-content>\n                <ion-card-title>\n                  <h5>Products</h5>\n                </ion-card-title>\n                <ion-row class="center">\n                  <ion-col>\n                    <b>200 Rs.</b><span>100 Rs.</span>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-slide>\n        <ion-slide col-6 col-md-3>\n          <ion-col col-6 col-md-3>\n            <ion-card>\n              <img src="../../assets/imgs/HT-1001.jpg">\n              <ion-card-content>\n                <ion-card-title>\n                  <h5>Products</h5>\n                </ion-card-title>\n                <ion-row class="center">\n                  <ion-col>\n                    <b>200 Rs.</b><span>100 Rs.</span>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-slide>\n        <ion-slide col-6 col-md-3>\n          <ion-col col-6 col-md-3>\n            <ion-card>\n              <img src="../../assets/imgs/HT-1001.jpg">\n              <ion-card-content>\n                <ion-card-title>\n                  <h5>Products</h5>\n                </ion-card-title>\n                <ion-row class="center">\n                  <ion-col>\n                    <b>200 Rs.</b><span>100 Rs.</span>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-slide>\n        <ion-slide col-6 col-md-3>\n          <ion-col col-6 col-md-3>\n            <ion-card>\n              <img src="../../assets/imgs/HT-1001.jpg">\n              <ion-card-content>\n                <ion-card-title>\n                  <h5>Products</h5>\n                </ion-card-title>\n                <ion-row class="center">\n                  <ion-col>\n                    <b>200 Rs.</b><span>100 Rs.</span>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\demo11\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__["a" /* PostsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=1.js.map