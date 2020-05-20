(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n    <sidebar-cmp></sidebar-cmp>\n  </div>\n  <div class=\"main-panel\">\n    <navbar-cmp></navbar-cmp>\n    <div class=\"content\">\n\n      <router-outlet></router-outlet>\n\n      <router-outlet name=\"aux\"></router-outlet>\n\n    </div>\n\n\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"header\">\n    <h1 class=\"title\">Welcome {{name}}</h1>\n  </div>\n  <div class=\"content\">\n\n    <div *ngIf=\"needsLogin\" class=\"alert alert-warning\">\n      You have been redirected to this page because you don't have the necessary\n      rights for the reqeusted action. Login with a respective user account!\n    </div>\n<!--\n    <button (click)=\"login()\" class=\"btn btn-default\">Login</button>\n    <button (click)=\"logout()\" class=\"btn btn-default\">Logout</button>\n\n    \n    <tabbed-pane [activeId]=\"0\">\n        <tab title=\"Booked\" [id]=\"0\">\n            This page could display all booked passengers ...\n        </tab>\n        <tab title=\"Checked in\" [id]=\"1\">\n            This page could display all checked in passengers ...\n        </tab>\n\n        <tab title=\"Boarded\" [id]=\"2\">\n            This page could display all boarded passengers ...\n        </tab>\n    </tabbed-pane>\n    -->\n  </div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/Demande-edit/Demande-edit.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/Demande-edit/Demande-edit.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/maintenance\">Maintenance</a></li>\n  <li class=\"breadcrumb-item active\">Demande</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Demande Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"Demande\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label for=\"id\">Id</label>\n        <input type=\"number\" [(ngModel)]=\"Demande.id\" id=\"id\" name=\"id\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"etat\">Etat</label>\n        <input [(ngModel)]=\"Demande.etat\" id=\"etat\" name=\"etat\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"objet\">Objet</label>\n        <input [(ngModel)]=\"Demande.objet\" id=\"objet\" name=\"objet\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"type\">Type</label>\n        <input [(ngModel)]=\"Demande.type\" id=\"type\" name=\"type\" class=\"form-control\">\n      </div>\n\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/Demande-list/Demande-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/Demande-list/Demande-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/maintenance\">Maintenance</a></li>\n  <li class=\"breadcrumb-item active\">Demande</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Liste des demandes</h2>\n  </div>\n  <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n     <!-- <div class=\"form-group\">\n        <label for=\"type\">Type:</label>\n        <input [(ngModel)]=\"filter.type\" id=\"type\" name=\"type\" class=\"form-control\">\n      </div>\n\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      --><a [routerLink]=\"['../newDemande' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"DemandeList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">etat</th>\n          <th class=\"border-top-0\" scope=\"col\">objet</th>\n          <th class=\"border-top-0\" scope=\"col\">type</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of DemandeList\" [class.active]=\"item === selectedDemande\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.etat}}</td>\n          <td>{{item.objet}}</td>\n          <td>{{item.type}}</td>\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../Demande', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/demande-new/Demande-new.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/demande-new/Demande-new.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item\"><a routerLink=\"/maintenance\">Maintenance</a></li>\n    <li class=\"breadcrumb-item active\">Demande</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Demande Detail</h2>\n    </div>\n    <div class=\"content\">\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n      <form #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n      \n        <div class=\"form-group\">\n          <label for=\"id\">Id</label>\n          <input type=\"number\" [(ngModel)]=\"Demande.id\" id=\"id\" name=\"id\" class=\"form-control\">\n        </div>\n      \n        <div class=\"form-group\">\n          <label for=\"etat\">Etat</label>\n          <input [(ngModel)]=\"Demande.etat\" id=\"etat\" name=\"etat\" class=\"form-control\">\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"objet\">Objet</label>\n          <input [(ngModel)]=\"Demande.objet\" id=\"objet\" name=\"objet\" class=\"form-control\">\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"type\">Type</label>\n          <input [(ngModel)]=\"Demande.type\" id=\"type\" name=\"type\" class=\"form-control\">\n        </div>\n  \n      \n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n      </form>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance/maintenance.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance/maintenance.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Maintenance</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Liste des tables</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n       <!-- <div class=\"form-group\">\n          <label for=\"type\">Type:</label>\n          <input [(ngModel)]=\"filter.type\" id=\"type\" name=\"type\" class=\"form-control\">\n        </div>\n  \n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n        --><a routerLink=\"/maintenance/Demande\" class=\"btn btn-default\">Demande</a>\n      </form>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar bar1\"></span>\n        <span class=\"icon-bar bar2\"></span>\n        <span class=\"icon-bar bar3\"></span>\n      </button>\n      <button (click)=\"logout()\" class=\"btn btn-default\">Logout</button>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n       \n       <!-- <li>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"ti-panel\"></i>\n            <p>Stats</p>\n          </a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"ti-bell\"></i>\n            <p class=\"notification\">5</p>\n            <p>Notifications</p>\n            <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Notification 1</a></li>\n            <li><a href=\"#\">Notification 2</a></li>\n            <li><a href=\"#\">Notification 3</a></li>\n            <li><a href=\"#\">Notification 4</a></li>\n            <li><a href=\"#\">Another notification</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"#\">\n            <i class=\"ti-settings\"></i>\n            <p>Settings</p>\n          </a>\n        </li>-->\n      </ul>\n\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a class=\"simple-text\">\n      <div class=\"logo-img\">\n        <img src=\"../../assets/img/elit-logo.png\" alt=\"\">\n      </div>\n      GMAO\n    </a>\n  </div>\n  <ul class=\"nav\">\n    <li>\n      <a routerLink=\"home\">\n        <i class=\"ti-home\"></i>\n        <p>Home</p>\n      </a>\n    </li>\n\n    <li >\n      <div [hidden]=\"tpmm\">\n      <a routerLink=\"maintenance\">\n        <i class=\"ti-arrow-top-right\"></i>\n        <p>Maintenance</p>\n      </a>\n      </div>\n    </li>\n\n    <li >\n      <div [hidden]=\"gest\">\n      <a routerLink=\"stock\">\n        <i class=\"ti-arrow-top-right\"></i>\n        <p>Stock</p>\n      </a>\n     </div>\n    </li>\n\n    <li >\n      <div >\n      <a routerLink=\"home\">\n        <i class=\"ti-arrow-top-right\"></i>\n        <p>Achat</p>\n      </a>\n     </div>\n    </li>\n\n\n\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/Demande-edit/Demande-edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/Demande-edit/Demande-edit.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/Stock\">Stock</a></li>\n  <li class=\"breadcrumb-item active\">Demande</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Demande Detail</h2>\n  </div>\n  <div class=\"content\">\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n    <form *ngIf=\"Demande\" #editForm=\"ngForm\" (ngSubmit)=\"save()\">\n    \n      <div class=\"form-group\">\n        <label for=\"id\">Id</label>\n        <input type=\"number\" [(ngModel)]=\"Demande.id\" id=\"id\" name=\"id\" class=\"form-control\">\n      </div>\n    \n      <div class=\"form-group\">\n        <label for=\"etat\">Etat</label>\n        <input [(ngModel)]=\"Demande.etat\" id=\"etat\" name=\"etat\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"objet\">Objet</label>\n        <input [(ngModel)]=\"Demande.objet\" id=\"objet\" name=\"objet\" class=\"form-control\">\n      </div>\n\n\n\n    \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/Demande-list/Demande-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/Demande-list/Demande-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/stock\">Stock</a></li>\n  <li class=\"breadcrumb-item active\">Demande</li>\n</ol>\n<div class=\"card\">\n  <div class=\"header\">\n    <h2 class=\"title\">Liste des demandes materiels</h2>\n  </div>\n <!-- <div class=\"content\">\n    <form #f=\"ngForm\">\n      \n      <div class=\"form-group\">\n        <label for=\"type\">Type:</label>\n        <input [(ngModel)]=\"filter.type\" id=\"type\" name=\"type\" class=\"form-control\">\n      </div>\n\n      \n      <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>\n      <a [routerLink]=\"['../newDemande' ]\" class=\"btn btn-default\">New</a>\n    </form>\n  </div>-->\n</div>\n<div class=\"card\" *ngIf=\"DemandeList.length > 0\">\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\" id=\"datatable\">\n      <thead>\n        <tr>\n          <th class=\"border-top-0\" scope=\"col\">Id</th>\n          <th class=\"border-top-0\" scope=\"col\">etat</th>\n          <th class=\"border-top-0\" scope=\"col\">objet</th>\n          <th class=\"border-top-0\" scope=\"col\" style=\"width:120px\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of DemandeList\" [class.active]=\"item === selectedDemande\">\n        \n          <td>{{item.id}}</td>\n          <td>{{item.etat}}</td>\n          <td>{{item.objet}}</td>\n          <td style=\"white-space: nowrap\">\n            <a [routerLink]=\"['../Demande', item.id ]\" class=\"btn btn-secondary\">Edit</a>&nbsp;\n            <button (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock/stock.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock/stock.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Stock</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"header\">\n      <h2 class=\"title\">Liste des tables</h2>\n    </div>\n    <div class=\"content\">\n      <form #f=\"ngForm\">\n        \n       <!-- <div class=\"form-group\">\n          <label for=\"type\">Type:</label>\n          <input [(ngModel)]=\"filter.type\" id=\"type\" name=\"type\" class=\"form-control\">\n        </div>\n  \n        \n        <button (click)=\"search()\" [disabled]=\"!f?.valid\" class=\"btn btn-primary\">Search</button>  -->\n        <a routerLink=\"/stock/Demande\" class=\"btn btn-default\">Demande</a>\n        <a routerLink=\"/stock/\" class=\"btn btn-default\">Sortie</a>\n        <a routerLink=\"/stock/\" class=\"btn btn-default\">Reception</a>\n        <a routerLink=\"/stock/\" class=\"btn btn-default\">Dotation</a>\n      </form>\n    </div>\n  </div>\n  ");

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-indicator {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.3;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #FFF;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0.0)\n  }\n  50% {\n    -webkit-transform: scale(1.0)\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  }\n  50% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87O0VBRVAsc0RBQXNEO0VBQ3RELDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLDZCQUE2QjtFQUMvQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbn1cblxuLmRvdWJsZS1ib3VuY2UxLCAuZG91YmxlLWJvdW5jZTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uZG91YmxlLWJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMClcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApXG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICB9XG59XG4iXX0= */");

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'GMAO-app',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _maintenance_Demande_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maintenance/Demande.module */ "./src/app/maintenance/Demande.module.ts");
/* harmony import */ var _stock_Demande_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock/Demande.module */ "./src/app/stock/Demande.module.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _maintenance_Demande_module__WEBPACK_IMPORTED_MODULE_10__["DemandeMaintenanceModule"],
                _stock_Demande_module__WEBPACK_IMPORTED_MODULE_11__["DemandeStockModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].slice(), __assign({}, _app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_EXTRA_OPTIONS"])),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            ],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES, APP_EXTRA_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_EXTRA_OPTIONS", function() { return APP_EXTRA_OPTIONS; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var APP_ROUTES = [
    {
        path: '',
        // redirectTo: 'home',
        // pathMatch: 'full'
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var APP_EXTRA_OPTIONS = {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
};


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



//{ user } from '../user';
var HomeComponent = /** @class */ (function () {
    // u : user;
    function HomeComponent(
    //    private route: ActivatedRoute,
    service, router) {
        this.service = service;
        this.router = router;
        this.name = this.service.getname();
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.u=this.service.user;
        this.name = this.service.getname();
        console.log('name : ' + this.name);
        // this.needsLogin = !!this.route.snapshot.params['needsLogin'];
    };
    /*  needsLogin: boolean;
     _userName: string = '';
    
      ngOnInit() {
        this.needsLogin = !!this.route.snapshot.params['needsLogin'];
      }
      get userName(): string {
        return this._userName;
      }
    */
    HomeComponent.prototype.logout = function () {
        this.service.logout();
    };
    HomeComponent.prototype.login = function (event) {
        this.router.navigate(['http://localhost:8080/login']);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
    LoginService.prototype.getgest = function () {
        var _this = this;
        /* this.http.get('/oauth2/elit/user/').subscribe(response => {
           console.log(response)
           this.data=response;
           for (var val of this.data.authorities) {
                 
             if( val.authority === 'ROLE_GESTOCK' ){
                 this.gest =true;
             }
             
           }
         }); */
        this.http.get('/stock/').subscribe(function (response) {
            console.log(response);
            _this.data2 = response;
            if ((_this.data2.status == 403) || (_this.data2.status == 401)) {
                _this.gest = false;
            }
            else {
                _this.gest = true;
            }
        });
        return this.gest;
    };
    LoginService.prototype.gettpmm = function () {
        /*this.http.get('/oauth2/elit/user/').subscribe(response => {
          console.log(response)
          this.data=response;
          for (var val of this.data.authorities) {
                
            if( val.authority === 'ROLE_TPMM' ){
                this.tpmm =true;
            }
            
          }
        });*/
        var _this = this;
        this.http.get('/maintenance/').subscribe(function (response) {
            console.log(response);
            _this.data2 = response;
            if ((_this.data2.status == 403) || (_this.data2.status == 401))
                _this.tpmm = false;
            else
                _this.tpmm = true;
        });
        return this.gest;
    };
    LoginService.prototype.getname = function () {
        var _this = this;
        this.http.get('/oauth2/elit/user/').subscribe(function (response) {
            console.log(response);
            _this.data = response;
            _this.name = _this.data.name;
        });
        return this.name;
    };
    LoginService.prototype.authenticate = function () {
        var _this = this;
        this.http.get('/oauth2/elit/user/').subscribe(function (response) {
            console.log(response);
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
        this.http.post('/logout', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
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

/***/ "./src/app/maintenance/Demande-edit/Demande-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/maintenance/Demande-edit/Demande-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: DemandeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeEditComponent", function() { return DemandeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Demande.service */ "./src/app/maintenance/Demande.service.ts");
/* harmony import */ var _Demande__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Demande */ "./src/app/maintenance/Demande.ts");
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./Demande-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/Demande-edit/Demande-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"]])
    ], DemandeEditComponent);
    return DemandeEditComponent;
}());



/***/ }),

/***/ "./src/app/maintenance/Demande-filter.ts":
/*!***********************************************!*\
  !*** ./src/app/maintenance/Demande-filter.ts ***!
  \***********************************************/
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

/***/ "./src/app/maintenance/Demande-list/Demande-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/maintenance/Demande-list/Demande-list.component.ts ***!
  \********************************************************************/
/*! exports provided: DemandeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeListComponent", function() { return DemandeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Demande_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Demande-filter */ "./src/app/maintenance/Demande-filter.ts");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Demande.service */ "./src/app/maintenance/Demande.service.ts");
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./Demande-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/Demande-list/Demande-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"]])
    ], DemandeListComponent);
    return DemandeListComponent;
}());



/***/ }),

/***/ "./src/app/maintenance/Demande.module.ts":
/*!***********************************************!*\
  !*** ./src/app/maintenance/Demande.module.ts ***!
  \***********************************************/
/*! exports provided: DemandeMaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeMaintenanceModule", function() { return DemandeMaintenanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Demande-list/Demande-list.component */ "./src/app/maintenance/Demande-list/Demande-list.component.ts");
/* harmony import */ var _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Demande-edit/Demande-edit.component */ "./src/app/maintenance/Demande-edit/Demande-edit.component.ts");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Demande.service */ "./src/app/maintenance/Demande.service.ts");
/* harmony import */ var _Demande_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Demande.routes */ "./src/app/maintenance/Demande.routes.ts");
/* harmony import */ var _demande_new_demande_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demande-new/demande-new.component */ "./src/app/maintenance/demande-new/demande-new.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/maintenance/maintenance/maintenance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var DemandeMaintenanceModule = /** @class */ (function () {
    function DemandeMaintenanceModule() {
    }
    DemandeMaintenanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_Demande_routes__WEBPACK_IMPORTED_MODULE_7__["DEMANDE_ROUTES"])
            ],
            declarations: [
                _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_4__["DemandeListComponent"],
                _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_5__["DemandeEditComponent"],
                _demande_new_demande_new_component__WEBPACK_IMPORTED_MODULE_8__["DemandeNewComponent"],
                _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_9__["MaintenanceComponent"]
            ],
            providers: [_Demande_service__WEBPACK_IMPORTED_MODULE_6__["DemandeService"]],
            exports: []
        })
    ], DemandeMaintenanceModule);
    return DemandeMaintenanceModule;
}());



/***/ }),

/***/ "./src/app/maintenance/Demande.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/maintenance/Demande.routes.ts ***!
  \***********************************************/
/*! exports provided: DEMANDE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMANDE_ROUTES", function() { return DEMANDE_ROUTES; });
/* harmony import */ var _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demande-list/Demande-list.component */ "./src/app/maintenance/Demande-list/Demande-list.component.ts");
/* harmony import */ var _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demande-edit/Demande-edit.component */ "./src/app/maintenance/Demande-edit/Demande-edit.component.ts");
/* harmony import */ var _demande_new_demande_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demande-new/demande-new.component */ "./src/app/maintenance/demande-new/demande-new.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/maintenance/maintenance/maintenance.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var DEMANDE_ROUTES = [
    {
        path: 'maintenance/Demande',
        component: _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_0__["DemandeListComponent"]
    },
    {
        path: 'maintenance/newDemande',
        component: _demande_new_demande_new_component__WEBPACK_IMPORTED_MODULE_2__["DemandeNewComponent"]
    },
    {
        path: 'maintenance/Demande/:id',
        component: _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_1__["DemandeEditComponent"]
    },
    {
        path: 'maintenance',
        component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__["MaintenanceComponent"]
    }
];


/***/ }),

/***/ "./src/app/maintenance/Demande.service.ts":
/*!************************************************!*\
  !*** ./src/app/maintenance/Demande.service.ts ***!
  \************************************************/
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
        var params = {};
        return this.http.get(url, { params: params, headers: headers });
    };
    DemandeService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = "/maintenance/Demande/"; //${entity.id.toString()} yndar mor Demande
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

/***/ "./src/app/maintenance/Demande.ts":
/*!****************************************!*\
  !*** ./src/app/maintenance/Demande.ts ***!
  \****************************************/
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

/***/ "./src/app/maintenance/demande-new/demande-new.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/maintenance/demande-new/demande-new.component.ts ***!
  \******************************************************************/
/*! exports provided: DemandeNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeNewComponent", function() { return DemandeNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Demande.service */ "./src/app/maintenance/Demande.service.ts");
/* harmony import */ var _Demande__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Demande */ "./src/app/maintenance/Demande.ts");
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





var DemandeNewComponent = /** @class */ (function () {
    function DemandeNewComponent(route, router, DemandeService) {
        this.route = route;
        this.router = router;
        this.DemandeService = DemandeService;
        this.feedback = {};
    }
    DemandeNewComponent.prototype.ngOnInit = function () {
        this.Demande = new _Demande__WEBPACK_IMPORTED_MODULE_3__["Demande"]();
        /*   this
             .route
             .params
             .pipe(
               map(p => p.id),
               switchMap(id => {
                 return of(new Demande());
                
               })
             )
             .subscribe(Demande => {
                 this.Demande = Demande;
                 this.feedback = {};
               },
               err => {
                 this.feedback = {type: 'warning', message: 'Error loading'};
               }
             ); */
    };
    DemandeNewComponent.prototype.save = function () {
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
    DemandeNewComponent.prototype.cancel = function () {
        this.router.navigate(['/maintenance/Demande']);
    };
    DemandeNewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"] }
    ]; };
    DemandeNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Demande-new',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Demande-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/demande-new/Demande-new.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"]])
    ], DemandeNewComponent);
    return DemandeNewComponent;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance/maintenance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/maintenance/maintenance/maintenance.component.ts ***!
  \******************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent() {
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
    };
    MaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance',
            template: __importDefault(__webpack_require__(/*! raw-loader!./maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance/maintenance/maintenance.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(
    //    private route: ActivatedRoute,
    service
    //   , private router: Router
    ) {
        this.service = service;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.logout = function () {
        this.service.logout();
        location.reload();
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
            //   , private router: Router
        ])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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


//import { user } from '../user';
var SidebarComponent = /** @class */ (function () {
    //u : user;
    function SidebarComponent(
    //    private route: ActivatedRoute,
    service
    //   , private router: Router
    ) {
        this.service = service;
        this.tpmm = false;
        this.gest = false;
        this.tpmm = this.service.gettpmm();
        this.gest = this.service.getgest();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        //  this.u=this.service.user;
        this.tpmm = this.service.gettpmm();
        this.gest = this.service.getgest();
        console.log('tpmm : ' + this.tpmm);
        console.log('gest : ' + this.gest);
    };
    SidebarComponent.prototype.logout = function () {
        this.service.logout();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidebar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
            //   , private router: Router
        ])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/stock/Demande-edit/Demande-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stock/Demande-edit/Demande-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: DemandeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeEditComponent", function() { return DemandeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Demande.service */ "./src/app/stock/Demande.service.ts");
/* harmony import */ var _Demande__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Demande */ "./src/app/stock/Demande.ts");
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
        this.Demande.type = 'materiel';
        this.DemandeService.save(this.Demande).subscribe(function (Demande) {
            _this.Demande = Demande;
            _this.feedback = { type: 'success', message: 'Save was successful!' };
            setTimeout(function () {
                _this.router.navigate(['/stock/Demande']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Error saving' };
        });
    };
    DemandeEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock/Demande']);
    };
    DemandeEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"] }
    ]; };
    DemandeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Demande-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Demande-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/Demande-edit/Demande-edit.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"]])
    ], DemandeEditComponent);
    return DemandeEditComponent;
}());



/***/ }),

/***/ "./src/app/stock/Demande-filter.ts":
/*!*****************************************!*\
  !*** ./src/app/stock/Demande-filter.ts ***!
  \*****************************************/
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

/***/ "./src/app/stock/Demande-list/Demande-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stock/Demande-list/Demande-list.component.ts ***!
  \**************************************************************/
/*! exports provided: DemandeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeListComponent", function() { return DemandeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Demande_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Demande-filter */ "./src/app/stock/Demande-filter.ts");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Demande.service */ "./src/app/stock/Demande.service.ts");
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./Demande-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/Demande-list/Demande-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_Demande_service__WEBPACK_IMPORTED_MODULE_2__["DemandeService"]])
    ], DemandeListComponent);
    return DemandeListComponent;
}());



/***/ }),

/***/ "./src/app/stock/Demande.module.ts":
/*!*****************************************!*\
  !*** ./src/app/stock/Demande.module.ts ***!
  \*****************************************/
/*! exports provided: DemandeStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeStockModule", function() { return DemandeStockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Demande-list/Demande-list.component */ "./src/app/stock/Demande-list/Demande-list.component.ts");
/* harmony import */ var _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Demande-edit/Demande-edit.component */ "./src/app/stock/Demande-edit/Demande-edit.component.ts");
/* harmony import */ var _Demande_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Demande.service */ "./src/app/stock/Demande.service.ts");
/* harmony import */ var _Demande_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Demande.routes */ "./src/app/stock/Demande.routes.ts");
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock/stock.component */ "./src/app/stock/stock/stock.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var DemandeStockModule = /** @class */ (function () {
    function DemandeStockModule() {
    }
    DemandeStockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_Demande_routes__WEBPACK_IMPORTED_MODULE_7__["DEMANDE_ROUTES"])
            ],
            declarations: [
                _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_4__["DemandeListComponent"],
                _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_5__["DemandeEditComponent"],
                _stock_stock_component__WEBPACK_IMPORTED_MODULE_8__["StockComponent"]
            ],
            providers: [_Demande_service__WEBPACK_IMPORTED_MODULE_6__["DemandeService"]],
            exports: []
        })
    ], DemandeStockModule);
    return DemandeStockModule;
}());



/***/ }),

/***/ "./src/app/stock/Demande.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/stock/Demande.routes.ts ***!
  \*****************************************/
/*! exports provided: DEMANDE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMANDE_ROUTES", function() { return DEMANDE_ROUTES; });
/* harmony import */ var _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demande-list/Demande-list.component */ "./src/app/stock/Demande-list/Demande-list.component.ts");
/* harmony import */ var _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demande-edit/Demande-edit.component */ "./src/app/stock/Demande-edit/Demande-edit.component.ts");
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock/stock.component */ "./src/app/stock/stock/stock.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DEMANDE_ROUTES = [
    {
        path: 'stock/Demande',
        component: _Demande_list_Demande_list_component__WEBPACK_IMPORTED_MODULE_0__["DemandeListComponent"]
    },
    {
        path: 'stock/Demande/:id',
        component: _Demande_edit_Demande_edit_component__WEBPACK_IMPORTED_MODULE_1__["DemandeEditComponent"]
    },
    {
        path: 'stock',
        component: _stock_stock_component__WEBPACK_IMPORTED_MODULE_2__["StockComponent"]
    }
];


/***/ }),

/***/ "./src/app/stock/Demande.service.ts":
/*!******************************************!*\
  !*** ./src/app/stock/Demande.service.ts ***!
  \******************************************/
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
        var url = "/stock/Demande/" + id;
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
        var url = "/stock/Demande";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Accept', 'application/json');
        var params = {};
        return this.http.get(url, { params: params, headers: headers });
    };
    DemandeService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = "/stock/Demande/"; //${entity.id.toString()} yndar mor Demande
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ID', entity.id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "/stock/Demande";
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    DemandeService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var url = '';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        if (entity.id) {
            url = "/stock/Demande/" + entity.id.toString();
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

/***/ "./src/app/stock/Demande.ts":
/*!**********************************!*\
  !*** ./src/app/stock/Demande.ts ***!
  \**********************************/
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

/***/ "./src/app/stock/stock/stock.component.ts":
/*!************************************************!*\
  !*** ./src/app/stock/stock/stock.component.ts ***!
  \************************************************/
/*! exports provided: StockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockComponent", function() { return StockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var StockComponent = /** @class */ (function () {
    function StockComponent() {
    }
    StockComponent.prototype.ngOnInit = function () {
    };
    StockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock',
            template: __importDefault(__webpack_require__(/*! raw-loader!./stock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/stock/stock.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], StockComponent);
    return StockComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\gmao4.0\Gateway\src\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map