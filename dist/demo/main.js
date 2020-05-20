(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <ul class=\"nav nav-pills\">\r\n    <li><div><a href=\"/\">| Home | </a></div></li>\r\n    <li><div [hidden]=\"authenticated\"><a href=\"login\"> Login | </a></div></li>\r\n    <li><div [hidden]=\"!authenticated\"><a (click)=\"logout()\"> Logout | </a></div></li>\r\n  </ul>\r\n</div>\r\n<div class=\"container font\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demande/Demande-edit/Demande-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demande/Demande-edit/Demande-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Demande</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Demande Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"Demande\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label for=\"id\">Id</label>\n        <input type=\"number\" [(ngModel)]=\"Demande.id\" id=\"id\" name=\"id\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"etat\">Etat</label>\n        <input [(ngModel)]=\"Demande.etat\" id=\"etat\" name=\"etat\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"objet\">Objet</label>\n        <input [(ngModel)]=\"Demande.objet\" id=\"objet\" name=\"objet\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"type\">Type</label>\n        <input [(ngModel)]=\"Demande.type\" id=\"type\" name=\"type\" class=\"form-control\">\n      </div>\n\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demande/Demande-list/Demande-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demande/Demande-list/Demande-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item active\">Demande</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Demande List</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"type\">Type:</label>\n        <input [(ngModel)]=\"filter.type\" id=\"type\" name=\"type\" class=\"form-control\">\n      </div>\n\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../maintenance/Demande', 'new' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"DemandeList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">From</th>\n          <th class=\"border-top-0\" scope=\"col\">To</th>\n          <th class=\"border-top-0\" scope=\"col\">Date</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of DemandeList\" [class.active]=\"item === selectedDemande\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.from}}</td>\n          <td>{{item.to}}</td>\n          <td>{{item.date | date}}</td>\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../Demande', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>GMAO</h1>\r\n  <div [hidden]=\"!authenticated\">\r\n    <p>you have access to the different microservices!</p>\r\n    <div>\r\n      <ul class=\"nav nav-pills\">\r\n        <li><div [hidden]=\"!admin\"><a href=\"/admin\">| Admin </a></div></li>\r\n        <li><div><a href=\"/achat\"> | Achat </a></div></li>\r\n        <li><div><a href=\"/maintenance\"> | maintenance </a></div></li>\r\n        <li><div><a href=\"/stock\"> | stock |</a></div></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"authenticated\">\r\n    <p>Please login!</p>\r\n  </div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.authenticated = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.l = this.service.authenticate();
        this.authenticated = this.l[0];
    };
    AppComponent.prototype.logout = function () {
        this.l = this.service.logout();
        this.authenticated = this.l[0];
    };
    AppComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _demande_Demande_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demande/Demande.module */ "./src/app/demande/Demande.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







//added this

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                //this also
                _demande_Demande_module__WEBPACK_IMPORTED_MODULE_7__["DemandeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demande/Demande-edit/Demande-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demande/Demande-edit/Demande-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: DemandeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeEditComponent", function() { return DemandeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Demande.service */ "./src/app/demande/Demande.service.ts");
/* harmony import */ var _Demande__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Demande */ "./src/app/demande/Demande.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var DemandeEditComponent = /** @class */ (function () {
    function DemandeEditComponent(route, router, DemandeService) {
        this.route = route;
        this.router = router;
        this.DemandeService = DemandeService;
        this.feedback = {};
    }
    DemandeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _Demande__WEBPACK_IMPORTED_MODULE_3__["Demande"]());
            }
            return _this.DemandeService.findById(id);
        }))
            .subscribe(function (Demande) {
            _this.Demande = Demande;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error loading' };
        });
    };
    DemandeEditComponent.prototype.save = function () {
        var _this = this;
        this.DemandeService.save(this.Demande).subscribe(function (Demande) {
            _this.Demande = Demande;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/maintenance/Demande']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    DemandeEditComponent.prototype.cancel = function () {
        this.router.navigate(['/maintenance/Demande']);
    };
    DemandeEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"] }
    ]; };
    DemandeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Demande-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Demande-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demande/Demande-edit/Demande-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"]])
    ], DemandeEditComponent);
    return DemandeEditComponent;
}());



/***/ }),

/***/ "./src/app/demande/Demande-filter.ts":
/*!*******************************************!*\
  !*** ./src/app/demande/Demande-filter.ts ***!
  \*******************************************/
/*! exports provided: DemandeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeFilter", function() { return DemandeFilter; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var DemandeFilter = /** @class */ (function () {
    function DemandeFilter() {
        this.type = '';
    }
    return DemandeFilter;
}());



/***/ }),

/***/ "./src/app/demande/Demande-list/Demande-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demande/Demande-list/Demande-list.component.ts ***!
  \****************************************************************/
/*! exports provided: DemandeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeListComponent", function() { return DemandeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Demande_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Demande-filter */ "./src/app/demande/Demande-filter.ts");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Demande.service */ "./src/app/demande/Demande.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DemandeListComponent = /** @class */ (function () {
    function DemandeListComponent(DemandeService) {
        this.DemandeService = DemandeService;
        this.filter = new _Demande_filter__WEBPACK_IMPORTED_MODULE_1__["DemandeFilter"]();
        this.feedback = {};
    }
    Object.defineProperty(DemandeListComponent.prototype, "DemandeList", {
        get: function () {
            return this.DemandeService.DemandeList;
        },
        enumerable: true,
        configurable: true
    });
    DemandeListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    DemandeListComponent.prototype.search = function () {
        this.DemandeService.load(this.filter);
    };
    DemandeListComponent.prototype.select = function (selected) {
        this.selectedDemande = selected;
    };
    DemandeListComponent.prototype.delete = function (Demande) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.DemandeService.delete(Demande).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Delete was successful!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Error deleting.' };
            });
        }
    };
    DemandeListComponent.ctorParameters = function () { return [
        { type: _Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"] }
    ]; };
    DemandeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Demande',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Demande-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demande/Demande-list/Demande-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"]])
    ], DemandeListComponent);
    return DemandeListComponent;
}());



/***/ }),

/***/ "./src/app/demande/Demande.module.ts":
/*!*******************************************!*\
  !*** ./src/app/demande/Demande.module.ts ***!
  \*******************************************/
/*! exports provided: DemandeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeModule", function() { return DemandeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Demande-list/Demande-list.component */ "./src/app/demande/Demande-list/Demande-list.component.ts");
/* harmony import */ var _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Demande-edit/Demande-edit.component */ "./src/app/demande/Demande-edit/Demande-edit.component.ts");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Demande.service */ "./src/app/demande/Demande.service.ts");
/* harmony import */ var _Demande_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Demande.routes */ "./src/app/demande/Demande.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var DemandeModule = /** @class */ (function () {
    function DemandeModule() {
    }
    DemandeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_Demande_routes__WEBPACK_IMPORTED_MODULE_7__["DEMANDE_ROUTES"])
            ],
            declarations: [
                _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_4__["DemandeListComponent"],
                _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_5__["DemandeEditComponent"]
            ],
            providers: [_Demande_service__WEBPACK_IMPORTED_MODULE_6__["DemandeService"]],
            exports: []
        })
    ], DemandeModule);
    return DemandeModule;
}());



/***/ }),

/***/ "./src/app/demande/Demande.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/demande/Demande.routes.ts ***!
  \*******************************************/
/*! exports provided: DEMANDE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMANDE_ROUTES", function() { return DEMANDE_ROUTES; });
/* harmony import */ var _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demande-list/Demande-list.component */ "./src/app/demande/Demande-list/Demande-list.component.ts");
/* harmony import */ var _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demande-edit/Demande-edit.component */ "./src/app/demande/Demande-edit/Demande-edit.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DEMANDE_ROUTES = [
    {
        path: 'maintenance/Demande',
        component: _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_0__["DemandeListComponent"]
    },
    {
        path: 'maintenance/Demande/:id',
        component: _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_1__["DemandeEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/demande/Demande.service.ts":
/*!********************************************!*\
  !*** ./src/app/demande/Demande.service.ts ***!
  \********************************************/
/*! exports provided: DemandeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeService", function() { return DemandeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DemandeService = /** @class */ (function () {
    function DemandeService(http) {
        this.http = http;
        this.DemandeList = [];
    }
    DemandeService.prototype.findById = function (id) {
        var url = "/maintenance/Demande/" + id;
        var params = { 'id': id };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    DemandeService.prototype.load = function (filter) {
        var _this = this;
        this.find(filter).subscribe(function (result) {
            _this.DemandeList = result;
        }, function (err) {
            console.error('error loading', err);
        });
    };
    DemandeService.prototype.find = function (filter) {
        var url = "/maintenance/Demande";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
        var params = {
            'type': filter.type
        };
        return this.http.get(url, { params: params, headers: headers });
    };
    DemandeService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = "/maintenance/Demande/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "/maintenance/Demande";
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    DemandeService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = "/maintenance/Demande/" + entity.id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    DemandeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DemandeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DemandeService);
    return DemandeService;
}());



/***/ }),

/***/ "./src/app/demande/Demande.ts":
/*!************************************!*\
  !*** ./src/app/demande/Demande.ts ***!
  \************************************/
/*! exports provided: Demande */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demande", function() { return Demande; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Demande = /** @class */ (function () {
    function Demande() {
    }
    return Demande;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
        this.admin = false;
        this.authenticated = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.l = this.service.authenticate();
        this.authenticated = this.l[0];
        this.admin = this.l[1];
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.admin = false;
        this.title = 'GMAO';
        this.authenticated = false;
        this.greeting = {};
    }
    LoginService.prototype.authenticate = function () {
        var _this = this;
        this.http.get('/oauth2/elit/user/').subscribe(function (response) {
            if (response['name']) {
                _this.authenticated = true;
                //  this.http.get('resource').subscribe(data => this.greeting = data);
            }
            else {
                _this.authenticated = false;
            }
            _this.auths = response['authorities'];
            for (var _i = 0, _a = _this.auths; _i < _a.length; _i++) {
                var val = _a[_i];
                if (val.authority === 'ROLE_ADMIN') {
                    _this.admin = true;
                }
            }
        }, function () { _this.authenticated = false; });
        return [this.authenticated, this.admin];
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        this.http.post('logout', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.authenticated = false;
            _this.admin = false;
        })).subscribe();
        return [this.authenticated, this.admin];
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\gmao4.0\Gateway\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map