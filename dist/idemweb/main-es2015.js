(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cursos/cursos.component */ "./src/app/components/cursos/cursos.component.ts");
/* harmony import */ var _components_cursos_presencial_presencial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cursos/presencial/presencial.component */ "./src/app/components/cursos/presencial/presencial.component.ts");
/* harmony import */ var _components_cursos_online_online_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cursos/online/online.component */ "./src/app/components/cursos/online/online.component.ts");








const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    { path: 'curso/:cursoId', component: _components_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_3__["CursosComponent"] },
    { path: 'presenciales/:cursoId', component: _components_cursos_presencial_presencial_component__WEBPACK_IMPORTED_MODULE_4__["PresencialComponent"] },
    { path: 'cursos/online', component: _components_cursos_online_online_component__WEBPACK_IMPORTED_MODULE_5__["OnlineComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");









function AppComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openRegistro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openMiPerfil(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AppComponent {
    constructor(authService, dialog) {
        this.authService = authService;
        this.dialog = dialog;
        this.title = 'idemweb';
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    openRegistro() {
        const dialogRef = this.dialog.open(_components_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    openMiPerfil() {
        const dialogRef = this.dialog.open(_components_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 101, vars: 2, consts: [[1, "navbar", "dropdown", "p-0", "todo"], ["id", "0", 1, "Navigation"], [1, "w-100", "h-100", 2, "list-style-type", "none"], [1, "Navigation-option-block"], ["href", "/", 1, "link", "nuxt-link-exact-active", "nuxt-link-active"], ["href", "/Nosotros", 1, "link"], ["href", "/cursos_online", 1, "link"], ["href", "/#page_3", 1, ""], ["href", "/donaciones", 1, "link"], ["href", "/", 1, "aaa", "d-flex", "justify-content-center", "ml-2"], [1, "logo", "n7"], [1, "nav", "d-none", "d-md-flex", "flex-column", "justify-content-between", "py-4", "px-0"], [1, "first-icon", "d-flex", "flex-column", "justify-content-center"], [1, "d-flex", "justify-content-center", "mt-4"], [1, "nav-icon", "n1"], ["matTooltip", "Iniciar sesi\u00F3n", "class", "d-flex justify-content-center mt-4", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["matTooltip", "Mi Perfil", "class", "d-flex justify-content-center mt-4", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["target", "_blank", "href", "https://www.facebook.com/idem.ong/", 1, "d-flex", "justify-content-center", "mt-4"], [1, "nav-icon", "n4"], ["target", "_blank", "href", "https://www.linkedin.com/company/institucion-educativa-idem/", 1, "d-flex", "justify-content-center", "mt-4"], [1, "nav-icon", "n5"], ["target", "_blank", "href", "https://www.instagram.com/idemeducacion/", 1, "d-flex", "justify-content-center", "mt-4"], [1, "nav-icon", "n6"], ["target", "_blank", "href", "https://wa.me/51972714858?text= ", 1, "d-flex", "justify-content-center", "mt-4"], [1, "nav-icon", "n7"], ["id", "container app"], [1, "Footer", "container-fluid", "w-100"], [1, "d-flex", 2, "max-width", "90%"], [1, "footer-content-wrapper"], [1, "info-wrapper"], [1, "help", "normal-text"], [1, "options"], [1, "column"], ["href", "/#page_2", 1, ""], [1, "option", "normal-text"], ["href", "/#page_4", 1, ""], ["href", "/donaciones/#comoFunciona", 1, ""], ["href", "/#page_5", 1, ""], ["href", "/#page_6", 1, ""], ["href", "/donaciones", 1, ""], ["href", "/nosotros/#ourPhilosophy", 1, ""], ["href", "/nosotros/#ourTeam", 1, ""], ["href", "/cursos_online/#ourTeachers", 1, ""], [1, "info-wrapper2"], [1, "mail", "normal-text"], [1, "paymentMethods"], [1, "paymentMethodWrapper"], [1, "paymentMethod", 2, "background-image", "url(css/images/footer/paypal.png)"], [1, "paymentMethod", 2, "background-image", "url(css/images/footer/Diners.png)"], [1, "paymentMethod", 2, "background-image", "url(css/images/footer/Visa.png)"], [1, "paymentMethod", 2, "background-image", "url(css/images/footer/American.png)"], [1, "conditions", "normal-text"], [1, "icon-container"], [1, "icon"], [1, "derechos", "small-text"], ["matTooltip", "Iniciar sesi\u00F3n", 1, "d-flex", "justify-content-center", "mt-4", 2, "cursor", "pointer", 3, "click"], [1, "nav-icon", "n2"], ["matTooltip", "Mi Perfil", 1, "d-flex", "justify-content-center", "mt-4", 2, "cursor", "pointer", 3, "click"], [1, "nav-icon"], ["width", "31px", 1, "rounded-circle", 2, "margin-left", "-5px", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_a_20_Template, 2, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_a_21_Template, 3, 1, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00BFNecesitas ayuda? Comunicate con nosotros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Carreras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00BFComo Funciona?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Testimonios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Noticias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Historia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Filosof\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Nuestro Equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Docentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Donaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "informes@idem.org.pe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Terminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "2020 - IDEM Derechos Reservados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cursos/cursos.component */ "./src/app/components/cursos/cursos.component.ts");
/* harmony import */ var _components_cursos_online_online_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cursos/online/online.component */ "./src/app/components/cursos/online/online.component.ts");
/* harmony import */ var _components_cursos_presencial_presencial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cursos/presencial/presencial.component */ "./src/app/components/cursos/presencial/presencial.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _services_api_idemAlumnos_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/api/idemAlumnos.service */ "./src/services/api/idemAlumnos.service.ts");
/* harmony import */ var _services_api_idemApartados_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/api/idemApartados.service */ "./src/services/api/idemApartados.service.ts");
/* harmony import */ var _services_api_idemCargos_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/api/idemCargos.service */ "./src/services/api/idemCargos.service.ts");
/* harmony import */ var _services_api_idemCategorias_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/api/idemCategorias.service */ "./src/services/api/idemCategorias.service.ts");
/* harmony import */ var _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/api/idemCursos.service */ "./src/services/api/idemCursos.service.ts");
/* harmony import */ var _services_api_idemDocentes_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/api/idemDocentes.service */ "./src/services/api/idemDocentes.service.ts");
/* harmony import */ var _services_api_idemEstados_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/api/idemEstados.service */ "./src/services/api/idemEstados.service.ts");
/* harmony import */ var _services_api_idemMatriculas_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/api/idemMatriculas.service */ "./src/services/api/idemMatriculas.service.ts");
/* harmony import */ var _services_api_idemModulos_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../services/api/idemModulos.service */ "./src/services/api/idemModulos.service.ts");
/* harmony import */ var _services_api_idemModulosComentarios_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../services/api/idemModulosComentarios.service */ "./src/services/api/idemModulosComentarios.service.ts");
/* harmony import */ var _services_api_idemPagos_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../services/api/idemPagos.service */ "./src/services/api/idemPagos.service.ts");
/* harmony import */ var _services_api_idemPermisos_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../services/api/idemPermisos.service */ "./src/services/api/idemPermisos.service.ts");
/* harmony import */ var _services_api_idemPersonas_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../services/api/idemPersonas.service */ "./src/services/api/idemPersonas.service.ts");
/* harmony import */ var _services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../services/api/idemRelCursosModulos.service */ "./src/services/api/idemRelCursosModulos.service.ts");
/* harmony import */ var _services_api_idemUsuarios_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../services/api/idemUsuarios.service */ "./src/services/api/idemUsuarios.service.ts");
/* harmony import */ var _services_api_introspection_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../services/api/introspection.service */ "./src/services/api/introspection.service.ts");
/* harmony import */ var _services_api_itemTipocursos_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../services/api/itemTipocursos.service */ "./src/services/api/itemTipocursos.service.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");













/**Material Imports */






/**Social*/
/* Mis servicios*/



















let config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"]("871082404913-ve78njuutnpnp6ktkupqv6agu652r7b7.apps.googleusercontent.com")
    }
]);
function provideConfig() {
    return config;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_api_idemAlumnos_service__WEBPACK_IMPORTED_MODULE_18__["IdemAlumnosService"],
        _services_api_idemApartados_service__WEBPACK_IMPORTED_MODULE_19__["IdemApartadosService"],
        _services_api_idemCargos_service__WEBPACK_IMPORTED_MODULE_20__["IdemCargosService"],
        _services_api_idemCategorias_service__WEBPACK_IMPORTED_MODULE_21__["IdemCategoriasService"],
        _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_22__["IdemCursosService"],
        _services_api_idemDocentes_service__WEBPACK_IMPORTED_MODULE_23__["IdemDocentesService"],
        _services_api_idemEstados_service__WEBPACK_IMPORTED_MODULE_24__["IdemEstadosService"],
        _services_api_idemMatriculas_service__WEBPACK_IMPORTED_MODULE_25__["IdemMatriculasService"],
        _services_api_idemModulos_service__WEBPACK_IMPORTED_MODULE_26__["IdemModulosService"],
        _services_api_idemModulosComentarios_service__WEBPACK_IMPORTED_MODULE_27__["IdemModulosComentariosService"],
        _services_api_idemPagos_service__WEBPACK_IMPORTED_MODULE_28__["IdemPagosService"],
        _services_api_idemPermisos_service__WEBPACK_IMPORTED_MODULE_29__["IdemPermisosService"],
        _services_api_idemPersonas_service__WEBPACK_IMPORTED_MODULE_30__["IdemPersonasService"],
        _services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_31__["IdemRelCursosModulosService"],
        _services_api_idemUsuarios_service__WEBPACK_IMPORTED_MODULE_32__["IdemUsuariosService"],
        _services_api_introspection_service__WEBPACK_IMPORTED_MODULE_33__["IntrospectionService"],
        _services_api_itemTipocursos_service__WEBPACK_IMPORTED_MODULE_34__["ItemTipocursosService"],
        {
            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
            useFactory: provideConfig
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_7__["CursosComponent"],
        _components_cursos_online_online_component__WEBPACK_IMPORTED_MODULE_8__["OnlineComponent"],
        _components_cursos_presencial_presencial_component__WEBPACK_IMPORTED_MODULE_9__["PresencialComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_35__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_cursos_cursos_component__WEBPACK_IMPORTED_MODULE_7__["CursosComponent"],
                    _components_cursos_online_online_component__WEBPACK_IMPORTED_MODULE_8__["OnlineComponent"],
                    _components_cursos_presencial_presencial_component__WEBPACK_IMPORTED_MODULE_9__["PresencialComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_35__["RegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]
                ],
                providers: [_services_api_idemAlumnos_service__WEBPACK_IMPORTED_MODULE_18__["IdemAlumnosService"],
                    _services_api_idemApartados_service__WEBPACK_IMPORTED_MODULE_19__["IdemApartadosService"],
                    _services_api_idemCargos_service__WEBPACK_IMPORTED_MODULE_20__["IdemCargosService"],
                    _services_api_idemCategorias_service__WEBPACK_IMPORTED_MODULE_21__["IdemCategoriasService"],
                    _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_22__["IdemCursosService"],
                    _services_api_idemDocentes_service__WEBPACK_IMPORTED_MODULE_23__["IdemDocentesService"],
                    _services_api_idemEstados_service__WEBPACK_IMPORTED_MODULE_24__["IdemEstadosService"],
                    _services_api_idemMatriculas_service__WEBPACK_IMPORTED_MODULE_25__["IdemMatriculasService"],
                    _services_api_idemModulos_service__WEBPACK_IMPORTED_MODULE_26__["IdemModulosService"],
                    _services_api_idemModulosComentarios_service__WEBPACK_IMPORTED_MODULE_27__["IdemModulosComentariosService"],
                    _services_api_idemPagos_service__WEBPACK_IMPORTED_MODULE_28__["IdemPagosService"],
                    _services_api_idemPermisos_service__WEBPACK_IMPORTED_MODULE_29__["IdemPermisosService"],
                    _services_api_idemPersonas_service__WEBPACK_IMPORTED_MODULE_30__["IdemPersonasService"],
                    _services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_31__["IdemRelCursosModulosService"],
                    _services_api_idemUsuarios_service__WEBPACK_IMPORTED_MODULE_32__["IdemUsuariosService"],
                    _services_api_introspection_service__WEBPACK_IMPORTED_MODULE_33__["IntrospectionService"],
                    _services_api_itemTipocursos_service__WEBPACK_IMPORTED_MODULE_34__["ItemTipocursosService"],
                    {
                        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                        useFactory: provideConfig
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cursos/cursos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/cursos/cursos.component.ts ***!
  \*******************************************************/
/*! exports provided: CursosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosComponent", function() { return CursosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/idemRelCursosModulos.service */ "./src/services/api/idemRelCursosModulos.service.ts");
/* harmony import */ var _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/idemCursos.service */ "./src/services/api/idemCursos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CursosComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.nombre, " ");
} }
class CursosComponent {
    constructor(route, ademRelCursosModulosService, idemCursosService) {
        this.route = route;
        this.ademRelCursosModulosService = ademRelCursosModulosService;
        this.idemCursosService = idemCursosService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.idcurso = params.get('cursoId');
            this.cargarCurso();
        });
    }
    cargarCurso() {
        this.idemCursosService.idemCursosGet('eq.' + this.idcurso, null, null, null, null, null, null, null, null, null, null, null, null, '*,idem_curso_items(nombre,imagen),idem_modulos(*)').subscribe(data => {
            this.curso = data[0];
            this.modulos = this.curso.idem_modulos;
        });
    }
}
CursosComponent.ɵfac = function CursosComponent_Factory(t) { return new (t || CursosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_2__["IdemRelCursosModulosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_3__["IdemCursosService"])); };
CursosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CursosComponent, selectors: [["app-cursos"]], decls: 180, vars: 7, consts: [["id", "container app", 1, "nuxt"], [1, "cursos_presenciales_s_hero", "p-0", "container-fluid"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "p-0", "w-100", "slide", 2, "text-shadow", "rgb(51, 51, 51) 1px 1px 2px"], ["id", "carousel1___BV_inner_", "role", "list", 1, "carousel-inner"], ["role", "listitem", "aria-current", "true", "aria-posinset", "1", "aria-setsize", "1", "id", "__BVID__18", 1, "carousel-item", "active", 2, "height", "100vh"], [1, "carousel-caption"], [1, "row", "h-100"], [1, "uno", "h-100", "col-8", "p-0", "col", 2, "background-image", "url(../../../assets/css/images/CursosOnline/Fotos-IDEM--13.png)"], [1, "container", "screen1", "h-100", "d-flex", "justify-content-end"], [1, "col-6", "h-100", "px-3", "px-lg-5", "col"], [1, "formulario-general", "h-100", "w-100", "d-flex", "flex-column", "justify-content-center"], [1, "hero-title", "m-0"], [1, "form", "d-flex", "justify-content-end", "pr-5", 2, "z-index", "800", "max-width", "394px"], [1, "btn-wrapper", "px-2"], [1, "btn", "btn-danger", "comprar-btn"], [1, "d-flex", "justify-content-end", "pt-4", "pr-5", 2, "z-index", "800", "max-width", "394px"], [1, "radio", "m-0"], [1, "d-flex"], [1, "radio", "small-text"], [1, "px-1", "radio-price"], [1, "radio-decimal"], [1, "dos", "h-100", "col-4", "p-0", "col"], [1, "screen2", "h-100", "b-100"], [1, "LogoBlanco"], ["href", "#", "role", "button", "aria-controls", "carousel1___BV_inner_", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#", "role", "button", "aria-controls", "carousel1___BV_inner_", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "carousel1___BV_indicators_", "aria-hidden", "true", "aria-label", "Select a slide to display", "aria-owns", "carousel1___BV_inner_", 1, "carousel-indicators", 2, "display", "none"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", 1, "active"], [1, "container-fluid", "informacion_cursos", "p-0", 2, "height", "75vh", "width", "100%"], [1, "row", "h-100", "w-100", "m-0"], [1, "screen1", "col-md-6", "h-100", "w-100"], [1, "row", "h-100", "w-100"], [1, "col-md-4", "d-flex", "align-items-center", "flex-column", "justify-content-center"], [1, "titulo_informacion", "section-title"], [1, "col-md-8", "d-flex", "align-items-center", "flex-column", "justify-content-center", "contenido_reloj"], [1, "row"], ["class", "col-md-4  w-100 clock-wrapper", 4, "ngFor", "ngForOf"], [1, "screen2", "col-md-6", "h-100", "w-100"], [1, "col-md-3", "h-100", "w-100", "d-flex", "align-items-center", "flex-column", "justify-content-center"], [1, "title-container", "d-flex", "flex-column", "justify-content-center"], [1, "titulo_informacion", "section-title", "pt-4", "d-flex", "justify-content-center", "pt-0", 2, "min-height", "350px", "min-width", "350px"], [1, "col-md-8", "h-100", "w-100", "d-flex", "align-items-center", "flex-column", "justify-content-center", "text-left", "pl-0"], [1, "normal-text", "texto_descripcion_curso"], [1, "container-fluid", "silabo-morado", "p-5", 2, "height", "100vh", "width", "100%"], [1, "container", "principal", "py-0", "pr-0", "w-100", "h-100"], [1, "section-title", "d-flex", "justify-content-center", "pt-0"], [1, "row", "w-100", "h-50", "m-0", "p-0"], [1, "col", "p-0"], [1, "card", "cuadrado_azul", "d-flex", "justify-content-between", "align-items-end"], [1, "normal-text", "module-number"], ["src", "/cursoSelect/flecharoja.png", 1, "flecha"], [1, "docentes", "container-fluid", "d-flex", "flex-column", "justify-content-center", "inf", "px-2", "px-lg-5", 2, "height", "100vh", "width", "100%"], [1, "py-5"], [1, "text_container"], [1, "title-text"], [1, "hero-title"], [1, "normal-text", "m-0"], [1, "m-0", "normal-text"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "slide"], ["role", "listitem", "aria-current", "false", "aria-posinset", "1", "aria-setsize", "2", "id", "__BVID__29", "aria-hidden", "true", 1, "carousel-item", 2, "height", "50vh"], [1, "w-100", "h-100", "px-0"], [1, "px-0", "w-100", "h-100", "m-0", "px-4", "d-flex", "justify-content-center"], [1, "d-flex", "w-50", "px-2", "py-4"], [1, "d-flex", "justify-content-start", "pt-0", "text-center"], [1, "image", "w-100", "pt-0", "d-flex", "flex-column", "justify-content-center", 2, "background-image", "url(../../../assets/css/images/docentes/1.png)"], [1, "w-100", "d-flex", "justify-content-start"], [1, "card-text", "w-100", "d-flex", "flex-column", "justify-content-center"], [1, "cursos-title", "text-left"], [1, "small-text", "subtitle", "text-left"], [1, "small-text", "text-left"], [1, "image", "w-100", "pt-0", "d-flex", "flex-column", "justify-content-center", 2, "background-image", "url(../../../assets/css/images/docentes/2.png)"], ["role", "listitem", "aria-current", "true", "aria-posinset", "2", "aria-setsize", "2", "id", "__BVID__30", "aria-hidden", "false", 1, "carousel-item", "active", 2, "height", "50vh"], [1, "image", "w-100", "pt-0", "d-flex", "flex-column", "justify-content-center", 2, "background-image", "url(../../../assets/css/images/docentes/3.png)"], [1, "image", "w-100", "pt-0", "d-flex", "flex-column", "justify-content-center", 2, "background-image", "url(../../../assets/css/images/docentes/5.png)"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "false", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__29", 1, ""], ["role", "button", "id", "carousel1___BV_indicator_2_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 2", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__30", 1, "active"], [1, "col-md-4", "w-100", "clock-wrapper"], ["width", "70px;", 1, "clock-icon", 3, "src"], [1, "small-text", "pt-2", "pb-2"]], template: function CursosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " comprar ahora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Precio Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ol", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CursosComponent_div_51_Template, 4, 2, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sobre el curso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "S\u00EDlabo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "M\u00F3dulo 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "M\u00F3dulo 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "M\u00F3dulo 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "M\u00F3dulo 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "M\u00F3dulo 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "M\u00F3dulo 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Docentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Lorem ipsum dolor sit amet, consectetur .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Lorem ipsum dolor sit amet, consectetur adipis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Lourdes Flores Nano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Abogada y pol\u00EDtica peruana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Esteban Chong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Contador y Exsocio Principal de Pwc Per\u00FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Mar\u00EDa Tereza Qui\u00F1onez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Abogada y socia del estudio Rodrigo,Elias & Medrano Abogados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Samuel Abad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Abogado y Socio del estudio Echecopar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "ol", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "li", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "li", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.curso.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 4, ctx.curso.costo, "2.0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.curso.idem_curso_items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.curso.descripcion, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["@font-face {\n    font-family: FABRIKBOLD;\n    src: url('FABRIK-BOLD_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: FABRIK;\n    src: url('FABRIK-REGULAR_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: TIEMPO;\n    src: url('TIEMPOSHEADLINE-BLACK.OTF') format(\"opentype\");\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%] {\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    z-index: -4;\n    font-size: 35px;\n    background-image: url('Fotos-IDEM--14.png');\n    background-size: cover;\n    max-width: 10000px;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 80%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    line-height: 35px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n        line-height: 45px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n        line-height: 55px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n        line-height: 65px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    color: #280071;\n    text-align: left;\n    font-size: 28px;\n    font-weight: 100;\n    -webkit-margin-left: 30%;\n    z-index: 35;\n    font-family: TIEMPO;\n    text-shadow: none;\n    -webkit-text-decoration: underline #280071;\n            text-decoration: underline #280071;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n        font-size: 38px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n    text-shadow: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-decimal[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 8px;\n    margin-bottom: 0px;\n    color: #fb4030;\n    font-size: 12px;\n}\n\n@media screen and (min-width: 1232px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-decimal[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-decimal[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-decimal[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-price[_ngcontent-%COMP%] {\n    font-family: TIEMPO;\n    font-size: 25px;\n    margin-bottom: 0px;\n    color: #fb4030;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-price[_ngcontent-%COMP%] {\n        font-size: 35px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-price[_ngcontent-%COMP%] {\n        font-size: 45px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-price[_ngcontent-%COMP%] {\n        font-size: 55px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n    border-color: transparent;\n    border-radius: 0px;\n    font-family: FABRIK;\n    font-size: 10px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n        font-size: 15px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%] {\n    background-color: #f94139;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n    border-color: #f94139;\n    background-color: transparent;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-color: #dcebec;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .LogoBlanco[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    background-image: url('LogoBlanco.png');\n    height: 185px;\n    width: 169px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .LogoBlanco[_ngcontent-%COMP%] {\n        height: 285px;\n        width: 269px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    z-index: -5;\n    height: 100%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    display: none;\n    top: 93%;\n    background-color: #280071;\n    max-height: 7%;\n    max-width: 5%;\n    opacity: 1;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    left: 58.5%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    right: 31.5%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .checkround[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 9.5px;\n    left: 8px;\n    height: 12px;\n    width: 12px;\n    background-color: transparent;\n    border-color: #f94139;\n    border-style: solid;\n    border-width: 1.5px;\n    border-radius: 50%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkround[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .checkround[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkround[_ngcontent-%COMP%]:after {\n    display: block;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .checkround[_ngcontent-%COMP%]:after {\n    left: calc(50% - 3px);\n    top: calc(50% - 3px);\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #f94139;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n}\n\n.informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    background-color: #dcebec;\n}\n\n.informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .titulo_informacion[_ngcontent-%COMP%] {\n    transform: rotate(-90deg);\n    color: #fb4030;\n}\n\n.informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%] {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n@media screen and (min-width: 1024px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%] {\n        padding: 15px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%] {\n        padding: 20px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%] {\n        padding: 25px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%] {\n        padding: 30px;\n    }\n}\n\n.informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%]   .clock-icon[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n}\n\n@media screen and (min-width: 1024px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%]   .clock-icon[_ngcontent-%COMP%] {\n        width: 60px;\n        height: 60px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%]   .clock-icon[_ngcontent-%COMP%] {\n        width: 70px;\n        height: 70px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%]   .clock-icon[_ngcontent-%COMP%] {\n        width: 80px;\n        height: 80px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .contenido_reloj[_ngcontent-%COMP%]   .clock-wrapper[_ngcontent-%COMP%]   .clock-icon[_ngcontent-%COMP%] {\n        width: 100px;\n        height: 100px;\n    }\n}\n\n.informacion_cursos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    background-color: #280071;\n}\n\n.informacion_cursos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .texto_descripcion_curso[_ngcontent-%COMP%] {\n    color: #dcebec;\n}\n\n.informacion_cursos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n    color: red;\n    z-index: 2;\n    width: 50px;\n    height: 50%;\n    border: none;\n}\n\n@media screen and (min-width: 1024px) {\n    .informacion_cursos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n        width: 100px;\n    }\n}\n\n.informacion_cursos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .titulo_informacion[_ngcontent-%COMP%] {\n    transform: rotate(-90deg);\n    color: #fb4030;\n}\n\n\n\n.silabo-morado[_ngcontent-%COMP%] {\n    background-color: #dcebec;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%] {\n    position: relative;\n    padding-left: 50px;\n    border: none;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    width: 50px;\n    height: 100%;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    transform: rotate(-90deg);\n    color: #fb4030;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .cuadrado_azul[_ngcontent-%COMP%] {\n    background-color: #280071;\n    border: solid 1px #deeced;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .cuadrado_azul[_ngcontent-%COMP%]   .module-number[_ngcontent-%COMP%] {\n    font-family: TIEMPO;\n    color: #dcebec;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .cuadrado_azul[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background-image: url('flechaRoja.png');\n    background-size: cover;\n    height: 15px;\n    width: 25px;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .cuadrado_rojo[_ngcontent-%COMP%] {\n    background-color: #fb4030;\n    border: solid 1px #deeced;\n    display: flex;\n    flex-direction: column;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .cuadrado_rojo[_ngcontent-%COMP%]   .small-text[_ngcontent-%COMP%] {\n    color: #dcebec;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .cuadrado_rojo[_ngcontent-%COMP%]   .module-number[_ngcontent-%COMP%] {\n    font-family: TIEMPO;\n    color: #280071;\n}\n\n.silabo-morado[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%]   .cuadrado_rojo[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background-image: url('flechaMorada.png');\n    background-size: cover;\n    height: 15px;\n    width: 25px;\n    margin-bottom: 15px;\n}\n\n.card[_ngcontent-%COMP%] {\n    position: relative;\n    transition: transform 1s;\n    transform-style: preserve-3d;\n    padding: 10px;\n    width: 100%;\n    height: 100%;\n}\n\n@media screen and (min-width: 896px) {\n    .card[_ngcontent-%COMP%] {\n        padding: 15px;\n    }\n}\n\n.card[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n    color: #dcebec;\n}\n\n.card__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(360deg);\n}\n\n\n\n.docentes[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n    margin-right: 5%;\n    margin-left: 5%;\n    max-width: 1200px;\n}\n\n@media screen and (min-width: 1440px) {\n    .docentes[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        margin-right: auto;\n        margin-left: auto;\n        max-width: 1600px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .docentes[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        max-width: 1800px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    color: #280071;\n    font-family: FABRIK;\n    font-size: 18px;\n    line-height: 20px;\n}\n\n.docentes[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: #f9423a;\n    font-family: TIEMPO;\n}\n\n.docentes[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin-left: 10%;\n}\n\n@media screen and (min-width: 1440px) {\n    .docentes[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        max-width: 600px;\n        margin-left: 5%;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .docentes[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        max-width: 800px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    height: 100%;\n    visibility: hidden;\n    border-color: transparent;\n}\n\n.docentes[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-position: center;\n}\n\n.docentes[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n    color: #fb4030;\n    font-size: 13px;\n    padding-right: 15%;\n    line-height: 15px;\n    text-shadow: none;\n    font-family: TIEMPO;\n}\n\n@media screen and (min-width: 1024px) {\n    .docentes[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 20px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .docentes[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 24px;\n        line-height: 28px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .docentes[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 32px;\n        line-height: 36px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .cursos-title-2[_ngcontent-%COMP%] {\n    color: #fb4030;\n    font-size: 15px;\n    line-height: 19px;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    background-color: #dcebec;\n    padding: 20px;\n}\n\n@media screen and (min-width: 1024px) {\n    .docentes[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 30px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .docentes[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 40px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .docentes[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 50px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .cursos-text[_ngcontent-%COMP%] {\n    color: #43398a;\n    font-size: 10px;\n    line-height: 12px;\n    text-shadow: none;\n}\n\n@media screen and (min-width: 1024px) {\n    .docentes[_ngcontent-%COMP%]   .cursos-text[_ngcontent-%COMP%] {\n        font-size: 13px;\n        line-height: 15px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    color: #fb4030;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    height: 100%;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .cursos-button[_ngcontent-%COMP%] {\n    background-color: #dcecec;\n    color: #43398a;\n    font-size: 13px;\n    letter-spacing: 3px;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .docentes[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    top: 50%;\n    height: 20px;\n    width: 20px;\n    opacity: 1;\n    background-size: cover;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%], .docentes[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%], .docentes[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    background-image: url('r2.png');\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    background-image: url('r1.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJzb3MvY3Vyc29zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0RBQStFO0FBQ25GOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1EQUFrRjtBQUN0Rjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3REFBdUY7QUFDM0Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLGlDQUFpQztJQUNqQyw0REFBNEQ7SUFDNUQsb0VBQW9FO0lBQ3BFLGlEQUFpRDtJQUNqRCxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0Isd0RBQXdEO0lBQ3hELDZEQUE2RDtJQUM3RCxvQ0FBb0M7SUFDcEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZiwyQ0FBa0Y7SUFDbEYsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDBDQUFrQztZQUFsQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixh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eUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtCQUF3RDtBQUM1RDs7QUFFQTtJQUNJLCtCQUF3RDtBQUM1RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3Vyc29zL2N1cnNvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IEZBQlJJS0JPTEQ7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvZm9udHMvRkFCUklLLUJPTERfMC5PVEYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xuICAgIHNyYzogdXJsKC4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2ZvbnRzL0ZBQlJJSy1SRUdVTEFSXzAuT1RGKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFRJRU1QTztcbiAgICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9mb250cy9USUVNUE9TSEVBRExJTkUtQkxBQ0suT1RGKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIHtcbiAgICAvKiBUaGUgcmFkaW8gKi9cbiAgICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCByYWRpbyBidXR0b24gKi9cbiAgICAvKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4gICAgLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuICAgIC8qIENyZWF0ZSB0aGUgaW5kaWNhdG9yICh0aGUgZG90L2NpcmNsZSAtIGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuICAgIC8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXG4gICAgLyogU3R5bGUgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgKi9cbiAgICAvKiBUaGUgY2hlY2sgKi9cbiAgICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuICAgIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuICAgIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuICAgIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4gICAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuICAgIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSB7XG4gICAgei1pbmRleDogLTQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2N1cnNvU2VsZWN0L0ZvdG9zLUlERU0tLTE0LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1heC13aWR0aDogMTAwMDBweDtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4MCU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5oZXJvLXRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLmhlcm8tdGl0bGUge1xuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5oZXJvLXRpdGxlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAuaGVyby10aXRsZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xuICAgIH1cbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnRleHQge1xuICAgIGNvbG9yOiAjMjgwMDcxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgLXdlYmtpdC1tYXJnaW4tbGVmdDogMzAlO1xuICAgIHotaW5kZXg6IDM1O1xuICAgIGZvbnQtZmFtaWx5OiBUSUVNUE87XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIzI4MDA3MTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnRleHQge1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgfVxufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAucmFkaW8ge1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnJhZGlvIC5yYWRpbyxcbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5yYWRpbyAucmFkaW8tZGVjaW1hbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGNvbG9yOiAjZmI0MDMwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnJhZGlvIC5yYWRpbyxcbiAgICAuY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAucmFkaW8gLnJhZGlvLWRlY2ltYWwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAucmFkaW8gLnJhZGlvLFxuICAgIC5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5yYWRpbyAucmFkaW8tZGVjaW1hbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5yYWRpbyAucmFkaW8sXG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnJhZGlvIC5yYWRpby1kZWNpbWFsIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnJhZGlvIC5yYWRpby1wcmljZSB7XG4gICAgZm9udC1mYW1pbHk6IFRJRU1QTztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGNvbG9yOiAjZmI0MDMwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAucmFkaW8gLnJhZGlvLXByaWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnJhZGlvIC5yYWRpby1wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5yYWRpbyAucmFkaW8tcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgfVxufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAuY29tcHJhci1idG4sXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAuYWdyZWdhci1idG4ge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAuY29tcHJhci1idG4sXG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLmFncmVnYXItYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLmNvbXByYXItYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk0MTM5O1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAuYWdyZWdhci1idG4ge1xuICAgIGJvcmRlci1jb2xvcjogI2Y5NDEzOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4yIHtcbiAgICB6LWluZGV4OiAtNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmVjO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjIgLkxvZ29CbGFuY28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvTG9nb0JsYW5jby5wbmdcIik7XG4gICAgaGVpZ2h0OiAxODVweDtcbiAgICB3aWR0aDogMTY5cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4yIC5Mb2dvQmxhbmNvIHtcbiAgICAgICAgaGVpZ2h0OiAyODVweDtcbiAgICAgICAgd2lkdGg6IDI2OXB4O1xuICAgIH1cbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5pbWctZmx1aWQge1xuICAgIHotaW5kZXg6IC01O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgei1pbmRleDogMTU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0b3A6IDkzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwMDcxO1xuICAgIG1heC1oZWlnaHQ6IDclO1xuICAgIG1heC13aWR0aDogNSU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGxlZnQ6IDU4LjUlO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgcmlnaHQ6IDMxLjUlO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnJhZGlvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAucmFkaW8gaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5jaGVja3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5LjVweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogI2Y5NDEzOTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMS41cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnJhZGlvIGlucHV0OmNoZWNrZWR+LmNoZWNrcm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmNoZWNrcm91bmQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAucmFkaW8gaW5wdXQ6Y2hlY2tlZH4uY2hlY2tyb3VuZDphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAucmFkaW8gLmNoZWNrcm91bmQ6YWZ0ZXIge1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gM3B4KTtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjk0MTM5O1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmNoZWNrIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmNoZWNrIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbmZvcm1hY2lvbl9jdXJzb3MgLnNjcmVlbjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZWM7XG59XG5cbi5pbmZvcm1hY2lvbl9jdXJzb3MgLnNjcmVlbjEgLnRpdHVsb19pbmZvcm1hY2lvbiB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgY29sb3I6ICNmYjQwMzA7XG59XG5cbi5pbmZvcm1hY2lvbl9jdXJzb3MgLnNjcmVlbjEgLmNvbnRlbmlkb19yZWxvaiAuY2xvY2std3JhcHBlciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmluZm9ybWFjaW9uX2N1cnNvcyAuc2NyZWVuMSAuY29udGVuaWRvX3JlbG9qIC5jbG9jay13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5pbmZvcm1hY2lvbl9jdXJzb3MgLnNjcmVlbjEgLmNvbnRlbmlkb19yZWxvaiAuY2xvY2std3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuaW5mb3JtYWNpb25fY3Vyc29zIC5zY3JlZW4xIC5jb250ZW5pZG9fcmVsb2ogLmNsb2NrLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmluZm9ybWFjaW9uX2N1cnNvcyAuc2NyZWVuMSAuY29udGVuaWRvX3JlbG9qIC5jbG9jay13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG59XG5cbi5pbmZvcm1hY2lvbl9jdXJzb3MgLnNjcmVlbjEgLmNvbnRlbmlkb19yZWxvaiAuY2xvY2std3JhcHBlciAuY2xvY2staWNvbiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuaW5mb3JtYWNpb25fY3Vyc29zIC5zY3JlZW4xIC5jb250ZW5pZG9fcmVsb2ogLmNsb2NrLXdyYXBwZXIgLmNsb2NrLWljb24ge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLmluZm9ybWFjaW9uX2N1cnNvcyAuc2NyZWVuMSAuY29udGVuaWRvX3JlbG9qIC5jbG9jay13cmFwcGVyIC5jbG9jay1pY29uIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5pbmZvcm1hY2lvbl9jdXJzb3MgLnNjcmVlbjEgLmNvbnRlbmlkb19yZWxvaiAuY2xvY2std3JhcHBlciAuY2xvY2staWNvbiB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuaW5mb3JtYWNpb25fY3Vyc29zIC5zY3JlZW4xIC5jb250ZW5pZG9fcmVsb2ogLmNsb2NrLXdyYXBwZXIgLmNsb2NrLWljb24ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG4uaW5mb3JtYWNpb25fY3Vyc29zIC5zY3JlZW4yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwMDcxO1xufVxuXG4uaW5mb3JtYWNpb25fY3Vyc29zIC5zY3JlZW4yIC50ZXh0b19kZXNjcmlwY2lvbl9jdXJzbyB7XG4gICAgY29sb3I6ICNkY2ViZWM7XG59XG5cbi5pbmZvcm1hY2lvbl9jdXJzb3MgLnNjcmVlbjIgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmluZm9ybWFjaW9uX2N1cnNvcyAuc2NyZWVuMiAudGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbn1cblxuLmluZm9ybWFjaW9uX2N1cnNvcyAuc2NyZWVuMiAudGl0dWxvX2luZm9ybWFjaW9uIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbn1cblxuXG4vKkVzdGlsb3MgY3VhZHJvIG1vcmFkbyovXG5cbi5zaWxhYm8tbW9yYWRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmVjO1xufVxuXG4uc2lsYWJvLW1vcmFkbyAucHJpbmNpcGFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnNpbGFiby1tb3JhZG8gLnByaW5jaXBhbCAudGl0bGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwJTtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWxhYm8tbW9yYWRvIC5wcmluY2lwYWwgLnRpdGxlLWNvbnRhaW5lciAuc2VjdGlvbi10aXRsZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgY29sb3I6ICNmYjQwMzA7XG59XG5cbi5zaWxhYm8tbW9yYWRvIC5wcmluY2lwYWwgLmN1YWRyYWRvX2F6dWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODAwNzE7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RlZWNlZDtcbn1cblxuLnNpbGFiby1tb3JhZG8gLnByaW5jaXBhbCAuY3VhZHJhZG9fYXp1bCAubW9kdWxlLW51bWJlciB7XG4gICAgZm9udC1mYW1pbHk6IFRJRU1QTztcbiAgICBjb2xvcjogI2RjZWJlYztcbn1cblxuLnNpbGFiby1tb3JhZG8gLnByaW5jaXBhbCAuY3VhZHJhZG9fYXp1bCAuZmxlY2hhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvY3Vyc29TZWxlY3QvZmxlY2hhUm9qYS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG59XG5cbi5zaWxhYm8tbW9yYWRvIC5wcmluY2lwYWwgLmN1YWRyYWRvX3Jvam8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjQwMzA7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RlZWNlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWxhYm8tbW9yYWRvIC5wcmluY2lwYWwgLmN1YWRyYWRvX3Jvam8gLnNtYWxsLXRleHQge1xuICAgIGNvbG9yOiAjZGNlYmVjO1xufVxuXG4uc2lsYWJvLW1vcmFkbyAucHJpbmNpcGFsIC5jdWFkcmFkb19yb2pvIC5tb2R1bGUtbnVtYmVyIHtcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xuICAgIGNvbG9yOiAjMjgwMDcxO1xufVxuXG4uc2lsYWJvLW1vcmFkbyAucHJpbmNpcGFsIC5jdWFkcmFkb19yb2pvIC5mbGVjaGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9jdXJzb1NlbGVjdC9mbGVjaGFNb3JhZGEucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg5NnB4KSB7XG4gICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbn1cblxuLmNhcmQgLm5vcm1hbC10ZXh0IHtcbiAgICBjb2xvcjogI2RjZWJlYztcbn1cblxuLmNhcmRfX2ZhY2UtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xufVxuXG5cbi8qZG9jZW50ZXMqL1xuXG4uZG9jZW50ZXMge1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kb2NlbnRlcyAuY2Fyb3VzZWwge1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuZG9jZW50ZXMgLmNhcm91c2VsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuZG9jZW50ZXMgLmNhcm91c2VsIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxODAwcHg7XG4gICAgfVxufVxuXG4uZG9jZW50ZXMgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLmRvY2VudGVzIC50aXRsZS10ZXh0IC50ZXh0IHtcbiAgICBjb2xvcjogIzI4MDA3MTtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmRvY2VudGVzIC50aXRsZS10ZXh0IC50aXRsZSB7XG4gICAgY29sb3I6ICNmOTQyM2E7XG4gICAgZm9udC1mYW1pbHk6IFRJRU1QTztcbn1cblxuLmRvY2VudGVzIC50ZXh0X2NvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuZG9jZW50ZXMgLnRleHRfY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmRvY2VudGVzIC50ZXh0X2NvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgfVxufVxuXG4uZG9jZW50ZXMgLmhlcm8tdGl0bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmRvY2VudGVzIC5pbWctZmx1aWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRvY2VudGVzIC5pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5kb2NlbnRlcyAuY3Vyc29zLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBUSUVNUE87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5kb2NlbnRlcyAuY3Vyc29zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5kb2NlbnRlcyAuY3Vyc29zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5kb2NlbnRlcyAuY3Vyc29zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICB9XG59XG5cbi5kb2NlbnRlcyAuY3Vyc29zLXRpdGxlLTIge1xuICAgIGNvbG9yOiAjZmI0MDMwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLmRvY2VudGVzIC5jYXJkLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZWM7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmRvY2VudGVzIC5jYXJkLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmRvY2VudGVzIC5jYXJkLXRleHQge1xuICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmRvY2VudGVzIC5jYXJkLXRleHQge1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgIH1cbn1cblxuLmRvY2VudGVzIC5jdXJzb3MtdGV4dCB7XG4gICAgY29sb3I6ICM0MzM5OGE7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZG9jZW50ZXMgLmN1cnNvcy10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB9XG59XG5cbi5kb2NlbnRlcyAuc3VidGl0bGUge1xuICAgIGNvbG9yOiAjZmI0MDMwO1xufVxuXG4uZG9jZW50ZXMgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLmRvY2VudGVzIC5jdXJzb3MtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlY2VjO1xuICAgIGNvbG9yOiAjNDMzOThhO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uZG9jZW50ZXMgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbi5kb2NlbnRlcyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICB6LWluZGV4OiAxNTtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZG9jZW50ZXMgLmNhcm91c2VsLWNvbnRyb2wtcHJldiAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXG4uZG9jZW50ZXMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kb2NlbnRlcyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbixcbi5kb2NlbnRlcyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRvY2VudGVzIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9yMi5wbmcpO1xufVxuXG4uZG9jZW50ZXMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL3IxLnBuZyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CursosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cursos',
                templateUrl: './cursos.component.html',
                styleUrls: ['./cursos.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_2__["IdemRelCursosModulosService"] }, { type: _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_3__["IdemCursosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/cursos/online/online.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/cursos/online/online.component.ts ***!
  \**************************************************************/
/*! exports provided: OnlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineComponent", function() { return OnlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/api/idemCursos.service */ "./src/services/api/idemCursos.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






class OnlineComponent {
    constructor(idemCursosService, config, dialog) {
        this.idemCursosService = idemCursosService;
        this.dialog = dialog;
        this.idemcursoList = [];
        this.index = 0;
    }
    ngOnInit() {
        this.cargarCursos();
    }
    cargarCursos() {
        this.idemCursosService.idemCursosGet().subscribe(data => {
            this.idemcursoList = data;
        });
    }
    getCursos(cantidad) {
        console.log('no entra');
        let arrayselect;
        if (cantidad > this.idemcursoList.length) {
            cantidad = this.idemcursoList.length;
        }
        if (this.index >= this.idemcursoList.length) {
            this.index = 0;
        }
        for (; this.index < cantidad; this.index++) {
            arrayselect.push(this.idemcursoList[this.index]);
        }
        console.log(arrayselect);
        return arrayselect;
    }
    openRegistro() {
        const dialogRef = this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
OnlineComponent.ɵfac = function OnlineComponent_Factory(t) { return new (t || OnlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_2__["IdemCursosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
OnlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineComponent, selectors: [["app-online"]], decls: 303, vars: 0, consts: [["id", "container app", 1, "nuxt"], [1, "HeroOnlineCourses", "p-0", "container-fluid", 2, "position", "relative"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "p-0", "slide", 2, "text-shadow", "rgb(51, 51, 51) 1px 1px 2px"], ["id", "carousel1___BV_inner_", "role", "list", 1, "carousel-inner"], ["role", "listitem", "aria-current", "true", "aria-posinset", "1", "aria-setsize", "1", "id", "__BVID__18", 1, "carousel-item", "active", 2, "height", "100vh"], [1, "carousel-caption"], [1, "row", "h-100"], [1, "screen1", "column", "h-100", "col-12", "col-md-8", "p-0", 2, "background-image", "url(../../../assets/css/images/CursosOnline/Fotos-IDEM--13.png)"], [1, "slideText", "d-flex", "flex-column", "justify-content-center", "h-100", "w-100", "px-0"], [1, "hero-title"], [1, "screen2", "column", "h-100", "col-0", "col-md-4", "p-0"], [1, "LogoBlanco"], ["href", "#", "role", "button", "aria-controls", "carousel1___BV_inner_", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#", "role", "button", "aria-controls", "carousel1___BV_inner_", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "carousel1___BV_indicators_", "aria-hidden", "true", "aria-label", "Select a slide to display", "aria-owns", "carousel1___BV_inner_", 1, "carousel-indicators", 2, "display", "none"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", 1, "active"], [1, "cursosOnlineCODesktop", "container-fluid", "d-flex", "flex-column", "justify-content-center", "inf", "px-2", "px-lg-5", 2, "height", "100vh"], [1, "d-flex", "justify-content-center", "py-0"], [1, "text_container"], [1, "title-text", "d-flex", "justify-content-between"], [1, "w-100", "d-flex", "justify-content-center", 2, "align-items", "center"], [1, "btn", "btn-outline-danger", "agregar-btn-selected"], [1, "btn", "btn-outline-danger", "agregar-btn"], [1, "d-flex", "w-100", "justify-content-center"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "carousel", "slide"], ["role", "listitem", "aria-current", "true", "aria-posinset", "1", "aria-setsize", "1", "id", "__BVID__21", 1, "carousel-item", "active", 2, "height", "80vh"], [1, "container", "d-flex", "justify-content-center", "w-100", "h-100", "px-0"], [1, "card-container", "px-0", "w-100", "h-100", "m-0"], [1, "card-wrapper", "d-flex", "justify-content-center", "col-6", "px-2", "py-2"], [1, "card"], [1, "image"], [1, "subtitle", "px-4", "py-1", "d-flex", "justify-content-center", 2, "position", "absolute", "left", "0px", "bottom", "0px"], [1, "card-text"], [1, "title-wrapper", "d-flex", "justify-content-start"], [1, "text-left", "cursos-title", "px-0"], [1, "text-wrapper"], [1, "small-text", "text-left", "pt-0", "pl-lg-1"], ["href", "/curso/7"], [1, "flecha"], ["id", "ourTeachers", 1, "nuestros_profesoresDesktop", "container-fluid", "d-flex", "flex-column", "justify-content-center", "pt-4", "pb-5"], [1, "carousel-wrapper", "w-100", "d-flex", "flex-column", "justify-content-center", "px-0", "h-100"], ["role", "listitem", "aria-current", "true", "aria-posinset", "1", "aria-setsize", "2", "id", "__BVID__24", "aria-hidden", "false", 1, "carousel-item", "firstRowSlide", "active"], [1, "firstRow"], [1, "big-card", "d-flex", "h-100"], [1, "ci1", "w-50"], [1, "w-100", "d-flex", "justify-content-start"], [1, "card-text", "w-50", "d-flex", "flex-column", "justify-content-center"], [1, "section-title"], [1, "normal-text"], ["role", "listitem", "aria-current", "false", "aria-posinset", "2", "aria-setsize", "2", "id", "__BVID__25", "aria-hidden", "true", 1, "carousel-item", "firstRowSlide"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__24", 1, "active"], ["role", "button", "id", "carousel1___BV_indicator_2_", "tabindex", "-1", "aria-current", "false", "aria-label", "Goto Slide 2", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__25", 1, ""], [1, "docents-wrapper", "w-100", "d-flex", "flex-column", "justify-content-center", "px-0", "h-100"], [1, "dualDocentWrapper", "px-0", "w-75", "m-0", "py-2", "d-flex"], [1, "card-wrapper", "d-flex", "col-6", "px-1", "pr-2", "py-0", "d-flex"], [1, "carD"], [1, "ci2", "w-50", "h-100"], [1, "card-text", "w-50", "h-100"], [1, "cursos-title", "text-left"], [1, "small-text", "subtitle"], [1, "small-text"], [1, "card-wrapper", "d-flex", "col-6", "px-1", "pl-2", "py-0"], [1, "carD", "d-flex", "justify-content-start", "pt-0", "text-center"], [1, "ci3", "w-50", "h-100"], [1, "dualDocentWrapper", "px-0", "w-75", "p-0", "m-0", "m-0", "py-2", "d-flex"], [1, "card-wrapper", "d-flex", "col-6", "px-1", "pr-2", "py-0"], [1, "ci4", "w-50", "h-100"], [1, "ci5", "w-50", "h-100"], [1, "beneficiosOnlineCourses", "container-fluid", "w-100"], [1, "row"], [1, "columna1", "column", "col-4", "col-lg-4", "d-flex", "justify-content-end"], [1, "text-wrapper", "h-100", "d-flex", "flex-column", "justify-content-center", "p-lg-4"], [1, "section-title", "title"], [1, "p", "normal-text"], [1, "columna2", "column", "col-8", "col-lg-8"], [1, "row", "icons-wrapper", "d-flex", "justify-content-center", "flex-column", "h-100", "col-10", "col-lg-8"], [1, "w-100", "d-flex"], [1, "column", "col-3", "d-flex", "flex-column", "justify-content-start"], [1, "d-flex", "justify-content-center", "pb-2", "p-lg-2"], [1, "icon1", 2, "background-image", "url(../../../assets/css/images/beneficios/1.png)"], [1, "icon-text", "text-center", "small-text"], [1, "icon1", 2, "background-image", "url(../../../assets/css/images/beneficios/2.png)"], [1, "icon1", 2, "background-image", "url(../../../assets/css/images/beneficios/3.png)"], [1, "icon1", 2, "background-image", "url(../../../assets/css/images/beneficios/4.png)"], [1, "container-fluid", "como_funciona", "p-0", 2, "height", "100vh", "width", "100%"], [1, "row", "h-100", "w-100", "m-0"], [1, "column", "dos", "h-100", "col-3", "p-0"], [1, "screen2", "h-100", "b-100"], [1, "white-container", "d-flex", "flex-column", "justify-content-center", "px-4"], [1, "column", "uno", "h-100", "col-9", "p-0", 2, "padding-right", "250px"], [1, "container", "p-5", "screen1", "d-flex", "flex-column", "h-100", "p-0", "d-flex", "justify-content-end"], [1, "w-100", "h-100", "d-flex", "justify-content-center", "px-5", "ml-5"], ["id", "style-2", 1, "overflow", "d-flex", "flex-column", "justify-content-end", "h-100", "px-0"], [1, "h-75", 2, "display", "flex"], [1, "card", "d-flex", "justify-content-center", "w-100", "flex-row", 2, "background-color", "rgb(220, 235, 236)", "border", "rgb(220, 235, 236)", "min-width", "50%", "height", "100%"], [1, "arrow"], [1, "w-100", "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "h-100", "flex-column"], [1, "w-100", "d-flex", "justify-content-center", "p-4"], [1, "image", "w-100"], [1, "text-container", "px-2", "d-flex", "w-100", "py-4"], ["href", "/nosotros"], [1, "image2", "w-100"], ["href", "/pasarela"], [1, "image3", "w-100"], ["href", "mailto:donaciones@idem.org.pe"], [1, "indicator-container", "d-flex", "w-100", "px-5", "py-3", "justify-content-center"], [1, "switch", 2, "max-width", "625px"], ["type", "checkbox"], [1, "slider", "round"], [1, "container-fluid", "online_testimonials", "p-0"], ["href", "https://fonts.googleapis.com/css?family=Merriweather", "rel", "stylesheet"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "p-0", "m-0", "slide", 2, "text-shadow", "rgb(51, 51, 51) 1px 1px 2px"], ["role", "listitem", "aria-current", "true", "aria-posinset", "1", "aria-setsize", "2", "id", "__BVID__30", "aria-hidden", "false", 1, "carousel-item", "active", 2, "height", "100vh"], [1, "d-flex", "m-0", "p-0", "h-100", "w-100"], [1, "column", "h-100", "col-3", "p-0"], [1, "screen1", "h-100", "b-100"], [1, "white_container"], [1, "column", "uno", "h-100", "col-9", "p-0"], [1, "container", "screen2", "d-flex", "justify-content-center", "h-100", "d-flex", "justify-content-start"], [1, "d-flex", "justify-content-center", "flex-column", 2, "z-index", "2"], [1, "text-container"], [1, "hero-title", "comillas"], [1, "normal-text", "nombre", "pt-2"], ["role", "listitem", "aria-current", "false", "aria-posinset", "2", "aria-setsize", "2", "id", "__BVID__31", "aria-hidden", "true", 1, "carousel-item", 2, "height", "100vh"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__30", 1, "active"], ["role", "button", "id", "carousel1___BV_indicator_2_", "tabindex", "-1", "aria-current", "false", "aria-label", "Goto Slide 2", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__31", 1, ""]], template: function OnlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Capacitate con los mejores profesores, sin horarios, sin l\u00EDmites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ol", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Todos los cursos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cursos de Negocios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cursos de Tecnol\u00F3gia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " NEGOCIOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Curso de derecho Concursal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " El curso de Derecho Concursal abordar\u00E1 en 6 m\u00F3dulos los siguientes temas: una aproximaci\u00F3n al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficaci\u00F3n de cr\u00E9ditos, junta de acreedores, administraci\u00F3n del r\u00E9gimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " NEGOCIOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Curso de derecho Concursal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " El curso de Derecho Concursal abordar\u00E1 en 6 m\u00F3dulos los siguientes temas: una aproximaci\u00F3n al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficaci\u00F3n de cr\u00E9ditos, junta de acreedores, administraci\u00F3n del r\u00E9gimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ol", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Nuestros Docentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Nuestros Docentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ol", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Lourdes Flores Nano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Abogada y pol\u00EDtica peruana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Esteban Chong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Contador y Exsocio Principal de Pwc Per\u00FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Mar\u00EDa Tereza Qui\u00F1onez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Abogada y socia del estudio Rodrigo,Elias & Medrano Abogados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Samuel Abad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Abogado y Socio del estudio Echecopar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h4", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Cada curso online o presencial esta aval\u00E1do oficialmente por Idem, adem\u00E1s formar\u00E1s parte de una comunidad donde el dinero obtenido estar\u00E1 100% destinados a proyectos educativos para las personas con menos recursos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Aprenderas a tu propio ritmo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Los mejores profecionales te ense\u00F1ar\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Obtendr\u00E1s un certificado oficial.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Formar\u00E1s parte de una comunidad que genera el cambio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u00BFC\u00F3mo funciona?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Sigue estos tres sencillos pasos para hacer tu donaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "1er paso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Encuentra m\u00E1s informaci\u00F3n sobre el trabajo de Idem en el siguiente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "2do paso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Inscr\u00EDbete en el siguiente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " con tu tarjeta de cr\u00E9dito o d\u00E9bito para efectuar tu donaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "3er paso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Recibe un correo de confirmaci\u00F3n de tu donaci\u00F3n. Si Tienes alguna duda o consulta sobre el proceso de donaci\u00F3n escr\u00EDbenos a: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "donaciones@idem.org.pe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "link", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h4", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Testimonios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Hemos capacitado a miles de profesionales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Pude culminar mis estudios sin tener que viajar\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "-Jorge Castro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h4", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Testimonios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Hemos capacitado a miles de profesionales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Me alegr\u00F3 saber que al capacitarme, personas con menores recursos obtendr\u00EDan beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "-Christian Paredes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "ol", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "li", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "li", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n    font-family: FABRIKBOLD;\n    src: url('FABRIK-BOLD_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: FABRIK;\n    src: url('FABRIK-REGULAR_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: TIEMPO;\n    src: url('TIEMPOSHEADLINE-BLACK.OTF') format(\"opentype\");\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: inherit;\n    text-decoration: none;\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n    width: 700px;\n    padding-bottom: 25px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        width: 900px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        width: 1050px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        width: 1200px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        width: 1400px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n    width: 700px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        width: 900px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        width: 1050px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        width: 1250px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        width: 1450px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n        max-width: 1250px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n        max-width: 1450px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n    max-width: 700px;\n    display: flex;\n    justify-content: center;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n        max-width: 900px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n        max-width: 1050px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n        max-width: 1200px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n        max-width: 1400px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n    max-width: 325px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        max-width: 420px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        max-width: 470px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        max-width: 580px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        max-width: 690px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    max-width: 320px;\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        max-width: 400px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        max-width: 450px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        max-width: 580px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        max-width: 690px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    background-image: url('Fotos-IDEM--15.png');\n    position: relative;\n    height: 60%;\n    width: 100%;\n    background-size: cover;\n    background-position: center;\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    color: #280071;\n    font-family: FABRIK;\n    background-color: #dcebec;\n    font-size: 10px;\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n        font-size: 14px;\n        line-height: 18px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n        font-size: 18px;\n        line-height: 22px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    background-color: #dcebec;\n    height: 40%;\n    width: 100%;\n    font-family: FABRIK;\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n    min-width: 120px;\n    align-items: start;\n    height: 60%;\n    padding-left: 25px;\n    padding-right: 5px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n        min-width: 140px;\n        height: 50%;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n        min-width: 180px;\n        height: 50%;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n        min-width: 200px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n        min-width: 240px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n    color: #fb4030;\n    font-size: 14px;\n    line-height: 15px;\n    text-shadow: none;\n    font-family: TIEMPO;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 18px;\n        line-height: 22px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 22px;\n        line-height: 26px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    position: relative;\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n    background-image: url('flechaRoja.png');\n    background-size: cover;\n    position: absolute;\n    right: 20px;\n    bottom: -10px;\n    height: 14px;\n    width: 24px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n        right: 20px;\n        bottom: -20px;\n        height: 16px;\n        width: 28px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n        right: 20px;\n        bottom: -30px;\n        height: 16px;\n        width: 28px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n        right: 20px;\n        bottom: -40px;\n        height: 22px;\n        width: 36px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n        right: 20px;\n        bottom: -40px;\n        height: 22px;\n        width: 36px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .cursos-button[_ngcontent-%COMP%] {\n    background-color: #dcecec;\n    color: #43398a;\n    font-size: 13px;\n    letter-spacing: 3px;\n    text-shadow: none;\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    top: 50%;\n    height: 20px;\n    width: 20px;\n    opacity: 1;\n    background-size: cover;\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%], .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%], .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        height: 30px;\n        width: 30px;\n    }\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    background-image: url('r2.png');\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    background-image: url('r1.png');\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .agregar-btn-selected[_ngcontent-%COMP%] {\n    max-height: 40px;\n    font-size: 14px;\n    border-color: #f94139;\n    font-family: FABRIK;\n    background-color: transparent;\n    border-radius: 0;\n}\n\n.cursosOnlineCODesktop[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n    max-height: 40px;\n    border-color: transparent;\n    font-size: 14px;\n    font-family: FABRIK;\n    background-color: transparent;\n    border-radius: 0;\n    color: #280071;\n    min-width: 100px;\n}\n\n\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    text-shadow: none;\n    background-color: #dcebec;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n    width: 75%;\n    padding: 0;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 15%;\n    bottom: 0px;\n    left: 0%;\n    width: 100%;\n    z-index: 10;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: #fff;\n    height: 220px;\n    text-align: center;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n        height: 260px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%] {\n    height: 220px;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%] {\n        height: 260px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%] {\n    min-height: 200px;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%] {\n        min-height: 240px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%] {\n        min-height: 360px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%] {\n        min-height: 430px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    padding: 15px;\n    background-color: white;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 35px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 45px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 55px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .firstRowSlide[_ngcontent-%COMP%]   .firstRow[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    color: #fb4030;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%] {\n    align-items: center;\n    min-height: 220px;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%] {\n        height: 260px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%] {\n    align-items: center;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%] {\n    height: 220px;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%] {\n        height: 260px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 220px;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        height: 260px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%] {\n    min-height: 200px;\n    display: flex;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%] {\n        height: 240px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%] {\n        height: 360px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%] {\n        height: 430px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    justify-content: center;\n    padding: 12px;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 15px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 25px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 45px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    color: #fb4030;\n    padding-bottom: 5px;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .docents-wrapper[_ngcontent-%COMP%]   .dualDocentWrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .carD[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .small-text[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .ci1[_ngcontent-%COMP%] {\n    background-image: url('Fotos-IDEM--20.png');\n    background-size: cover;\n    background-position: right;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .ci2[_ngcontent-%COMP%] {\n    background-image: url('1.png');\n    background-size: cover;\n    background-position: center;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .ci3[_ngcontent-%COMP%] {\n    background-image: url('2.png');\n    background-size: cover;\n    background-position: center;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .ci4[_ngcontent-%COMP%] {\n    background-image: url('3.png');\n    background-size: cover;\n    background-position: center;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .ci5[_ngcontent-%COMP%] {\n    background-image: url('5.png');\n    background-size: cover;\n    background-position: center;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n    color: #fb4030;\n    font-size: 13px;\n    padding-right: 15%;\n    line-height: 15px;\n    text-shadow: none;\n    font-family: TIEMPO;\n}\n\n@media screen and (min-width: 1024px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 20px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 24px;\n        line-height: 28px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 32px;\n        line-height: 36px;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    left: 40%;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    left: 45%;\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 1500;\n    background-color: #280071;\n    opacity: 10;\n    max-height: 15%;\n    top: 85%;\n    max-width: 5%;\n}\n\n@media screen and (min-width: 1440px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        top: 80%;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        top: 81%;\n    }\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n    background-image: url('back.png');\n}\n\n.nuestros_profesoresDesktop[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n    background-image: url('front.png');\n}\n\n.HeroOnlineCourses[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.HeroOnlineCourses[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    background-size: cover;\n}\n\n.HeroOnlineCourses[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .slideText[_ngcontent-%COMP%] {\n    margin-left: 80%;\n    max-width: 250px;\n}\n\n@media screen and (min-width: 1024px) {\n    .HeroOnlineCourses[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .slideText[_ngcontent-%COMP%] {\n        margin-left: 80%;\n        max-width: 350px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .HeroOnlineCourses[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .slideText[_ngcontent-%COMP%] {\n        margin-left: 80%;\n        max-width: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .HeroOnlineCourses[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .slideText[_ngcontent-%COMP%] {\n        margin-left: 80%;\n        max-width: 540px;\n    }\n}\n\n.HeroOnlineCourses[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-color: #dcebec;\n}\n\n.HeroOnlineCourses[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .LogoBlanco[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    background-image: url('LogoBlanco.png');\n    height: 120px;\n    width: 100px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 769px) {\n    .HeroOnlineCourses[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .LogoBlanco[_ngcontent-%COMP%] {\n        height: 185px;\n        width: 169px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .HeroOnlineCourses[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .LogoBlanco[_ngcontent-%COMP%] {\n        height: 285px;\n        width: 269px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .HeroOnlineCourses[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .LogoBlanco[_ngcontent-%COMP%] {\n        height: 350px;\n        width: 350px;\n    }\n}\n\n.hero-title[_ngcontent-%COMP%] {\n    font-weight: normal;\n    -webkit-text-decoration: underline #280071;\n            text-decoration: underline #280071;\n    text-align: left;\n    font-size: 40px;\n    line-height: 46px;\n    font-weight: 100;\n    z-index: 35;\n    font-family: TIEMPO;\n    text-shadow: none;\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%] {\n    height: 225px;\n    background-color: #f9423a;\n    font-family: 'Merriweather', serif;\n    font-size: 12px;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna1[_ngcontent-%COMP%] {\n    height: 225px;\n    background-color: white;\n    color: #280071;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna1[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna1[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna1[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna2[_ngcontent-%COMP%] {\n    color: #280071;\n    font-size: 10px;\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 12px;\n}\n\n@media screen and (min-width: 1232px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n        width: 80%;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n        height: 80px;\n        width: 80px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n        height: 80px;\n        width: 80px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n        height: 80px;\n        width: 80px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n        height: 80px;\n        width: 80px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon-text[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%] {\n    height: 225px;\n    background-color: #f9423a;\n    font-family: 'Merriweather', serif;\n    font-size: 12px;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna1[_ngcontent-%COMP%] {\n    height: 225px;\n    background-color: white;\n    color: #280071;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna1[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna1[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna1[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .columna2[_ngcontent-%COMP%] {\n    color: #280071;\n    font-size: 10px;\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 12px;\n}\n\n@media screen and (min-width: 1232px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n        width: 80%;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n        height: 80px;\n        width: 80px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n        height: 80px;\n        width: 80px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n        height: 80px;\n        width: 80px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n        height: 80px;\n        width: 80px;\n    }\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.beneficiosOnlineCourses[_ngcontent-%COMP%]   .icon-text[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.section-title[_ngcontent-%COMP%] {\n    color: #280071;\n    text-align: left;\n    font-size: 21px;\n    z-index: 35;\n    font-family: TIEMPO;\n    text-shadow: none;\n}\n\n@media screen and (min-width: 769px) {\n    .section-title[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n}\n\n@media screen and (min-width: 896px) {\n    .section-title[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .section-title[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .section-title[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .section-title[_ngcontent-%COMP%] {\n        font-size: 35px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .section-title[_ngcontent-%COMP%] {\n        font-size: 45px;\n    }\n}\n\n.como_funciona[_ngcontent-%COMP%] {\n    \n    \n    \n    \n}\n\n.como_funciona[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    text-shadow: none;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-color: #dcebec;\n    background-size: cover;\n    max-width: 5000px;\n    font-size: 30px;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    opacity: 1;\n    color: #f8433c;\n    text-align: left;\n    font-size: 35px;\n    font-weight: 100;\n    z-index: 3;\n    text-shadow: none;\n    -webkit-text-decoration: underline #f8433c;\n            text-decoration: underline #f8433c;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-color: #280071;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 32%;\n    left: 30%;\n    min-width: 260px;\n    height: 150px;\n    background-color: white;\n    z-index: 3;\n}\n\n@media screen and (min-width: 1024px) {\n    .como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n        min-width: 320px;\n        height: 190px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n        min-width: 360px;\n        height: 210px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n        min-width: 400px;\n        height: 260px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n        min-width: 500px;\n        height: 360px;\n    }\n}\n\n.como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    line-height: 30px;\n    margin-bottom: 5px;\n}\n\n@media screen and (min-width: 1024px) {\n    .como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n        line-height: 40px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n        line-height: 45px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n        line-height: 55px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .como_funciona[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n        line-height: 65px;\n    }\n}\n\n.como_funciona[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    top: 93%;\n    background-color: #f8433c;\n    height: 7%;\n    max-width: 5%;\n    opacity: 1;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    left: 33%;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    right: 57%;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    width: 400px;\n    display: flex;\n    justify-content: end;\n}\n\n@media screen and (min-width: 896px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%] {\n        width: 500px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%] {\n        width: 500px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%] {\n        width: 600px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%] {\n        width: 700px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%] {\n        width: 800px;\n    }\n}\n\n.como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    background-image: url('r3.png');\n    background-size: cover;\n    top: calc(50% - 10px);\n    right: 0px;\n    height: 15px;\n    width: 15px;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    background: url('grupo.png') no-repeat;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    min-height: 100px;\n    min-width: 100px;\n}\n\n@media screen and (min-width: 896px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n        min-height: 100px;\n        min-width: 100px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n        min-height: 150px;\n        min-width: 150px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n        min-height: 180px;\n        min-width: 180px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n        min-height: 220px;\n        min-width: 220px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n        min-height: 270px;\n        min-width: 270px;\n    }\n}\n\n.como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%] {\n    background: url('mano.png') no-repeat;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    background: url('check.png') no-repeat;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n    color: #fb4030;\n    min-width: 60px;\n}\n\n@media screen and (min-width: 896px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n        min-width: 60px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n        min-width: 80px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n        min-width: 80px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .como_funciona[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n        min-width: 100px;\n    }\n}\n\n.como_funciona[_ngcontent-%COMP%]   .indicator-container[_ngcontent-%COMP%] {\n    max-width: 5000px;\n    min-width: 500px;\n}\n\n.como_funciona[_ngcontent-%COMP%]   #style-2[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    background-color: #f5f5f5;\n}\n\n.como_funciona[_ngcontent-%COMP%]   #style-2[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 7px;\n    background-color: #f5f5f5;\n}\n\n.como_funciona[_ngcontent-%COMP%]   #style-2[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\n    background-color: #280071;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: calc(60px + 240px);\n    height: calc(10px + 0px);\n}\n\n.como_funciona[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: white;\n    transition: 0.4s;\n}\n\n.como_funciona[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n    position: absolute;\n    content: \"\";\n    height: 3px;\n    width: 50%;\n    left: 4px;\n    bottom: 4px;\n    background-color: #280071;\n    transition: 0.4s;\n}\n\n.como_funciona[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.como_funciona[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%] {\n    box-shadow: 0 0 1px white;\n}\n\n.como_funciona[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before {\n    transform: translateX(95%);\n}\n\n.como_funciona[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%] {\n    border-radius: 34px;\n}\n\n\n\n.online_testimonials[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    font-family: \"Merriweather\", serif;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    text-shadow: none;\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-image: url('testimonio_1_bg.png');\n    background-size: cover;\n    max-width: 5000px;\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n    padding: 0px 50px 0px 30%;\n}\n\n@media screen and (min-width: 1232px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n        padding: 0px 20% 0px 25%;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n        padding: 0px 25% 0px 25%;\n    }\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .comillas[_ngcontent-%COMP%] {\n    font-size: 155px;\n    text-align: left;\n    margin: 0px;\n    text-decoration: none;\n}\n\n@media screen and (min-width: 1024px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .comillas[_ngcontent-%COMP%] {\n        font-size: 155px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .comillas[_ngcontent-%COMP%] {\n        font-size: 80px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .comillas[_ngcontent-%COMP%] {\n        font-size: 100px;\n    }\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%] {\n    font-family: FABRIK;\n    text-align: left;\n    color: #fb4030;\n    text-decoration: none;\n}\n\n@media screen and (min-width: 768px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%] {\n        font-size: 15px;\n        line-height: 17px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%] {\n        font-size: 18px;\n        line-height: 20px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 22px;\n    }\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .screen-filter[_ngcontent-%COMP%] {\n    background-color: rgba(127, 205, 199, 0.7);\n    position: absolute;\n    top: 0;\n    z-index: 1;\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-color: #dcebec;\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .white_container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: calc(50% - 75px);\n    left: calc(100% - 105px);\n    min-width: 250px;\n    min-height: 160px;\n    z-index: 8;\n    background-color: white;\n    padding: 25px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n@media screen and (min-width: 1024px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .white_container[_ngcontent-%COMP%] {\n        min-width: 300px;\n        min-height: 200px;\n        left: calc(100% - 135px);\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .white_container[_ngcontent-%COMP%] {\n        top: calc(50% - 125px);\n        min-width: 350px;\n        min-height: 250px;\n        left: calc(100% - 135px);\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .online_testimonials[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .white_container[_ngcontent-%COMP%] {\n        top: calc(50% - 150px);\n        min-width: 450px;\n        min-height: 300px;\n        left: calc(100% - 135px);\n    }\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .online_testimonials[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 50000;\n    top: calc(50% + 85px);\n    opacity: 1;\n    height: 7%;\n    width: 40px;\n    background-color: #280071;\n}\n\n@media screen and (min-width: 1024px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .online_testimonials[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        top: calc(50% + 125px);\n        min-width: 50px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .online_testimonials[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        top: calc(50% + 125px);\n        min-width: 62px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .online_testimonials[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        top: calc(50% + 150px);\n        min-width: 90px;\n    }\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    left: calc(30% + 20px);\n}\n\n@media screen and (min-width: 1024px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n        left: calc(25% + 65px);\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n        left: calc(25% + 94px);\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n        left: calc(25% + 135px);\n    }\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    left: calc(30% + 60px);\n}\n\n@media screen and (min-width: 1024px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        left: calc(25% + 115px);\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        left: calc(25% + 155px);\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .online_testimonials[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        left: calc(25% + 225px);\n    }\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n    background-image: url('back.png');\n}\n\n.online_testimonials[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n    background-image: url('front.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJzb3Mvb25saW5lL29ubGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdEQUFrRjtBQUN0Rjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtREFBcUY7QUFDekY7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0RBQTBGO0FBQzlGOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxnQkFB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QUFpQjtRQUNqQix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTs7UUFFSSxzQkFBc0I7UUFDdEIsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7O1FBRUksc0JBQXNCO1FBQ3RCLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJOztRQUVJLHNCQUFzQjtRQUN0QixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBK0Q7QUFDbkU7O0FBRUE7SUFDSSxrQ0FBZ0U7QUFDcEUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1cnNvcy9vbmxpbmUvb25saW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogRkFCUklLQk9MRDtcbiAgICBzcmM6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9mb250cy9GQUJSSUstQk9MRF8wLk9URikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvZm9udHMvRkFCUklLLVJFR1VMQVJfMC5PVEYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xuICAgIHNyYzogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2ZvbnRzL1RJRU1QT1NIRUFETElORS1CTEFDSy5PVEYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmN1cnNvc09ubGluZUNPRGVza3RvcCAudGV4dF9jb250YWluZXIge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAudGV4dF9jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC50ZXh0X2NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC50ZXh0X2NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC50ZXh0X2NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxNDAwcHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCB7XG4gICAgd2lkdGg6IDcwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCB7XG4gICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIHtcbiAgICAgICAgd2lkdGg6IDEwNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIHtcbiAgICAgICAgd2lkdGg6IDEyNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIHtcbiAgICAgICAgd2lkdGg6IDE0NTBweDtcbiAgICB9XG59XG5cbi5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICAgIG1heC13aWR0aDogMTQ1MHB4O1xuICAgIH1cbn1cblxuLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiAzMjVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDQ3MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDU4MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDY5MHB4O1xuICAgIH1cbn1cblxuLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQge1xuICAgIG1heC13aWR0aDogMzIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2OTBweDtcbiAgICB9XG59XG5cbi5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL0hvbWUvRm90b3MtSURFTS0tMTUucG5nKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5pbWFnZSAuc3VidGl0bGUge1xuICAgIGNvbG9yOiAjMjgwMDcxO1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZWJlYztcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5pbWFnZSAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmltYWdlIC5zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZWJlYztcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50aXRsZS13cmFwcGVyIHtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50aXRsZS13cmFwcGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50aXRsZS13cmFwcGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50aXRsZS13cmFwcGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkLXRleHQgLnRpdGxlLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDI0MHB4O1xuICAgIH1cbn1cblxuLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGl0bGUtd3JhcHBlciAuY3Vyc29zLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFRJRU1QTztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGl0bGUtd3JhcHBlciAuY3Vyc29zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkLXRleHQgLnRpdGxlLXdyYXBwZXIgLmN1cnNvcy10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50aXRsZS13cmFwcGVyIC5jdXJzb3MtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIH1cbn1cblxuLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGV4dC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGV4dC13cmFwcGVyIC5mbGVjaGEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9jdXJzb1NlbGVjdC9mbGVjaGFSb2phLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkLXRleHQgLnRleHQtd3JhcHBlciAuZmxlY2hhIHtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50ZXh0LXdyYXBwZXIgLmZsZWNoYSB7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICBib3R0b206IC0zMHB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGV4dC13cmFwcGVyIC5mbGVjaGEge1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAtNDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkLXRleHQgLnRleHQtd3JhcHBlciAuZmxlY2hhIHtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogLTQwcHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jdXJzb3MtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlY2VjO1xuICAgIGNvbG9yOiAjNDMzOThhO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHotaW5kZXg6IDE1O1xuICAgIHRvcDogNTAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsLWNvbnRyb2wtcHJldiAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLW5leHQgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLXByZXYgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLFxuLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc09ubGluZUNPRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuICAgIC5jdXJzb3NPbmxpbmVDT0Rlc2t0b3AgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9yMi5wbmcpO1xufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9yMS5wbmcpO1xufVxuXG4uY3Vyc29zT25saW5lQ09EZXNrdG9wIC5hZ3JlZ2FyLWJ0bi1zZWxlY3RlZCB7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjk0MTM5O1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmN1cnNvc09ubGluZUNPRGVza3RvcCAuYWdyZWdhci1idG4ge1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IEZBQlJJSztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiAjMjgwMDcxO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59XG5cblxuLypURUFDSEVSUyovXG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCB7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmVjO1xufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmNhcm91c2VsIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTUlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAyNjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmZpcnN0Um93U2xpZGUge1xuICAgIGhlaWdodDogMjIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZmlyc3RSb3dTbGlkZSB7XG4gICAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmZpcnN0Um93U2xpZGUge1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5maXJzdFJvd1NsaWRlIHtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZmlyc3RSb3dTbGlkZSAuZmlyc3RSb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5maXJzdFJvd1NsaWRlIC5maXJzdFJvdyAuYmlnLWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmZpcnN0Um93U2xpZGUgLmZpcnN0Um93IC5iaWctY2FyZCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5maXJzdFJvd1NsaWRlIC5maXJzdFJvdyAuYmlnLWNhcmQge1xuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZmlyc3RSb3dTbGlkZSAuZmlyc3RSb3cgLmJpZy1jYXJkIHtcbiAgICAgICAgbWluLWhlaWdodDogNDMwcHg7XG4gICAgfVxufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmZpcnN0Um93U2xpZGUgLmZpcnN0Um93IC5iaWctY2FyZCAuY2FyZC10ZXh0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmZpcnN0Um93U2xpZGUgLmZpcnN0Um93IC5iaWctY2FyZCAuY2FyZC10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMzVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZmlyc3RSb3dTbGlkZSAuZmlyc3RSb3cgLmJpZy1jYXJkIC5jYXJkLXRleHQge1xuICAgICAgICBwYWRkaW5nOiA0NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5maXJzdFJvd1NsaWRlIC5maXJzdFJvdyAuYmlnLWNhcmQgLmNhcmQtdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDU1cHg7XG4gICAgfVxufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmZpcnN0Um93U2xpZGUgLmZpcnN0Um93IC5iaWctY2FyZCAuY2FyZC10ZXh0IC5zZWN0aW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbn1cblxuLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jYXJvdXNlbC13cmFwcGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmNhcm91c2VsLXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jYXJvdXNlbC13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2Fyb3VzZWwtd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmRvY2VudHMtd3JhcHBlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5kb2NlbnRzLXdyYXBwZXIgLmR1YWxEb2NlbnRXcmFwcGVyIHtcbiAgICBoZWlnaHQ6IDIyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmRvY2VudHMtd3JhcHBlciAuZHVhbERvY2VudFdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5kb2NlbnRzLXdyYXBwZXIgLmR1YWxEb2NlbnRXcmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZG9jZW50cy13cmFwcGVyIC5kdWFsRG9jZW50V3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmRvY2VudHMtd3JhcHBlciAuZHVhbERvY2VudFdyYXBwZXIgLmNhcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMjIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZG9jZW50cy13cmFwcGVyIC5kdWFsRG9jZW50V3JhcHBlciAuY2FyZC13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiAyNjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZG9jZW50cy13cmFwcGVyIC5kdWFsRG9jZW50V3JhcHBlciAuY2FyZC13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZG9jZW50cy13cmFwcGVyIC5kdWFsRG9jZW50V3JhcHBlciAuY2FyZC13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZG9jZW50cy13cmFwcGVyIC5kdWFsRG9jZW50V3JhcHBlciAuY2FyZC13cmFwcGVyIC5jYXJEIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmRvY2VudHMtd3JhcHBlciAuZHVhbERvY2VudFdyYXBwZXIgLmNhcmQtd3JhcHBlciAuY2FyRCB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmRvY2VudHMtd3JhcHBlciAuZHVhbERvY2VudFdyYXBwZXIgLmNhcmQtd3JhcHBlciAuY2FyRCB7XG4gICAgICAgIGhlaWdodDogMzYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmRvY2VudHMtd3JhcHBlciAuZHVhbERvY2VudFdyYXBwZXIgLmNhcmQtd3JhcHBlciAuY2FyRCB7XG4gICAgICAgIGhlaWdodDogNDMwcHg7XG4gICAgfVxufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmRvY2VudHMtd3JhcHBlciAuZHVhbERvY2VudFdyYXBwZXIgLmNhcmQtd3JhcHBlciAuY2FyRCAuY2FyZC10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5kb2NlbnRzLXdyYXBwZXIgLmR1YWxEb2NlbnRXcmFwcGVyIC5jYXJkLXdyYXBwZXIgLmNhckQgLmNhcmQtdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmRvY2VudHMtd3JhcHBlciAuZHVhbERvY2VudFdyYXBwZXIgLmNhcmQtd3JhcHBlciAuY2FyRCAuY2FyZC10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZG9jZW50cy13cmFwcGVyIC5kdWFsRG9jZW50V3JhcHBlciAuY2FyZC13cmFwcGVyIC5jYXJEIC5jYXJkLXRleHQge1xuICAgICAgICBwYWRkaW5nOiA0NXB4O1xuICAgIH1cbn1cblxuLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5kb2NlbnRzLXdyYXBwZXIgLmR1YWxEb2NlbnRXcmFwcGVyIC5jYXJkLXdyYXBwZXIgLmNhckQgLmNhcmQtdGV4dCAuc3VidGl0bGUge1xuICAgIGNvbG9yOiAjZmI0MDMwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuZG9jZW50cy13cmFwcGVyIC5kdWFsRG9jZW50V3JhcHBlciAuY2FyZC13cmFwcGVyIC5jYXJEIC5jYXJkLXRleHQgLnNtYWxsLXRleHQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2kxIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvQ3Vyc29zT25saW5lL0ZvdG9zLUlERU0tLTIwLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbn1cblxuLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jaTIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9kb2NlbnRlcy8xLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2kzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvZG9jZW50ZXMvMi5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmNpNCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2RvY2VudGVzLzMucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jaTUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9kb2NlbnRlcy81LnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY3Vyc29zLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBUSUVNUE87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY3Vyc29zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY3Vyc29zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY3Vyc29zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICB9XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICBsZWZ0OiA0MCU7XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICBsZWZ0OiA0NSU7XG59XG5cbi5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHotaW5kZXg6IDE1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MDA3MTtcbiAgICBvcGFjaXR5OiAxMDtcbiAgICBtYXgtaGVpZ2h0OiAxNSU7XG4gICAgdG9wOiA4NSU7XG4gICAgbWF4LXdpZHRoOiA1JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4gICAgLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgICAgICB0b3A6IDgwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuICAgIC5udWVzdHJvc19wcm9mZXNvcmVzRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICAgICAgdG9wOiA4MSU7XG4gICAgfVxufVxuXG4ubnVlc3Ryb3NfcHJvZmVzb3Jlc0Rlc2t0b3AgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9iYWNrLnBuZ1wiKTtcbn1cblxuLm51ZXN0cm9zX3Byb2Zlc29yZXNEZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvZnJvbnQucG5nXCIpO1xufVxuXG4uSGVyb09ubGluZUNvdXJzZXMgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLkhlcm9PbmxpbmVDb3Vyc2VzIC5zY3JlZW4xIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uSGVyb09ubGluZUNvdXJzZXMgLnNjcmVlbjEgLnNsaWRlVGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuSGVyb09ubGluZUNvdXJzZXMgLnNjcmVlbjEgLnNsaWRlVGV4dCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuSGVyb09ubGluZUNvdXJzZXMgLnNjcmVlbjEgLnNsaWRlVGV4dCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuSGVyb09ubGluZUNvdXJzZXMgLnNjcmVlbjEgLnNsaWRlVGV4dCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgICAgIG1heC13aWR0aDogNTQwcHg7XG4gICAgfVxufVxuXG4uSGVyb09ubGluZUNvdXJzZXMgLnNjcmVlbjIge1xuICAgIHotaW5kZXg6IC00O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZWM7XG59XG5cbi5IZXJvT25saW5lQ291cnNlcyAuc2NyZWVuMiAuTG9nb0JsYW5jbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9Mb2dvQmxhbmNvLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIC5IZXJvT25saW5lQ291cnNlcyAuc2NyZWVuMiAuTG9nb0JsYW5jbyB7XG4gICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgIHdpZHRoOiAxNjlweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5IZXJvT25saW5lQ291cnNlcyAuc2NyZWVuMiAuTG9nb0JsYW5jbyB7XG4gICAgICAgIGhlaWdodDogMjg1cHg7XG4gICAgICAgIHdpZHRoOiAyNjlweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5IZXJvT25saW5lQ291cnNlcyAuc2NyZWVuMiAuTG9nb0JsYW5jbyB7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICB9XG59XG5cbi5oZXJvLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICMyODAwNzE7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB6LWluZGV4OiAzNTtcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uYmVuZWZpY2lvc09ubGluZUNvdXJzZXMge1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NDIzYTtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyB7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMge1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIH1cbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5jb2x1bW5hMSB7XG4gICAgaGVpZ2h0OiAyMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzI4MDA3MTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5jb2x1bW5hMSB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmNvbHVtbmExIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuY29sdW1uYTEge1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIH1cbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5jb2x1bW5hMiB7XG4gICAgY29sb3I6ICMyODAwNzE7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLnRleHQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLnRleHQtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufVxuXG4uYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24xIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uMSB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24xIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjEge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uMiB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjIge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uMiB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24yIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG59XG5cbi5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjMge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24zIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjMge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uMyB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxufVxuXG4uYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb240IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uNCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb240IHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjQge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC50aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24tdGV4dCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIHtcbiAgICBoZWlnaHQ6IDIyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTQyM2E7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMge1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIHtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG59XG5cbi5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuY29sdW1uYTEge1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMyODAwNzE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuY29sdW1uYTEge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5jb2x1bW5hMSB7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmNvbHVtbmExIHtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG59XG5cbi5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuY29sdW1uYTIge1xuICAgIGNvbG9yOiAjMjgwMDcxO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC50ZXh0LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC50ZXh0LXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uMSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjEge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uMSB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24xIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG59XG5cbi5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjIge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24yIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjIge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uMiB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxufVxuXG4uYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24zIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uMyB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb24zIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjMge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uNCB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5iZW5lZmljaW9zT25saW5lQ291cnNlcyAuaWNvbjQge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uNCB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuYmVuZWZpY2lvc09ubGluZUNvdXJzZXMgLmljb240IHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG59XG5cbi5iZW5lZmljaW9zT25saW5lQ291cnNlcyAudGl0bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJlbmVmaWNpb3NPbmxpbmVDb3Vyc2VzIC5pY29uLXRleHQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBjb2xvcjogIzI4MDA3MTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB6LWluZGV4OiAzNTtcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODk2cHgpIHtcbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgIH1cbn1cblxuLmNvbW9fZnVuY2lvbmEge1xuICAgIC8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4gICAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbiAgICAvKiBUaGUgc2xpZGVyICovXG4gICAgLyogUm91bmRlZCBzbGlkZXJzICovXG59XG5cbi5jb21vX2Z1bmNpb25hIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLmNvbW9fZnVuY2lvbmEgLnNjcmVlbjEge1xuICAgIHotaW5kZXg6IC00O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZWM7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXgtd2lkdGg6IDUwMDBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5jb21vX2Z1bmNpb25hIC5zY3JlZW4xIC50ZXh0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjZjg0MzNjO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgei1pbmRleDogMztcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZjg0MzNjO1xufVxuXG4uY29tb19mdW5jaW9uYSAuc2NyZWVuMiB7XG4gICAgei1pbmRleDogLTQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MDA3MTtcbn1cblxuLmNvbW9fZnVuY2lvbmEgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzIlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmNvbW9fZnVuY2lvbmEgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgIGhlaWdodDogMTkwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAzNjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jb21vX2Z1bmNpb25hIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIge1xuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmNvbW9fZnVuY2lvbmEgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgICAgIGhlaWdodDogMzYwcHg7XG4gICAgfVxufVxuXG4uY29tb19mdW5jaW9uYSAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5jb21vX2Z1bmNpb25hIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5jb21vX2Z1bmNpb25hIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jb21vX2Z1bmNpb25hIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jb21vX2Z1bmNpb25hIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBsaW5lLWhlaWdodDogNjVweDtcbiAgICB9XG59XG5cbi5jb21vX2Z1bmNpb25hIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY29tb19mdW5jaW9uYSAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICB6LWluZGV4OiAxNTtcbiAgICB0b3A6IDkzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg0MzNjO1xuICAgIGhlaWdodDogNyU7XG4gICAgbWF4LXdpZHRoOiA1JTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY29tb19mdW5jaW9uYSAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICBsZWZ0OiAzMyU7XG59XG5cbi5jb21vX2Z1bmNpb25hIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHJpZ2h0OiA1NyU7XG59XG5cbi5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODk2cHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cge1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cge1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cge1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cge1xuICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cge1xuICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgfVxufVxuXG4uY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLmFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL3IzLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG59XG5cbi5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UsXG4uY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLmltYWdlMixcbi5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvQ3Vyc29zX3ByZXNlbmNpYWxlc19zZWxlY3Rvcy9ncnVwby5wbmcpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODk2cHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLmltYWdlLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UyLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UzIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLmltYWdlLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UyLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UzIHtcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLmltYWdlLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UyLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UzIHtcbiAgICAgICAgbWluLWhlaWdodDogMTgwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLmltYWdlLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UyLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UzIHtcbiAgICAgICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLmltYWdlLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UyLFxuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UzIHtcbiAgICAgICAgbWluLWhlaWdodDogMjcwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjcwcHg7XG4gICAgfVxufVxuXG4uY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLmltYWdlMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL0N1cnNvc19wcmVzZW5jaWFsZXNfc2VsZWN0b3MvbWFuby5wbmcpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAuaW1hZ2UzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvQ3Vyc29zX3ByZXNlbmNpYWxlc19zZWxlY3Rvcy9jaGVjay5wbmcpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAudGV4dC1jb250YWluZXIgLm5vcm1hbC10ZXh0IHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg5NnB4KSB7XG4gICAgLmNvbW9fZnVuY2lvbmEgLm92ZXJmbG93IC5jYXJkIC50ZXh0LWNvbnRhaW5lciAubm9ybWFsLXRleHQge1xuICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY29tb19mdW5jaW9uYSAub3ZlcmZsb3cgLmNhcmQgLnRleHQtY29udGFpbmVyIC5ub3JtYWwtdGV4dCB7XG4gICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5jb21vX2Z1bmNpb25hIC5vdmVyZmxvdyAuY2FyZCAudGV4dC1jb250YWluZXIgLm5vcm1hbC10ZXh0IHtcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmNvbW9fZnVuY2lvbmEgLm92ZXJmbG93IC5jYXJkIC50ZXh0LWNvbnRhaW5lciAubm9ybWFsLXRleHQge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIH1cbn1cblxuLmNvbW9fZnVuY2lvbmEgLmluZGljYXRvci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwMHB4O1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi5jb21vX2Z1bmNpb25hICNzdHlsZS0yOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5jb21vX2Z1bmNpb25hICNzdHlsZS0yOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmNvbW9fZnVuY2lvbmEgI3N0eWxlLTI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwMDcxO1xufVxuXG4uY29tb19mdW5jaW9uYSAuc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBjYWxjKDYwcHggKyAyNDBweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwcHggKyAwcHgpO1xufVxuXG4uY29tb19mdW5jaW9uYSAuc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbn1cblxuLmNvbW9fZnVuY2lvbmEgLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5jb21vX2Z1bmNpb25hIC5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwMDcxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uY29tb19mdW5jaW9uYSBpbnB1dDpjaGVja2VkKy5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29tb19mdW5jaW9uYSBpbnB1dDpmb2N1cysuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHdoaXRlO1xufVxuXG4uY29tb19mdW5jaW9uYSBpbnB1dDpjaGVja2VkKy5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTUlKTtcbn1cblxuLmNvbW9fZnVuY2lvbmEgLnNsaWRlci5yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuXG4vKipUZXN0aW1vbmlhbHMqL1xuXG4ub25saW5lX3Rlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIsIHNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbjIge1xuICAgIHotaW5kZXg6IC00O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL0RvbmFjaW9uZXMvdGVzdGltb25pb18xX2JnLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1heC13aWR0aDogNTAwMHB4O1xufVxuXG4ub25saW5lX3Rlc3RpbW9uaWFscyAuc2NyZWVuMiAudGV4dC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCA1MHB4IDBweCAzMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5zY3JlZW4yIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMCUgMHB4IDI1JTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5zY3JlZW4yIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyNSUgMHB4IDI1JTtcbiAgICB9XG59XG5cbi5vbmxpbmVfdGVzdGltb25pYWxzIC5zY3JlZW4yIC50ZXh0LWNvbnRhaW5lciAuY29taWxsYXMge1xuICAgIGZvbnQtc2l6ZTogMTU1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5zY3JlZW4yIC50ZXh0LWNvbnRhaW5lciAuY29taWxsYXMge1xuICAgICAgICBmb250LXNpemU6IDE1NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbjIgLnRleHQtY29udGFpbmVyIC5jb21pbGxhcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5zY3JlZW4yIC50ZXh0LWNvbnRhaW5lciAuY29taWxsYXMge1xuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIH1cbn1cblxuLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbjIgLnRleHQtY29udGFpbmVyIC5ub21icmUge1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbjIgLnRleHQtY29udGFpbmVyIC5ub21icmUge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbjIgLnRleHQtY29udGFpbmVyIC5ub21icmUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbjIgLnRleHQtY29udGFpbmVyIC5ub21icmUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbjIgLnRleHQtY29udGFpbmVyIC5ub21icmUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIH1cbn1cblxuLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbi1maWx0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyMDUsIDE5OSwgMC43KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5vbmxpbmVfdGVzdGltb25pYWxzIC5zY3JlZW4xIHtcbiAgICB6LWluZGV4OiAtNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmVjO1xufVxuXG4ub25saW5lX3Rlc3RpbW9uaWFscyAuc2NyZWVuMSAud2hpdGVfY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDc1cHgpO1xuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDEwNXB4KTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xuICAgIHotaW5kZXg6IDg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5zY3JlZW4xIC53aGl0ZV9jb250YWluZXIge1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gMTM1cHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLnNjcmVlbjEgLndoaXRlX2NvbnRhaW5lciB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XG4gICAgICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxMzVweCk7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAub25saW5lX3Rlc3RpbW9uaWFscyAuc2NyZWVuMSAud2hpdGVfY29udGFpbmVyIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE1MHB4KTtcbiAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDEzNXB4KTtcbiAgICB9XG59XG5cbi5vbmxpbmVfdGVzdGltb25pYWxzIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4ub25saW5lX3Rlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTAwMDA7XG4gICAgdG9wOiBjYWxjKDUwJSArIDg1cHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiA3JTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwMDcxO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAub25saW5lX3Rlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgICAgICB0b3A6IGNhbGMoNTAlICsgMTI1cHgpO1xuICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAub25saW5lX3Rlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgICAgICB0b3A6IGNhbGMoNTAlICsgMTI1cHgpO1xuICAgICAgICBtaW4td2lkdGg6IDYycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAub25saW5lX3Rlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgICAgICB0b3A6IGNhbGMoNTAlICsgMTUwcHgpO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgfVxufVxuXG4ub25saW5lX3Rlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICBsZWZ0OiBjYWxjKDMwJSArIDIwcHgpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAub25saW5lX3Rlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICAgICAgbGVmdDogY2FsYygyNSUgKyA2NXB4KTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5vbmxpbmVfdGVzdGltb25pYWxzIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgICAgICBsZWZ0OiBjYWxjKDI1JSArIDk0cHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgICAgIGxlZnQ6IGNhbGMoMjUlICsgMTM1cHgpO1xuICAgIH1cbn1cblxuLm9ubGluZV90ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgbGVmdDogY2FsYygzMCUgKyA2MHB4KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgICAgIGxlZnQ6IGNhbGMoMjUlICsgMTE1cHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgICAgIGxlZnQ6IGNhbGMoMjUlICsgMTU1cHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLm9ubGluZV90ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgICAgIGxlZnQ6IGNhbGMoMjUlICsgMjI1cHgpO1xuICAgIH1cbn1cblxuLm9ubGluZV90ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9iYWNrLnBuZ1wiKTtcbn1cblxuLm9ubGluZV90ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9mcm9udC5wbmdcIik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-online',
                templateUrl: './online.component.html',
                styleUrls: ['./online.component.css']
            }]
    }], function () { return [{ type: _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_2__["IdemCursosService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/cursos/presencial/presencial.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/cursos/presencial/presencial.component.ts ***!
  \**********************************************************************/
/*! exports provided: PresencialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresencialComponent", function() { return PresencialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api/idemRelCursosModulos.service */ "./src/services/api/idemRelCursosModulos.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/api/idemCursos.service */ "./src/services/api/idemCursos.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function PresencialComponent_ng_template_4_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const precio_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](precio_r4.nombre);
} }
function PresencialComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " comprar ahora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PresencialComponent_ng_template_4_label_14_Template, 4, 1, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.curso.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.precios);
} }
function PresencialComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Programa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.curso.descripcion2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 3, ctx_r1.curso.fechahora_inicio, "dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.mesdeinicio());
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function PresencialComponent_59_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemprofesor_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + itemprofesor_r5.idem_personas.foto + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", itemprofesor_r5.idem_personas.nombres, " ", itemprofesor_r5.idem_personas.apellido_pa, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemprofesor_r5.titulo_profesional);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemprofesor_r5.descripcion, " ");
} }
function PresencialComponent_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PresencialComponent_59_ng_template_0_Template, 13, 7, "ng-template", 90);
} }
class PresencialComponent {
    constructor(route, ademRelCursosModulosService, dialog, idemCursosService) {
        this.route = route;
        this.ademRelCursosModulosService = ademRelCursosModulosService;
        this.dialog = dialog;
        this.idemCursosService = idemCursosService;
        this.profesores = [];
        this.mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.precios = [];
        this.items = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.idcurso = params.get('cursoId');
            this.cargarCurso();
        });
    }
    cargarCurso() {
        this.idemCursosService.idemCursosGet('eq.' + this.idcurso, null, null, null, null, null, null, null, null, null, null, null, null, '*,idem_curso_items(idtipoitem,nombre,imagen),idem_modulos(*,idem_docentes(titulo_profesional,descripcion,idem_personas(dni,nombres,apellido_pa,apellido_ma,foto)))').subscribe(data => {
            this.curso = data[0];
            this.modulos = this.curso.idem_modulos;
            this.cargarProfesores();
            this.cargarPrecios();
        });
    }
    cargarProfesores() {
        for (const idem_docentes of this.modulos) {
            this.profesores.push(idem_docentes.idem_docentes);
            console.log(idem_docentes);
        }
    }
    cargarPrecios() {
        for (let index = 0; index < this.curso.idem_curso_items.length || index < 3; index++) {
            if (this.curso.idem_curso_items[index].idtipoitem == 'P') {
                this.precios.push(this.curso.idem_curso_items[index]);
            }
            else {
                this.items.push(this.curso.idem_curso_items[index]);
            }
        }
    }
    mesdeinicio() {
        let fecha = new Date(this.curso.fechahora_inicio);
        return this.mes[fecha.getMonth()];
    }
    openRegistro() {
        const dialogRef = this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
PresencialComponent.ɵfac = function PresencialComponent_Factory(t) { return new (t || PresencialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_3__["IdemRelCursosModulosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_5__["IdemCursosService"])); };
PresencialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresencialComponent, selectors: [["app-presencial"]], decls: 119, vars: 6, consts: [["id", "container app", 1, "nuxt"], [1, "container-fluid", "cursos_presenciales_s_hero", "p-0", 2, "height", "100vh", "width", "100%"], ["id", "carousel1", "interval", "4000", "v-model", "slide", "controls", "", 1, "p-0", "w-100", "micarru", 2, "height", "100vh", "text-shadow", "1px 1px 2px #333", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", "", "style", "height:100vh;"], [1, "container-fluid", "informationDesktop", "p-0", 2, "height", "100vh", "width", "100%"], [1, "row", "h-100", "w-100", "m-0"], [1, "column", "dos", "h-100", "col-8", "col-lg-7", "p-0"], [1, "screen2", "h-100", "b-100"], [1, "contenido", "d-flex", "flex-column", "justify-content-center", "h-100", "p-5"], [1, "contenidos", "h-75", "p-5", "pl-0", "pr-lg-5"], [1, "title"], [2, "height", "50px"], [1, "section-title"], [1, "normal-text", 2, "text-align", "justify"], [1, "white-container", "d-flex", "flex-column", "justify-content-around", "px-3"], [1, "container-blue", "py-2", "px-4", "d-flex", "flex-column", "justify-content-center"], [1, "w-100", "d-flex", "justify-content-center"], [1, "icon_1"], [1, "contenido", "py-2"], [1, "normal-text", "m-0"], [1, "container-blue", "py-4", "px-4", "d-flex", "flex-column", "justify-content-center"], [1, "icon_2"], [1, "container-blue", "p-4", "d-flex", "flex-column", "justify-content-center"], [1, "icon_3"], [1, "column", "uno", "h-100", "col-4", "col-lg-5", "p-0"], [1, "container", "screen1", "h-100", "d-flex", "justify-content-start"], [1, "container-fluid", "programa", "p-6", "p-md-0", 2, "height", "100vh", "width", "100%"], ["id", "carousel1", "interval", "4000", "v-model", "slide", "controls", "", "img-width", "1024", "img-height", "480", 1, "p-0", "m-0", 2, "text-shadow", "1px 1px 2px #333", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", "", "style", "height: 100vh;"], [1, "docentes", "container-fluid", "d-flex", "flex-column", "justify-content-center", "inf", "px-2", "px-lg-5", 2, "height", "100vh", "width", "100%"], [1, "py-5"], [1, "text_container"], [1, "title-text"], [1, "hero-title"], [1, "m-0", "normal-text"], ["id", "carousel1", "interval", "4000", "controls", ""], [4, "ngFor", "ngForOf"], [1, "container-fluid", "inscripcion", "p-0", 2, "height", "100vh", "width", "100%"], [1, "column", "uno", "h-100", "col-7", "p-0"], [1, "white-container", "d-flex", "flex-column", "justify-content-center", "py-3", "px-4"], [1, "hero-title", "d-flex", "px-3", "pt-4"], [1, "row", "px-3"], [1, "column", "col-6", "px-3"], [1, "field", "a-field", "a-field_a1", "page__field", "w-100"], ["placeholder", "e.g. Stanislav", "required", "", 1, "field__input", "a-field__input"], [1, "a-field__label-wrap"], [1, "a-field__label", "normal-text"], [1, "normal-text", "a-field__label"], [1, "select"], ["name", "slct", "id", "slct", 1, "small-text"], ["selected", "", "disabled", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "card"], [1, "checkbox-label", "d-flex"], ["type", "checkbox"], [1, "checkbox-custom", "rectangular"], [1, "input-title"], [1, "small-text", 2, "margin-left", "40px", "margin-top", "15px"], [1, "row"], [1, "btn-wrapper", "d-flex", "justify-content-center", "w-100", "py-4"], [1, "btn", "btn-outline-danger", "agregar-btn", "py-0", 2, "min-width", "100px"], [1, "column", "dos", "h-100", "col-5", "p-0"], [2, "height", "100vh"], [1, "col", "uno", "h-100", "col-8", "p-0", 2, "height", "100vh"], [1, "container", "screen1", "h-100", "d-flex", "justify-content-end"], [1, "col", "col-6", "h-100", "px-3", "px-lg-5"], [1, "formulario-general", "h-100", "w-100", "d-flex", "flex-column", "justify-content-center"], [1, "form", "d-flex", "justify-content-end", "pr-5", 2, "z-index", "800", "max-width", "394px"], [1, "btn-wrapper", "px-2"], ["href", "https://docs.google.com/forms/d/1w71DPkSLr05qxnhs68CVak7G-WHCItLhaATFeD0tzKE/prefill", "target", "_blank"], [1, "btn", "btn-danger", "comprar-btn"], [1, "d-flex", "justify-content-end", "pt-4", "pr-5", 2, "z-index", "800", "max-width", "394px"], ["class", " form radio m-0", 4, "ngFor", "ngForOf"], [1, "col", "dos", "h-100", "col-4", "p-0"], [1, "LogoBlanco"], [1, "form", "radio", "m-0"], [1, "d-flex"], [1, "radio"], [1, "row", "h-100", 2, "background-color", "#270172", "height", "100vh"], [1, "column", "dos", "h-100", "col-4", "p-0", 2, "height", "100vh"], [1, "screen2", 2, "height", "100vh"], [1, "text", "d-flex", "flex-column", "justify-content-start"], [1, "normal-text"], [1, "fecha"], [1, "number", 2, "text-align", "center"], [1, "month", 2, "text-align", "center"], [1, "column", "uno", "h-100", "col-8", "p-0"], [1, "container", "screen1", "n1", "h-100", "d-flex", "justify-content-start"], ["ngbSlide", "", "style", "height:50vh;;"], [1, "w-100", "h-100", "px-0"], [1, "px-0", "w-100", "h-100", "m-0", "px-4", "d-flex", "justify-content-center"], ["v-for", "docent in pairs", 1, "d-flex", "w-50", "px-2", "py-4"], [1, "d-flex", "justify-content-start", "pt-0", "text-center"], [1, "image", "w-100", "pt-0", "d-flex", "flex-column", "justify-content-center", 3, "ngStyle"], [1, "w-100", "d-flex", "justify-content-start"], [1, "card-text", "w-100", "d-flex", "flex-column", "justify-content-center"], [1, "cursos-title", "text-left"], [1, "small-text", "subtitle", "text-left"], [1, "small-text", "text-left"]], template: function PresencialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PresencialComponent_ng_template_4_Template, 18, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Aula Magna de la univesidad San augustin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "28 set 6:00pm-9:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 29 set 4:00pm-8:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Estudiante S/50.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Profecional S/60.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Corporativo S/200.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngb-carousel", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PresencialComponent_ng_template_46_Template, 16, 6, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Docentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Lorem ipsum dolor sit amet, consectetur .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Lorem ipsum dolor sit amet, consectetur adipis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ngb-carousel", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PresencialComponent_59_Template, 1, 0, undefined, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u00BFDeseas mayor informaci\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "select", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Curso/Seminario de inter\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Pure CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "No JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Nice!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "T\u00E9rminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false)("showNavigationIndicators", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.curso.descripcion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false)("showNavigationIndicators", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profesores);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["@font-face {\n    font-family: FABRIKBOLD;\n    src: url('FABRIK-BOLD_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: FABRIK;\n    src: url('FABRIK-REGULAR_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: TIEMPO;\n    src: url('TIEMPOSHEADLINE-BLACK.OTF') format(\"opentype\");\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%] {\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.micarru[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n    background-color: red;\n    height: 100vh;\n}\n\n.carousel-item-next[_ngcontent-%COMP%], .carousel-item-prev[_ngcontent-%COMP%], .carousel-item.active[_ngcontent-%COMP%] {\n    display: block;\n    background-color: red;\n    height: 100vh;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    z-index: -4;\n    font-size: 35px;\n    background-image: url('Fotos-IDEM--08.png');\n    background-size: cover;\n    max-width: 10000px;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 80%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    line-height: 35px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n        line-height: 45px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n        line-height: 55px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n        line-height: 65px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    color: #280071;\n    text-align: left;\n    font-size: 28px;\n    font-weight: 100;\n    -webkit-margin-left: 30%;\n    z-index: 35;\n    font-family: TIEMPO;\n    text-shadow: none;\n    -webkit-text-decoration: underline #280071;\n            text-decoration: underline #280071;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n        font-size: 38px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-family: FABRIK;\n    -webkit-text-decoration: underline transaprent;\n            text-decoration: underline transaprent;\n    text-shadow: none;\n    color: #f94139;\n    text-decoration: none;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-decimal[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 8px;\n    margin-bottom: 0px;\n    color: #fb4030;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-price[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    margin-left: 2px;\n    font-family: TIEMPO;\n    font-size: 15px;\n    margin-bottom: 0px;\n    color: #fb4030;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n    border-color: transparent;\n    border-radius: 0px;\n    font-family: FABRIK;\n    font-size: 10px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n        font-size: 15px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%] {\n    background-color: #f94139;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .formulario-general[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n    border-color: #f94139;\n    background-color: transparent;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-color: #dcebec;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .LogoBlanco[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    background-image: url('LogoBlanco.png');\n    height: 185px;\n    width: 169px;\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .LogoBlanco[_ngcontent-%COMP%] {\n        height: 285px;\n        width: 269px;\n    }\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    z-index: -5;\n    height: 100%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    display: none;\n    top: 93%;\n    background-color: #280071;\n    max-height: 7%;\n    max-width: 5%;\n    opacity: 1;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    left: 58.5%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    right: 31.5%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .checkround[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 9.5px;\n    left: 8px;\n    height: 12px;\n    width: 12px;\n    background-color: transparent;\n    border-color: #f94139;\n    border-style: solid;\n    border-width: 1.5px;\n    border-radius: 50%;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkround[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .checkround[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkround[_ngcontent-%COMP%]:after {\n    display: block;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .checkround[_ngcontent-%COMP%]:after {\n    left: calc(50% - 3px);\n    top: calc(50% - 3px);\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #f94139;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.cursos_presenciales_s_hero[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-image: url('Fotos-IDEM--01.png');\n    background-size: cover;\n    max-width: 5000px;\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-color: #dcebec;\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    -webkit-transform: rotate(-90deg);\n    display: flex;\n    justify-content: center;\n    width: 400px;\n    height: 80px;\n    position: absolute;\n    left: -10px;\n}\n\n@media screen and (min-width: 1024px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n        left: 0px;\n    }\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    color: #fb4030;\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%]   .contenidos[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-left: 15%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n    position: absolute;\n    min-width: 300px;\n    top: 15%;\n    left: calc(100% - 110px);\n    height: 70%;\n    font-size: 25px;\n    text-align: center;\n    z-index: 3;\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%] {\n    height: 28%;\n    max-width: 180px;\n    background-color: #280071;\n    color: white;\n}\n\n@media screen and (min-width: 1024px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%] {\n        min-width: 220px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%] {\n        min-width: 220px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%] {\n        min-width: 320px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%] {\n        min-width: 420px;\n    }\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n    color: #dcebec;\n    text-align: center;\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_1[_ngcontent-%COMP%] {\n    max-height: 30px;\n    max-width: 20px;\n    background-image: url('icon_1.png');\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_1[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 25px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_1[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_1[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_1[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_2[_ngcontent-%COMP%] {\n    max-height: 32px;\n    max-width: 41px;\n    background-image: url('icon_2.png');\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_2[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_2[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_2[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_2[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n.informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_3[_ngcontent-%COMP%] {\n    max-height: 30px;\n    max-width: 24px;\n    background-image: url('icon_3.png');\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_3[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_3[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_3[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .informationDesktop[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .container-blue[_ngcontent-%COMP%]   .icon_3[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 30px;\n    }\n}\n\n.programa[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    text-shadow: none;\n}\n\n.programa[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-size: cover;\n    max-width: 5000px;\n    font-size: 30px;\n}\n\n.programa[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    opacity: 1;\n    color: #f8433c;\n    text-align: left;\n    font-size: 45px;\n    font-weight: 100;\n    z-index: 3;\n    font-family: TIEMPO;\n    text-shadow: none;\n    -webkit-text-decoration: underline #f8433c;\n            text-decoration: underline #f8433c;\n}\n\n.carousel-item.active[_ngcontent-%COMP%] {\n    height: 100vh;\n}\n\n.programa[_ngcontent-%COMP%]   .n1[_ngcontent-%COMP%] {\n    background-color: #270172;\n    background-size: cover;\n}\n\n.programa[_ngcontent-%COMP%]   .n2[_ngcontent-%COMP%] {\n    background-color: #270172;\n    background-size: cover;\n}\n\n.programa[_ngcontent-%COMP%]   .screen-filter[_ngcontent-%COMP%] {\n    background-color: rgba(127, 205, 199, 0.7);\n    position: absolute;\n    top: 0;\n    z-index: 1;\n}\n\n.programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%] {\n    background-color: #dcebec;\n}\n\n.programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    z-index: -4;\n}\n\n@media screen and (min-width: 1232px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n        padding: 50px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n        padding: 50px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n        padding: 50px;\n    }\n}\n\n.programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    color: #270172;\n    padding: 50px;\n}\n\n.programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%] {\n    color: #f8433c;\n    margin-left: 65px;\n}\n\n.programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    font-family: FABRIKBOLD;\n    font-size: 100px;\n    margin: 0px;\n}\n\n@media screen and (min-width: 1024px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n        font-size: 160px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n        font-size: 160px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n        font-size: 200px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n        font-size: 260px;\n    }\n}\n\n.programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n    font-family: FABRIKBOLD;\n    font-size: 20px;\n    margin-top: -35px;\n}\n\n@media screen and (min-width: 1024px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n        font-size: 35px;\n        margin-top: 70px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n        font-size: 35px;\n        margin-top: 70px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n        font-size: 45px;\n        margin-top: 70px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .programa[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n        font-size: 60px;\n        margin-top: 70px;\n    }\n}\n\n.programa[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .programa[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    top: 93%;\n    background-color: #f8433c;\n    height: 7%;\n    max-width: 5%;\n    opacity: 1;\n}\n\n.programa[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    left: 23%;\n}\n\n.programa[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    right: 67%;\n}\n\n.programa[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n    background-image: url('back.png');\n}\n\n.programa[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n    background-image: url('front.png');\n}\n\n.docentes[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n    margin-right: 5%;\n    margin-left: 5%;\n    max-width: 1200px;\n}\n\n@media screen and (min-width: 1440px) {\n    .docentes[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        margin-right: auto;\n        margin-left: auto;\n        max-width: 1600px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .docentes[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        max-width: 1800px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    color: #280071;\n    font-family: FABRIK;\n    font-size: 18px;\n    line-height: 20px;\n}\n\n.docentes[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: #f9423a;\n    font-family: TIEMPO;\n}\n\n.docentes[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin-left: 10%;\n}\n\n@media screen and (min-width: 1440px) {\n    .docentes[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        max-width: 600px;\n        margin-left: 5%;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .docentes[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        max-width: 800px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    color: #fb4030;\n    text-decoration: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    height: 100%;\n    visibility: hidden;\n    border-color: transparent;\n}\n\n.docentes[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-position: center;\n}\n\n.docentes[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n    color: #fb4030;\n    font-size: 13px;\n    padding-right: 15%;\n    line-height: 15px;\n    text-shadow: none;\n    font-family: TIEMPO;\n}\n\n@media screen and (min-width: 1024px) {\n    .docentes[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 20px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .docentes[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 24px;\n        line-height: 28px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .docentes[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 32px;\n        line-height: 36px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .cursos-title-2[_ngcontent-%COMP%] {\n    color: #fb4030;\n    font-size: 15px;\n    line-height: 19px;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    background-color: #dcebec;\n    padding: 20px;\n}\n\n@media screen and (min-width: 1024px) {\n    .docentes[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 30px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .docentes[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 40px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .docentes[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n        padding: 50px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .cursos-text[_ngcontent-%COMP%] {\n    color: #43398a;\n    font-size: 10px;\n    line-height: 12px;\n    text-shadow: none;\n}\n\n@media screen and (min-width: 1024px) {\n    .docentes[_ngcontent-%COMP%]   .cursos-text[_ngcontent-%COMP%] {\n        font-size: 13px;\n        line-height: 15px;\n    }\n}\n\n.docentes[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    color: #fb4030;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    height: 100%;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .cursos-button[_ngcontent-%COMP%] {\n    background-color: #dcecec;\n    color: #43398a;\n    font-size: 13px;\n    letter-spacing: 3px;\n    text-shadow: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .docentes[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    top: 50%;\n    height: 20px;\n    width: 20px;\n    opacity: 1;\n    background-size: cover;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%], .docentes[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%], .docentes[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    background-image: url('r2.png');\n}\n\n.docentes[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    background-image: url('r1.png');\n}\n\n.inscripcion[_ngcontent-%COMP%] {\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n}\n\n.inscripcion[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    text-shadow: none;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-color: #280071;\n    background-size: cover;\n    max-width: 5000px;\n    font-size: 30px;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .screen1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    opacity: 1;\n    color: #f8433c;\n    text-align: left;\n    font-size: 35px;\n    font-weight: 100;\n    z-index: 3;\n    text-shadow: none;\n    -webkit-text-decoration: underline #f8433c;\n            text-decoration: underline #f8433c;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%] {\n    z-index: -4;\n    background-image: url('Fotos-IDEM--10.png');\n    background-size: cover;\n}\n\n@media screen and (min-width: 1024px) {\n    .inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n        padding-top: 15px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n        padding-top: 25px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n        padding-top: 25px;\n    }\n}\n\n.inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: calc(50% - 175px);\n    left: calc(80% - 300px);\n    width: 600px;\n    height: 350px;\n    background-color: white;\n    color: #280071;\n    font-size: 25px;\n    text-align: center;\n    z-index: 3;\n}\n\n@media screen and (min-width: 1024px) {\n    .inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n        left: 60%;\n        top: calc(50% - 200px);\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n        top: calc(50% - 225px);\n        height: 450px;\n        width: 800px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%] {\n        top: calc(50% - 275px);\n        height: 550px;\n        width: 900px;\n    }\n}\n\n.inscripcion[_ngcontent-%COMP%]   .screen2[_ngcontent-%COMP%]   .white-container[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .inscripcion[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    top: 93%;\n    background-color: #f8433c;\n    height: 7%;\n    max-width: 5%;\n    opacity: 1;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    left: 33%;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    right: 57%;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%], .inscripcion[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n    border-color: transparent;\n    border-radius: 0px;\n    font-family: FABRIK;\n    font-size: 18px;\n}\n\n@media screen and (min-width: 1024px) {\n    .inscripcion[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%], .inscripcion[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .inscripcion[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%], .inscripcion[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .inscripcion[_ngcontent-%COMP%]   .comprar-btn[_ngcontent-%COMP%], .inscripcion[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n        font-size: 32px;\n    }\n}\n\n.inscripcion[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n    border-color: #f94139;\n    background-color: transparent;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);\n}\n\n.inscripcion[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-radius: 0;\n    border: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n    color: var(--uiFieldPlaceholderColor);\n}\n\n.inscripcion[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%]:focus::-moz-placeholder {\n    color: var(--uiFieldPlaceholderColor);\n    opacity: 1;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%] {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%] {\n    --uiFieldHeight: var(--fieldHeight, 28px);\n    --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);\n    --uiFieldBorderColor: var(--fieldBorderColor);\n    --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);\n    --uiFieldPaddingBottom: var(--fieldPaddingBottom, 15px);\n    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 0px);\n    font-family: FABRIK;\n    position: relative;\n    box-sizing: border-box;\n}\n\n@media screen and (min-width: 1024px) {\n    .inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%] {\n        --uiFieldHeight: var(--fieldHeight, 38px);\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%] {\n        --uiFieldHeight: var(--fieldHeight, 44px);\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%] {\n        --uiFieldHeight: var(--fieldHeight, 64px);\n    }\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%] {\n    height: var(--uiFieldHeight);\n    padding: 0 var(--uiFieldPaddingRight) 0 var(--uiFieldPaddingLeft);\n    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColor);\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    opacity: 0;\n    -webkit-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]::-moz-placeholder {\n    opacity: 0;\n    -moz-transition: opacity 0.2s ease-out;\n    transition: opacity 0.2s ease-out;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .a-field__label-wrap[_ngcontent-%COMP%]   .a-field__label[_ngcontent-%COMP%] {\n    opacity: 0;\n    bottom: var(--uiFieldPaddingBottom);\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n    opacity: 1;\n    transition-delay: 0.2s;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:focus::-moz-placeholder {\n    opacity: 1;\n    transition-delay: 0.2s;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__label-wrap[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    width: 100%;\n    height: var(--uiFieldHeight);\n    pointer-events: none;\n    cursor: text;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__label[_ngcontent-%COMP%] {\n    position: absolute;\n    left: var(--uiFieldPaddingLeft);\n    bottom: calc(50% - .8em);\n    line-height: 1;\n    pointer-events: none;\n    transition: bottom 0.2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity 0.2s ease-out;\n    will-change: bottom, opacity;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:focus ~ .a-field__label-wrap[_ngcontent-%COMP%]   .a-field__label[_ngcontent-%COMP%] {\n    opacity: 1;\n    bottom: var(--uiFieldHeight);\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field_a1[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%] {\n    transition: border-color 0.2s ease-out;\n    will-change: border-color;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field_a1[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:focus {\n    border-color: var(--fieldBorderColorActive);\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field_a2[_ngcontent-%COMP%]   .a-field__label-wrap[_ngcontent-%COMP%]:after {\n    content: \"\";\n    box-sizing: border-box;\n    width: 0;\n    height: var(--uiFieldBorderWidth);\n    background-color: var(--fieldBorderColorActive);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    will-change: width;\n    transition: width 0.285s ease-out;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field_a2[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:focus ~ .a-field__label-wrap[_ngcontent-%COMP%]:after {\n    width: 100%;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field_a3[_ngcontent-%COMP%] {\n    padding-top: 1.5em;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field_a3[_ngcontent-%COMP%]   .a-field__label-wrap[_ngcontent-%COMP%]:after {\n    content: \"\";\n    box-sizing: border-box;\n    width: 100%;\n    height: 0;\n    opacity: 0;\n    border: var(--uiFieldBorderWidth) solid var(--fieldBorderColorActive);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    will-change: opacity, height;\n    transition: height 0.2s ease-out, opacity 0.2s ease-out;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field_a3[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:focus ~ .a-field__label-wrap[_ngcontent-%COMP%]:after {\n    height: 100%;\n    opacity: 1;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .a-field_a3[_ngcontent-%COMP%]   .a-field__input[_ngcontent-%COMP%]:focus ~ .a-field__label-wrap[_ngcontent-%COMP%]   .a-field__label[_ngcontent-%COMP%] {\n    bottom: calc(var(--uiFieldHeight) + .5em);\n}\n\n.inscripcion[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n    --fieldBorderColor: #d1c4e9;\n    --fieldBorderColorActive: #673ab7;\n}\n\n.inscripcion[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    outline: 0;\n    box-shadow: none;\n    border: 0 !important;\n    background: transparent;\n    background-image: none;\n    font-size: 10px;\n    font-family: FABRIK;\n}\n\n@media screen and (min-width: 1024px) {\n    .inscripcion[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        font-size: 12px;\n        line-height: 12px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .inscripcion[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        font-size: 15px;\n        line-height: 20px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .inscripcion[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        font-size: 18px;\n        line-height: 23px;\n    }\n}\n\n.inscripcion[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-ms-expand {\n    display: none;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    width: 100%;\n    height: 50px;\n    line-height: 2;\n    background: trasnsparent;\n    overflow: hidden;\n    border-radius: 0;\n}\n\n.inscripcion[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 0 0.5em;\n    color: #280071;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]::after {\n    content: '\\25BE';\n    position: absolute;\n    top: 0;\n    right: 0;\n    color: #280071;\n    cursor: pointer;\n    pointer-events: none;\n    transition: 0.25s all ease;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]:hover::after {\n    color: #f8433c;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    \n    \n    \n    \n    \n    background-color: white;\n    \n    border: transparent;\n    flex-direction: row;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%] {\n    -webkit-text-decoration: underline #280071;\n            text-decoration: underline #280071;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n    \n    \n    \n    cursor: pointer;\n    \n    \n}\n\n.inscripcion[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    opacity: 0;\n    cursor: pointer;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10px;\n    left: 0px;\n    height: 24px;\n    width: 24px;\n    background-color: transparent;\n    border-radius: 5px;\n    transition: all 0.3s ease-out;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    border: 2px solid #270172;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkbox-custom[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-radius: 5px;\n    transform: rotate(0deg) scale(1);\n    opacity: 1;\n    border: 2px solid #270172;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%]::after {\n    position: absolute;\n    content: \"\";\n    left: 12px;\n    top: 12px;\n    height: 0px;\n    width: 0px;\n    border-radius: 5px;\n    border: solid #270172;\n    border-width: 0 3px 3px 0;\n    transform: rotate(0deg) scale(0);\n    opacity: 1;\n    transition: all 0.3s ease-out;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkbox-custom[_ngcontent-%COMP%]::after {\n    transform: rotate(45deg) scale(1);\n    opacity: 1;\n    left: 8px;\n    top: 3px;\n    width: 6px;\n    height: 12px;\n    border: solid #270172;\n    border-width: 0 2px 2px 0;\n    background-color: transparent;\n    border-radius: 0;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-custom[_ngcontent-%COMP%]::before {\n    position: absolute;\n    content: \"\";\n    left: 10px;\n    top: 10px;\n    width: 0px;\n    height: 0px;\n    border-radius: 5px;\n    border: 2px solid #270172;\n    transform: scale(0);\n}\n\n.inscripcion[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkbox-custom[_ngcontent-%COMP%]::before {\n    left: -3px;\n    top: -3px;\n    width: 24px;\n    height: 24px;\n    border-radius: 5px;\n    transform: scale(3);\n    opacity: 0;\n    z-index: 999;\n    transition: all 0.3s ease-out;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n    height: 160px;\n    width: 160px;\n    background-color: #270172;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n    \n    \n    \n    padding-right: 1rem;\n    padding-top: 1rem;\n    border-bottom: transparent;\n    border-top-left-radius: 0rem;\n    border-top-right-radius: 0rem;\n}\n\n.inscripcion[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    float: right;\n    font-weight: 700;\n    line-height: 1;\n    color: #270172;\n    text-shadow: 0 1px 0 #270172;\n    opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJzb3MvcHJlc2VuY2lhbC9wcmVzZW5jaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0RBQWtGO0FBQ3RGOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1EQUFxRjtBQUN6Rjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3REFBMEY7QUFDOUY7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLGlDQUFpQztJQUNqQyw0REFBNEQ7SUFDNUQsb0VBQW9FO0lBQ3BFLGlEQUFpRDtJQUNqRCxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0Isd0RBQXdEO0lBQ3hELDZEQUE2RDtJQUM3RCxvQ0FBb0M7SUFDcEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkNBQXNHO0lBQ3RHLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hC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NkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXJzb3MvcHJlc2VuY2lhbC9wcmVzZW5jaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogRkFCUklLQk9MRDtcbiAgICBzcmM6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9mb250cy9GQUJSSUstQk9MRF8wLk9URikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvZm9udHMvRkFCUklLLVJFR1VMQVJfMC5PVEYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xuICAgIHNyYzogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2ZvbnRzL1RJRU1QT1NIRUFETElORS1CTEFDSy5PVEYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8ge1xuICAgIC8qIFRoZSByYWRpbyAqL1xuICAgIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuICAgIC8qIENyZWF0ZSBhIGN1c3RvbSByYWRpbyBidXR0b24gKi9cbiAgICAvKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4gICAgLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4gICAgLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cbiAgICAvKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuICAgIC8qIFRoZSBjaGVjayAqL1xuICAgIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4gICAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4gICAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4gICAgLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbiAgICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4gICAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1pY2FycnUgLmNhcm91c2VsLWlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcm91c2VsLWl0ZW0tbmV4dCxcbi5jYXJvdXNlbC1pdGVtLXByZXYsXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEge1xuICAgIHotaW5kZXg6IC00O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9DdXJzb3NfcHJlc2VuY2lhbGVzX3NlbGVjdG9zL0ZvdG9zLUlERU0tLTA4LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1heC13aWR0aDogMTAwMDBweDtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4MCU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5oZXJvLXRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLmhlcm8tdGl0bGUge1xuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5oZXJvLXRpdGxlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAuaGVyby10aXRsZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xuICAgIH1cbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnRleHQge1xuICAgIGNvbG9yOiAjMjgwMDcxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgLXdlYmtpdC1tYXJnaW4tbGVmdDogMzAlO1xuICAgIHotaW5kZXg6IDM1O1xuICAgIGZvbnQtZmFtaWx5OiBUSUVNUE87XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIzI4MDA3MTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnRleHQge1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgfVxufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAucmFkaW8ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHRyYW5zYXByZW50O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiAjZjk0MTM5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5zY3JlZW4xIC5mb3JtdWxhcmlvLWdlbmVyYWwgLnJhZGlvIC5yYWRpbyxcbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5yYWRpbyAucmFkaW8tZGVjaW1hbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGNvbG9yOiAjZmI0MDMwO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAucmFkaW8gLnJhZGlvLXByaWNlIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgY29sb3I6ICNmYjQwMzA7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5jb21wcmFyLWJ0bixcbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5hZ3JlZ2FyLWJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IEZBQlJJSztcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5jb21wcmFyLWJ0bixcbiAgICAuY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAuYWdyZWdhci1idG4ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjEgLmZvcm11bGFyaW8tZ2VuZXJhbCAuY29tcHJhci1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTQxMzk7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMSAuZm9ybXVsYXJpby1nZW5lcmFsIC5hZ3JlZ2FyLWJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjk0MTM5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjIge1xuICAgIHotaW5kZXg6IC00O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZWM7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuc2NyZWVuMiAuTG9nb0JsYW5jbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9Mb2dvQmxhbmNvLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDE4NXB4O1xuICAgIHdpZHRoOiAxNjlweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLnNjcmVlbjIgLkxvZ29CbGFuY28ge1xuICAgICAgICBoZWlnaHQ6IDI4NXB4O1xuICAgICAgICB3aWR0aDogMjY5cHg7XG4gICAgfVxufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmltZy1mbHVpZCB7XG4gICAgei1pbmRleDogLTU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICB6LWluZGV4OiAxNTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRvcDogOTMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODAwNzE7XG4gICAgbWF4LWhlaWdodDogNyU7XG4gICAgbWF4LXdpZHRoOiA1JTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgbGVmdDogNTguNSU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICByaWdodDogMzEuNSU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAucmFkaW8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5yYWRpbyBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Vyc29zX3ByZXNlbmNpYWxlc19zX2hlcm8gLmNoZWNrcm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDkuNXB4O1xuICAgIGxlZnQ6IDhweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjk0MTM5O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAucmFkaW8gaW5wdXQ6Y2hlY2tlZH4uY2hlY2tyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuY2hlY2tyb3VuZDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5yYWRpbyBpbnB1dDpjaGVja2Vkfi5jaGVja3JvdW5kOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5yYWRpbyAuY2hlY2tyb3VuZDphZnRlciB7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAzcHgpO1xuICAgIHRvcDogY2FsYyg1MCUgLSAzcHgpO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmOTQxMzk7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuY2hlY2sgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmN1cnNvc19wcmVzZW5jaWFsZXNfc19oZXJvIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdXJzb3NfcHJlc2VuY2lhbGVzX3NfaGVybyAuY2hlY2sgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMSB7XG4gICAgei1pbmRleDogLTQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvQ3Vyc29zX3ByZXNlbmNpYWxlc19zZWxlY3Rvcy9Gb3Rvcy1JREVNLS0wMS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXgtd2lkdGg6IDUwMDBweDtcbn1cblxuLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiB7XG4gICAgei1pbmRleDogLTQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZWJlYztcbn1cblxuLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAuY29udGVuaWRvIC50aXRsZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLmNvbnRlbmlkbyAudGl0bGUge1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgfVxufVxuXG4uaW5mb3JtYXRpb25EZXNrdG9wIC5zY3JlZW4yIC5jb250ZW5pZG8gLnRpdGxlIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbn1cblxuLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAuY29udGVuaWRvIC5jb250ZW5pZG9zIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5mb3JtYXRpb25EZXNrdG9wIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHRvcDogMTUlO1xuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDExMHB4KTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciAuY29udGFpbmVyLWJsdWUge1xuICAgIGhlaWdodDogMjglO1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MDA3MTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciAuY29udGFpbmVyLWJsdWUge1xuICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIC5jb250YWluZXItYmx1ZSB7XG4gICAgICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuaW5mb3JtYXRpb25EZXNrdG9wIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLmNvbnRhaW5lci1ibHVlIHtcbiAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciAuY29udGFpbmVyLWJsdWUge1xuICAgICAgICBtaW4td2lkdGg6IDQyMHB4O1xuICAgIH1cbn1cblxuLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIC5jb250YWluZXItYmx1ZSAubm9ybWFsLXRleHQge1xuICAgIGNvbG9yOiAjZGNlYmVjO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIC5jb250YWluZXItYmx1ZSAuaWNvbl8xIHtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICAgIG1heC13aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9DdXJzb3NfcHJlc2VuY2lhbGVzX3NlbGVjdG9zL2ljb25fMS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIC5jb250YWluZXItYmx1ZSAuaWNvbl8xIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciAuY29udGFpbmVyLWJsdWUgLmljb25fMSB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuaW5mb3JtYXRpb25EZXNrdG9wIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLmNvbnRhaW5lci1ibHVlIC5pY29uXzEge1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIC5jb250YWluZXItYmx1ZSAuaWNvbl8xIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG59XG5cbi5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciAuY29udGFpbmVyLWJsdWUgLmljb25fMiB7XG4gICAgbWF4LWhlaWdodDogMzJweDtcbiAgICBtYXgtd2lkdGg6IDQxcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvQ3Vyc29zX3ByZXNlbmNpYWxlc19zZWxlY3Rvcy9pY29uXzIucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciAuY29udGFpbmVyLWJsdWUgLmljb25fMiB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuaW5mb3JtYXRpb25EZXNrdG9wIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLmNvbnRhaW5lci1ibHVlIC5pY29uXzIge1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIC5jb250YWluZXItYmx1ZSAuaWNvbl8yIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciAuY29udGFpbmVyLWJsdWUgLmljb25fMiB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuXG4uaW5mb3JtYXRpb25EZXNrdG9wIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLmNvbnRhaW5lci1ibHVlIC5pY29uXzMge1xuICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiAyNHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL0N1cnNvc19wcmVzZW5jaWFsZXNfc2VsZWN0b3MvaWNvbl8zLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuaW5mb3JtYXRpb25EZXNrdG9wIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLmNvbnRhaW5lci1ibHVlIC5pY29uXzMge1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLmluZm9ybWF0aW9uRGVza3RvcCAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIC5jb250YWluZXItYmx1ZSAuaWNvbl8zIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5pbmZvcm1hdGlvbkRlc2t0b3AgLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciAuY29udGFpbmVyLWJsdWUgLmljb25fMyB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuaW5mb3JtYXRpb25EZXNrdG9wIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLmNvbnRhaW5lci1ibHVlIC5pY29uXzMge1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cbn1cblxuLnByb2dyYW1hIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLnByb2dyYW1hIC5zY3JlZW4xIHtcbiAgICB6LWluZGV4OiAtNDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1heC13aWR0aDogNTAwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnByb2dyYW1hIC5zY3JlZW4xIC50ZXh0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjZjg0MzNjO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgei1pbmRleDogMztcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICNmODQzM2M7XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnByb2dyYW1hIC5uMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MDE3MjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucHJvZ3JhbWEgLm4yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcwMTcyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5wcm9ncmFtYSAuc2NyZWVuLWZpbHRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDIwNSwgMTk5LCAwLjcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnByb2dyYW1hIC5kb3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZWM7XG59XG5cbi5wcm9ncmFtYSAuZG9zIC5zY3JlZW4yIHtcbiAgICB6LWluZGV4OiAtNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLnByb2dyYW1hIC5kb3MgLnNjcmVlbjIge1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLnByb2dyYW1hIC5kb3MgLnNjcmVlbjIge1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLnByb2dyYW1hIC5kb3MgLnNjcmVlbjIge1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgIH1cbn1cblxuLnByb2dyYW1hIC5kb3MgLnNjcmVlbjIgLnRleHQge1xuICAgIGNvbG9yOiAjMjcwMTcyO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5wcm9ncmFtYSAuZG9zIC5zY3JlZW4yIC50ZXh0IC5oZXJvLXRpdGxlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9ncmFtYSAuZG9zIC5zY3JlZW4yIC5mZWNoYSB7XG4gICAgY29sb3I6ICNmODQzM2M7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG5cbi5wcm9ncmFtYSAuZG9zIC5zY3JlZW4yIC5mZWNoYSAubnVtYmVyIHtcbiAgICBmb250LWZhbWlseTogRkFCUklLQk9MRDtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAucHJvZ3JhbWEgLmRvcyAuc2NyZWVuMiAuZmVjaGEgLm51bWJlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAucHJvZ3JhbWEgLmRvcyAuc2NyZWVuMiAuZmVjaGEgLm51bWJlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAucHJvZ3JhbWEgLmRvcyAuc2NyZWVuMiAuZmVjaGEgLm51bWJlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAucHJvZ3JhbWEgLmRvcyAuc2NyZWVuMiAuZmVjaGEgLm51bWJlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjYwcHg7XG4gICAgfVxufVxuXG4ucHJvZ3JhbWEgLmRvcyAuc2NyZWVuMiAuZmVjaGEgLm1vbnRoIHtcbiAgICBmb250LWZhbWlseTogRkFCUklLQk9MRDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5wcm9ncmFtYSAuZG9zIC5zY3JlZW4yIC5mZWNoYSAubW9udGgge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAucHJvZ3JhbWEgLmRvcyAuc2NyZWVuMiAuZmVjaGEgLm1vbnRoIHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLnByb2dyYW1hIC5kb3MgLnNjcmVlbjIgLmZlY2hhIC5tb250aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5wcm9ncmFtYSAuZG9zIC5zY3JlZW4yIC5mZWNoYSAubW9udGgge1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgfVxufVxuXG4ucHJvZ3JhbWEgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbi5wcm9ncmFtYSAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICB6LWluZGV4OiAxNTtcbiAgICB0b3A6IDkzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg0MzNjO1xuICAgIGhlaWdodDogNyU7XG4gICAgbWF4LXdpZHRoOiA1JTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucHJvZ3JhbWEgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgbGVmdDogMjMlO1xufVxuXG4ucHJvZ3JhbWEgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgcmlnaHQ6IDY3JTtcbn1cblxuLnByb2dyYW1hIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvYmFjay5wbmdcIik7XG59XG5cbi5wcm9ncmFtYSAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2Zyb250LnBuZ1wiKTtcbn1cblxuLmRvY2VudGVzIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uZG9jZW50ZXMgLmNhcm91c2VsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmRvY2VudGVzIC5jYXJvdXNlbCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmRvY2VudGVzIC5jYXJvdXNlbCB7XG4gICAgICAgIG1heC13aWR0aDogMTgwMHB4O1xuICAgIH1cbn1cblxuLmRvY2VudGVzIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kb2NlbnRlcyAudGl0bGUtdGV4dCAudGV4dCB7XG4gICAgY29sb3I6ICMyODAwNzE7XG4gICAgZm9udC1mYW1pbHk6IEZBQlJJSztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5kb2NlbnRlcyAudGl0bGUtdGV4dCAudGl0bGUge1xuICAgIGNvbG9yOiAjZjk0MjNhO1xuICAgIGZvbnQtZmFtaWx5OiBUSUVNUE87XG59XG5cbi5kb2NlbnRlcyAudGV4dF9jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmRvY2VudGVzIC50ZXh0X2NvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5kb2NlbnRlcyAudGV4dF9jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIH1cbn1cblxuLmRvY2VudGVzIC5oZXJvLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kb2NlbnRlcyAuaW1nLWZsdWlkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kb2NlbnRlcyAuaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uZG9jZW50ZXMgLmN1cnNvcy10aXRsZSB7XG4gICAgY29sb3I6ICNmYjQwMzA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZG9jZW50ZXMgLmN1cnNvcy10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuZG9jZW50ZXMgLmN1cnNvcy10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuZG9jZW50ZXMgLmN1cnNvcy10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgfVxufVxuXG4uZG9jZW50ZXMgLmN1cnNvcy10aXRsZS0yIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kb2NlbnRlcyAuY2FyZC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmVjO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5kb2NlbnRlcyAuY2FyZC10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5kb2NlbnRlcyAuY2FyZC10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5kb2NlbnRlcyAuY2FyZC10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICB9XG59XG5cbi5kb2NlbnRlcyAuY3Vyc29zLXRleHQge1xuICAgIGNvbG9yOiAjNDMzOThhO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmRvY2VudGVzIC5jdXJzb3MtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgfVxufVxuXG4uZG9jZW50ZXMgLnN1YnRpdGxlIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbn1cblxuLmRvY2VudGVzIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kb2NlbnRlcyAuY3Vyc29zLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZWNlYztcbiAgICBjb2xvcjogIzQzMzk4YTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLmRvY2VudGVzIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uZG9jZW50ZXMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgei1pbmRleDogMTU7XG4gICAgdG9wOiA1MCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmRvY2VudGVzIC5jYXJvdXNlbC1jb250cm9sLXByZXYgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxuLmRvY2VudGVzIC5jYXJvdXNlbC1jb250cm9sLW5leHQgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZG9jZW50ZXMgLmNhcm91c2VsLWNvbnRyb2wtcHJldiAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24sXG4uZG9jZW50ZXMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kb2NlbnRlcyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvcjIucG5nKTtcbn1cblxuLmRvY2VudGVzIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9yMS5wbmcpO1xufVxuXG4uaW5zY3JpcGNpb24ge1xuICAgIC8qIFAuUzogaWYgeW91IGxpa2UgbXkgY29udGVudCBtYXliZSB5b3Ugd2lsbCBiZWNvbWUgYSBkb25hdG9yIGFuZCBkb25hdGUgc29tZSBtb25leT8gVGhhdCBoZWxwcyBtZSB0byBjcmVhdGUgbmV3IGF3ZXNvbWUgbWF0ZXJpYWxzLiBodHRwczovL3d3dy5wYXlwYWwubWUvbWVsbmlrOTA5ICovXG4gICAgLyogPT09PT0gTEVWRUwgMS4gUkVTRVQgU1RZTEVTID09PT09ICovXG4gICAgLyogPT09PT0gTEVWRUwgMi4gQ09SRSBTVFlMRVMgPT09PT0gKi9cbiAgICAvKiA9PT09PSBMRVZFTCAzLiBQUkVTRU5UQVRJT04gU1RZTEVTID09PT09ICovXG4gICAgLyogYS1maWVsZCAqL1xuICAgIC8qIGEtZmllbGRfYTEgKi9cbiAgICAvKiBhLWZpZWxkX2EyICovXG4gICAgLyogYS1maWVsZF9hMyAqL1xuICAgIC8qID09PT09IExFVkVMIDQuIFNFVFRJTkdTID09PT09ICovXG4gICAgLyogLnJhZGlvIHtcblx0XHQgZGlzcGxheTogYmxvY2s7XG5cdFx0IHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQgcGFkZGluZy1sZWZ0OiAzMHB4O1xuXHRcdCBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHRcdCBjdXJzb3I6IHBvaW50ZXI7XG5cdFx0IC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0IC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0IC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0XHQgdXNlci1zZWxlY3Q6IG5vbmUgXG5cdH1cblx0LyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXG4gICAgLyogUmVzZXQgU2VsZWN0ICovXG4gICAgLyogUmVtb3ZlIElFIGFycm93ICovXG4gICAgLyogQ3VzdG9tIFNlbGVjdCAqL1xuICAgIC8qIEFycm93ICovXG4gICAgLyogVHJhbnNpdGlvbiAqL1xuICAgIC8qIFN0eWxpbmcgQ2hlY2tib3ggU3RhcnRzICovXG4gICAgLyogRm9yIFJpcHBsZSBFZmZlY3QgKi9cbn1cblxuLmluc2NyaXBjaW9uIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLmluc2NyaXBjaW9uIC5zY3JlZW4xIHtcbiAgICB6LWluZGV4OiAtNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwMDcxO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWF4LXdpZHRoOiA1MDAwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaW5zY3JpcGNpb24gLnNjcmVlbjEgLnRleHQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICNmODQzM2M7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB6LWluZGV4OiAzO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICNmODQzM2M7XG59XG5cbi5pbnNjcmlwY2lvbiAuc2NyZWVuMiB7XG4gICAgei1pbmRleDogLTQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvQ3Vyc29zX3ByZXNlbmNpYWxlc19zZWxlY3Rvcy9Gb3Rvcy1JREVNLS0xMC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmluc2NyaXBjaW9uIC5zY3JlZW4yIC5yb3cge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5pbnNjcmlwY2lvbiAuc2NyZWVuMiAucm93IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuaW5zY3JpcGNpb24gLnNjcmVlbjIgLnJvdyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIH1cbn1cblxuLmluc2NyaXBjaW9uIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTc1cHgpO1xuICAgIGxlZnQ6IGNhbGMoODAlIC0gMzAwcHgpO1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjMjgwMDcxO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogMztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmluc2NyaXBjaW9uIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIge1xuICAgICAgICBsZWZ0OiA2MCU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuaW5zY3JpcGNpb24gLnNjcmVlbjIgLndoaXRlLWNvbnRhaW5lciB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyMjVweCk7XG4gICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5pbnNjcmlwY2lvbiAuc2NyZWVuMiAud2hpdGUtY29udGFpbmVyIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDI3NXB4KTtcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgIH1cbn1cblxuLmluc2NyaXBjaW9uIC5zY3JlZW4yIC53aGl0ZS1jb250YWluZXIgLmhlcm8tdGl0bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmluc2NyaXBjaW9uIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uaW5zY3JpcGNpb24gLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgei1pbmRleDogMTU7XG4gICAgdG9wOiA5MyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NDMzYztcbiAgICBoZWlnaHQ6IDclO1xuICAgIG1heC13aWR0aDogNSU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmluc2NyaXBjaW9uIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGxlZnQ6IDMzJTtcbn1cblxuLmluc2NyaXBjaW9uIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHJpZ2h0OiA1NyU7XG59XG5cbi5pbnNjcmlwY2lvbiAuY29tcHJhci1idG4sXG4uaW5zY3JpcGNpb24gLmFncmVnYXItYnRuIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmluc2NyaXBjaW9uIC5jb21wcmFyLWJ0bixcbiAgICAuaW5zY3JpcGNpb24gLmFncmVnYXItYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmluc2NyaXBjaW9uIC5jb21wcmFyLWJ0bixcbiAgICAuaW5zY3JpcGNpb24gLmFncmVnYXItYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmluc2NyaXBjaW9uIC5jb21wcmFyLWJ0bixcbiAgICAuaW5zY3JpcGNpb24gLmFncmVnYXItYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbn1cblxuLmluc2NyaXBjaW9uIC5hZ3JlZ2FyLWJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjk0MTM5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW5zY3JpcGNpb24gLmZpZWxkIHtcbiAgICAtLXVpRmllbGRQbGFjZWhvbGRlckNvbG9yOiB2YXIoLS1maWVsZFBsYWNlaG9sZGVyQ29sb3IsICM3Njc2NzYpO1xufVxuXG4uaW5zY3JpcGNpb24gLmZpZWxkX19pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmluc2NyaXBjaW9uIC5maWVsZF9faW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS11aUZpZWxkUGxhY2Vob2xkZXJDb2xvcik7XG59XG5cbi5pbnNjcmlwY2lvbiAuZmllbGRfX2lucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tdWlGaWVsZFBsYWNlaG9sZGVyQ29sb3IpO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5pbnNjcmlwY2lvbiAuYS1maWVsZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5zY3JpcGNpb24gLmEtZmllbGRfX2lucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5zY3JpcGNpb24gLmEtZmllbGRfX2lucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5zY3JpcGNpb24gLmEtZmllbGQge1xuICAgIC0tdWlGaWVsZEhlaWdodDogdmFyKC0tZmllbGRIZWlnaHQsIDI4cHgpO1xuICAgIC0tdWlGaWVsZEJvcmRlcldpZHRoOiB2YXIoLS1maWVsZEJvcmRlcldpZHRoLCAycHgpO1xuICAgIC0tdWlGaWVsZEJvcmRlckNvbG9yOiB2YXIoLS1maWVsZEJvcmRlckNvbG9yKTtcbiAgICAtLXVpRmllbGRQYWRkaW5nUmlnaHQ6IHZhcigtLWZpZWxkUGFkZGluZ1JpZ2h0LCAxNXB4KTtcbiAgICAtLXVpRmllbGRQYWRkaW5nQm90dG9tOiB2YXIoLS1maWVsZFBhZGRpbmdCb3R0b20sIDE1cHgpO1xuICAgIC0tdWlGaWVsZFBhZGRpbmdMZWZ0OiB2YXIoLS1maWVsZFBhZGRpbmdMZWZ0LCAwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5pbnNjcmlwY2lvbiAuYS1maWVsZCB7XG4gICAgICAgIC0tdWlGaWVsZEhlaWdodDogdmFyKC0tZmllbGRIZWlnaHQsIDM4cHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmluc2NyaXBjaW9uIC5hLWZpZWxkIHtcbiAgICAgICAgLS11aUZpZWxkSGVpZ2h0OiB2YXIoLS1maWVsZEhlaWdodCwgNDRweCk7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuaW5zY3JpcGNpb24gLmEtZmllbGQge1xuICAgICAgICAtLXVpRmllbGRIZWlnaHQ6IHZhcigtLWZpZWxkSGVpZ2h0LCA2NHB4KTtcbiAgICB9XG59XG5cbi5pbnNjcmlwY2lvbiAuYS1maWVsZCAuYS1maWVsZF9faW5wdXQge1xuICAgIGhlaWdodDogdmFyKC0tdWlGaWVsZEhlaWdodCk7XG4gICAgcGFkZGluZzogMCB2YXIoLS11aUZpZWxkUGFkZGluZ1JpZ2h0KSAwIHZhcigtLXVpRmllbGRQYWRkaW5nTGVmdCk7XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tdWlGaWVsZEJvcmRlcldpZHRoKSBzb2xpZCB2YXIoLS11aUZpZWxkQm9yZGVyQ29sb3IpO1xufVxuXG4uaW5zY3JpcGNpb24gLmEtZmllbGQgLmEtZmllbGRfX2lucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkIC5hLWZpZWxkX19pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5pbnNjcmlwY2lvbiAuYS1maWVsZCAuYS1maWVsZF9faW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil+LmEtZmllbGRfX2xhYmVsLXdyYXAgLmEtZmllbGRfX2xhYmVsIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvdHRvbTogdmFyKC0tdWlGaWVsZFBhZGRpbmdCb3R0b20pO1xufVxuXG4uaW5zY3JpcGNpb24gLmEtZmllbGQgLmEtZmllbGRfX2lucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5pbnNjcmlwY2lvbiAuYS1maWVsZCAuYS1maWVsZF9faW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkIC5hLWZpZWxkX19sYWJlbC13cmFwIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogdmFyKC0tdWlGaWVsZEhlaWdodCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkIC5hLWZpZWxkX19sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IHZhcigtLXVpRmllbGRQYWRkaW5nTGVmdCk7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIC44ZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjJzIGN1YmljLWJlemllcigwLjksIC0wLjE1LCAwLjEsIDEuMTUpLCBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XG4gICAgd2lsbC1jaGFuZ2U6IGJvdHRvbSwgb3BhY2l0eTtcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkIC5hLWZpZWxkX19pbnB1dDpmb2N1c34uYS1maWVsZF9fbGFiZWwtd3JhcCAuYS1maWVsZF9fbGFiZWwge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm90dG9tOiB2YXIoLS11aUZpZWxkSGVpZ2h0KTtcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkX2ExIC5hLWZpZWxkX19pbnB1dCB7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gICAgd2lsbC1jaGFuZ2U6IGJvcmRlci1jb2xvcjtcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkX2ExIC5hLWZpZWxkX19pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWVsZEJvcmRlckNvbG9yQWN0aXZlKTtcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkX2EyIC5hLWZpZWxkX19sYWJlbC13cmFwOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiB2YXIoLS11aUZpZWxkQm9yZGVyV2lkdGgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkQm9yZGVyQ29sb3JBY3RpdmUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWxsLWNoYW5nZTogd2lkdGg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4yODVzIGVhc2Utb3V0O1xufVxuXG4uaW5zY3JpcGNpb24gLmEtZmllbGRfYTIgLmEtZmllbGRfX2lucHV0OmZvY3Vzfi5hLWZpZWxkX19sYWJlbC13cmFwOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkX2EzIHtcbiAgICBwYWRkaW5nLXRvcDogMS41ZW07XG59XG5cbi5pbnNjcmlwY2lvbiAuYS1maWVsZF9hMyAuYS1maWVsZF9fbGFiZWwtd3JhcDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlcjogdmFyKC0tdWlGaWVsZEJvcmRlcldpZHRoKSBzb2xpZCB2YXIoLS1maWVsZEJvcmRlckNvbG9yQWN0aXZlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIGhlaWdodDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xufVxuXG4uaW5zY3JpcGNpb24gLmEtZmllbGRfYTMgLmEtZmllbGRfX2lucHV0OmZvY3Vzfi5hLWZpZWxkX19sYWJlbC13cmFwOmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmluc2NyaXBjaW9uIC5hLWZpZWxkX2EzIC5hLWZpZWxkX19pbnB1dDpmb2N1c34uYS1maWVsZF9fbGFiZWwtd3JhcCAuYS1maWVsZF9fbGFiZWwge1xuICAgIGJvdHRvbTogY2FsYyh2YXIoLS11aUZpZWxkSGVpZ2h0KSArIC41ZW0pO1xufVxuXG4uaW5zY3JpcGNpb24gLmZpZWxkIHtcbiAgICAtLWZpZWxkQm9yZGVyQ29sb3I6ICNkMWM0ZTk7XG4gICAgLS1maWVsZEJvcmRlckNvbG9yQWN0aXZlOiAjNjczYWI3O1xufVxuXG4uaW5zY3JpcGNpb24gc2VsZWN0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5pbnNjcmlwY2lvbiBzZWxlY3Qge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmluc2NyaXBjaW9uIHNlbGVjdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuaW5zY3JpcGNpb24gc2VsZWN0IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICB9XG59XG5cbi5pbnNjcmlwY2lvbiBzZWxlY3Q6Oi1tcy1leHBhbmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnNjcmlwY2lvbiAuc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgYmFja2dyb3VuZDogdHJhc25zcGFyZW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmluc2NyaXBjaW9uIHNlbGVjdCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgIGNvbG9yOiAjMjgwMDcxO1xufVxuXG4uaW5zY3JpcGNpb24gLnNlbGVjdDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcXDI1QkUnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICMyODAwNzE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2U7XG59XG5cbi5pbnNjcmlwY2lvbiAuc2VsZWN0OmhvdmVyOjphZnRlciB7XG4gICAgY29sb3I6ICNmODQzM2M7XG59XG5cbi5pbnNjcmlwY2lvbiAuY2FyZCB7XG4gICAgLyogd2lkdGg6IDUwMHB4O1xuXHQgKi9cbiAgICAvKiBtYXJnaW46IDUwcHggYXV0bztcblx0ICovXG4gICAgLyogY2xlYXI6IGJvdGg7XG5cdCAqL1xuICAgIC8qIGRpc3BsYXk6IGJsb2NrO1xuXHQgKi9cbiAgICAvKiBwYWRkaW5nOiAwcHggMHB4O1xuXHQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7XG5cdCAqL1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmluc2NyaXBjaW9uIC5pbnB1dC10aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIzI4MDA3MTtcbn1cblxuLmluc2NyaXBjaW9uIC5jaGVja2JveC1sYWJlbCB7XG4gICAgLyogZGlzcGxheTogYmxvY2s7XG5cdCAqL1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICovXG4gICAgLyogbWFyZ2luOiBhdXRvO1xuXHQgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLyogZm9udC1zaXplOiAyMnB4O1xuXHQgKi9cbiAgICAvKiBjbGVhcjogYm90aDtcblx0ICovXG59XG5cbi5pbnNjcmlwY2lvbiAuY2hlY2tib3gtbGFiZWwgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5zY3JpcGNpb24gLmNoZWNrYm94LWxhYmVsIC5jaGVja2JveC1jdXN0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjcwMTcyO1xufVxuXG4uaW5zY3JpcGNpb24gLmNoZWNrYm94LWxhYmVsIGlucHV0OmNoZWNrZWR+LmNoZWNrYm94LWN1c3RvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzI3MDE3Mjtcbn1cblxuLmluc2NyaXBjaW9uIC5jaGVja2JveC1sYWJlbCAuY2hlY2tib3gtY3VzdG9tOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbGVmdDogMTJweDtcbiAgICB0b3A6IDEycHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjMjcwMTcyO1xuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuXG4uaW5zY3JpcGNpb24gLmNoZWNrYm94LWxhYmVsIGlucHV0OmNoZWNrZWR+LmNoZWNrYm94LWN1c3RvbTo6YWZ0ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbGVmdDogOHB4O1xuICAgIHRvcDogM3B4O1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlcjogc29saWQgIzI3MDE3MjtcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5pbnNjcmlwY2lvbiAuY2hlY2tib3gtbGFiZWwgLmNoZWNrYm94LWN1c3RvbTo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjcwMTcyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4uaW5zY3JpcGNpb24gLmNoZWNrYm94LWxhYmVsIGlucHV0OmNoZWNrZWR+LmNoZWNrYm94LWN1c3RvbTo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtM3B4O1xuICAgIHRvcDogLTNweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5pbnNjcmlwY2lvbiAucmVjdGFuZ2xlIHtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcwMTcyO1xufVxuXG4uaW5zY3JpcGNpb24gLm1vZGFsLWRpYWxvZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnNjcmlwY2lvbiAubW9kYWwtZGlhbG9nIC5tb2RhbC1oZWFkZXIge1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG5cdCAqL1xuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHQgKi9cbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdCAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHJlbTtcbn1cblxuLmluc2NyaXBjaW9uIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjMjcwMTcyO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICMyNzAxNzI7XG4gICAgb3BhY2l0eTogMC44O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresencialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presencial',
                templateUrl: './presencial.component.html',
                styleUrls: ['./presencial.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_api_idemRelCursosModulos_service__WEBPACK_IMPORTED_MODULE_3__["IdemRelCursosModulosService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_5__["IdemCursosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/idemCursos.service */ "./src/services/api/idemCursos.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_ng_template_57_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " NEGOCIOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemcurso_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemcurso_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemcurso_r2.descripcion, "... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/curso/", itemcurso_r2.idcurso, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_template_57_div_3_Template, 14, 3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.idemcursoList.slice(0, 2));
} }
class HomeComponent {
    constructor(idemCursosService, config) {
        this.idemCursosService = idemCursosService;
        this.index = 0;
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    ngOnInit() {
        this.cargarCursos();
    }
    cargarCursos() {
        this.idemCursosService.idemCursosGet().subscribe(data => {
            this.idemcursoList = data;
        });
    }
    getCursos(cantidad) {
        console.log('no entra');
        let arrayselect;
        if (cantidad > this.idemcursoList.length) {
            cantidad = this.idemcursoList.length;
        }
        if (this.index >= this.idemcursoList.length) {
            this.index = 0;
        }
        for (; this.index < cantidad; this.index++) {
            arrayselect.push(this.idemcursoList[this.index]);
        }
        console.log(arrayselect);
        return arrayselect;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_1__["IdemCursosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 314, vars: 0, consts: [["id", "page_1", 1, "HeroMain", "p-0", "container-fluid", 2, "position", "relative"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "p-0", "slide", 2, "text-shadow", "rgb(51, 51, 51) 1px 1px 2px"], ["id", "carousel1___BV_inner_", "role", "list", 1, "carousel-inner"], ["role", "listitem", "aria-current", "true", "aria-posinset", "1", "aria-setsize", "3", "id", "__BVID__18", 1, "carousel-item", "active", 2, "height", "100vh"], [1, "carousel-caption"], [1, "row", "h-100"], [1, "screen1", "column", "h-100", "col-12", "col-md-8", "p-0", 2, "background-image", "url(../../../assets/css/images/Home/Fotos-IDEM--01.png)"], [1, "slideText", "d-flex", "flex-column", "justify-content-center", "h-100", "w-100", "px-0"], [1, "hero-title"], [1, "screen2", "column", "h-100", "col-0", "col-md-4", "p-0"], [1, "LogoBlanco"], ["role", "listitem", "aria-current", "false", "aria-posinset", "2", "aria-setsize", "3", "id", "__BVID__19", 1, "carousel-item", 2, "height", "100vh"], [1, "screen1", "column", "h-100", "col-12", "col-md-8", "p-0", 2, "background-image", "url(../../../assets/css/images/Home/Fotos-IDEM--02.png)"], ["role", "listitem", "aria-current", "false", "aria-posinset", "3", "aria-setsize", "3", "id", "__BVID__20", 1, "carousel-item", 2, "height", "100vh"], [1, "screen1", "column", "h-100", "col-12", "col-md-8", "p-0", 2, "background-image", "url(../../../assets/css/images/Home/Fotos-IDEM--03.png)"], ["href", "#", "role", "button", "aria-controls", "carousel1___BV_inner_", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#", "role", "button", "aria-controls", "carousel1___BV_inner_", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "carousel1___BV_indicators_", "aria-hidden", "true", "aria-label", "Select a slide to display", "aria-owns", "carousel1___BV_inner_", 1, "carousel-indicators", 2, "display", "none"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", 1, "active"], ["role", "button", "id", "carousel1___BV_indicator_2_", "tabindex", "-1", "aria-current", "false", "aria-label", "Goto Slide 2", "aria-controls", "carousel1___BV_inner_", 1, ""], ["role", "button", "id", "carousel1___BV_indicator_3_", "tabindex", "-1", "aria-current", "false", "aria-label", "Goto Slide 3", "aria-controls", "carousel1___BV_inner_", 1, ""], [1, "franja-azul", "d-flex", "justify-content-end", "col-9", "col-md-7", "p-0"], [1, "px-4", "franja-option", "h-100", "d-flex", "flex-column", "justify-content-center"], [1, "px-4", "pr-5", "franja-option", "h-100", "d-flex", "flex-column", "justify-content-center"], ["id", "page_2", 1, "cursosOnlineDesktop", "container-fluid", "d-flex", "flex-column", "justify-content-center", "inf", "px-2", "px-lg-5", 2, "height", "100vh", "padding-top", "90px"], [1, "d-flex", "justify-content-center", "py-0"], [1, "text_container"], [1, "title-text", "d-flex", "justify-content-between"], [1, "section-title"], ["href", "/cursos/online", 1, "section-title"], [1, "d-flex", "w-100", "justify-content-center"], ["id", "carousel1", "interval", "4000", "controls", "", 1, "carousel", 2, "height", "100vh"], ["ngbSlide", "", "style", " height: 70vh;"], ["id", "page_3", 1, "cursospresenciales", "p-0", "container-fluid"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "p-0", "slide", 2, "background", "rgb(171, 171, 171)", "text-shadow", "rgb(51, 51, 51) 1px 1px 2px"], ["role", "listitem", "aria-current", "true", "aria-posinset", "1", "aria-setsize", "1", "id", "__BVID__26", 1, "carousel-item", "active", 2, "background", "rgb(171, 171, 171)", "height", "100vh"], ["src", "css/images/CursosPresenciales/1.jpg", "width", "1024", "height", "480", 1, "img-fluid", "w-100", "d-block"], [1, "uno", "h-100", "col-8", "p-0", "col"], [1, "container", "screen1", "d-flex", "flex-column", "justify-content-center", "h-100", "p-5", "pb-0"], [1, "col-10", "texto", "h-100", "text-left", "d-flex", "flex-column", "justify-content-between", "col"], ["href", "/presenciales/10"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "small-text", "proximamente"], [1, "normal-text", "cursos-text", "d-flex"], [1, "pin-icon", "mr-1"], [1, "linkto", "d-flex"], [1, "d-flex", "flex-column", "py-1"], [1, "flecha"], [1, "small-text", "ver_mas"], [1, "normal-text", "ponente"], [1, "row"], [1, "col-md-6", "autor"], [1, "h-100", "col-4", "p-0", "col"], [1, "screen2", "h-100", "b-100", "d-flex", "flex-column", "justify-content-center"], [1, "white-container", "d-flex", "flex-column", "justify-content-center"], [1, "normal-text", "cursos-text"], ["id", "page_4", 1, "beneficios", "container-fluid", "w-100"], ["href", "https://fonts.googleapis.com/css?family=Merriweather", "rel", "stylesheet"], [1, "columna1", "column", "col-4", "col-lg-4", "d-flex", "justify-content-end"], [1, "text-wrapper", "h-100", "d-flex", "flex-column", "justify-content-center", "p-lg-4"], [1, "p", "normal-text"], [1, "columna2", "column", "col-8", "col-lg-8"], [1, "row", "icons-wrapper", "d-flex", "justify-content-center", "flex-column", "h-100", "col-10", "col-lg-8"], [1, "w-100", "d-flex"], [1, "column", "col-3", "d-flex", "flex-column", "justify-content-start"], [1, "d-flex", "justify-content-center", "pb-2", "p-lg-2"], [1, "icon1", 2, "background-image", "url(../../../assets/css/images/beneficios/1.png)"], [1, "icon-text", "text-center", "small-text"], [1, "icon1", 2, "background-image", "url(../../../assets/css/images/beneficios/2.png)"], [1, "icon1", 2, "background-image", "url(../../../assets/css/images/beneficios/3.png)"], [1, "icon1", 2, "background-image", "url(../../../assets/css/images/beneficios/4.png)"], ["id", "page_5", 1, "container-fluid", "main_testimonials", "p-0"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "p-0", "m-0", "slide", 2, "text-shadow", "rgb(51, 51, 51) 1px 1px 2px"], ["role", "listitem", "aria-current", "false", "aria-posinset", "1", "aria-setsize", "2", "id", "__BVID__30", "aria-hidden", "true", 1, "carousel-item", 2, "height", "100vh"], [1, "d-flex", "m-0", "p-0", "h-100", "w-100"], [1, "column", "h-100", "col-3", "p-0"], [1, "screen1", "h-100", "b-100"], [1, "white_container"], [1, "normal-text"], [1, "column", "uno", "h-100", "col-9", "p-0"], [1, "container", "screen2", "d-flex", "justify-content-center", "h-100", "d-flex", "justify-content-start"], [1, "d-flex", "justify-content-center", "flex-column", 2, "z-index", "2"], [1, "text-container"], [1, "hero-title", "comillas"], [1, "normal-text", "nombre", "pt-2"], ["role", "listitem", "aria-current", "true", "aria-posinset", "2", "aria-setsize", "2", "id", "__BVID__31", "aria-hidden", "false", 1, "carousel-item", "active", 2, "height", "100vh"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "false", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__30", 1, ""], ["role", "button", "id", "carousel1___BV_indicator_2_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 2", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__31", 1, "active"], ["fluid", "alt", "id", "page_6", 1, "estartegicAllies", "container-fluid", "w-100", "px-6"], [1, "column", "col-2", "d-flex", "justify-content-center", "h-100"], [1, "column", "d-flex", "flex-column", "justify-content-center"], [1, "section-title", "blog_tittle"], [1, "column", "col-10", "flex-column", "justify-content-center"], ["role", "region", "id", "carousel1", "aria-busy", "false", 1, "carousel", "carr", "h-100", "slide"], ["role", "listitem", "aria-current", "true", "aria-posinset", "2", "aria-setsize", "2", "id", "__BVID__35", "aria-hidden", "false", 1, "carousel-item", "carr", "asda", "h-100", "active", 2, "max-height", "250px", "background-size", "cover"], ["src", "/noticias/1.jpg", 1, "img-fluid", "w-100", "d-block"], [1, "carousel-caption", 2, "position", "initial", "width", "90%", "padding-top", "60px", "margin-left", "52px"], [1, "col-4", "d-flex", "flex-column", "justify-content-center", "col"], [1, "card", "d-flex", "flex-column", "justify-content-start", "pt-0", "text-center"], [1, "card-image", "ci1", "w-100", "pt-0", "d-flex", "flex-column", "justify-content-end"], [1, "card-image", "ci2", "w-100", "pt-0", "d-flex", "flex-column", "justify-content-end"], [1, "card-image", "ci3", "w-100", "pt-0", "d-flex", "flex-column", "justify-content-end"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "false", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__34", 1, ""], ["role", "button", "id", "carousel1___BV_indicator_2_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 2", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__35", 1, "active"], ["fluid", "alt", "id", "page_7", 1, "BlogDesktop", "container-fluid", "w-100", "px-6"], ["role", "listitem", "aria-current", "false", "aria-posinset", "1", "aria-setsize", "2", "id", "__BVID__38", "aria-hidden", "true", 1, "carousel-item", "carr", "asda", "h-100", 2, "max-height", "250px", "background-size", "cover"], [1, "w-100", "d-flex", "justify-content-start"], [1, "small-text", "cursos-button", "px-2", "py-0", "w-50"], [1, "card-text", "w-100", "d-flex", "flex-column", "justify-content-start", "pt-0"], [1, "small-text", "cursos-text"], ["role", "listitem", "aria-current", "true", "aria-posinset", "2", "aria-setsize", "2", "id", "__BVID__39", "aria-hidden", "false", 1, "carousel-item", "carr", "asda", "h-100", "active", 2, "max-height", "250px", "background-size", "cover"], ["role", "button", "id", "carousel1___BV_indicator_1_", "tabindex", "-1", "aria-current", "false", "aria-label", "Goto Slide 1", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__38", 1, ""], ["role", "button", "id", "carousel1___BV_indicator_2_", "tabindex", "-1", "aria-current", "true", "aria-label", "Goto Slide 2", "aria-controls", "carousel1___BV_inner_", "aria-describedby", "__BVID__39", 1, "active"], [1, "container", "d-flex", "justify-content-center", "w-100", "h-100", "px-0"], [1, "card-container", "px-0", "w-100", "h-100", "m-0"], ["class", "card-wrapper d-flex justify-content-center col-6 px-2 py-2", 4, "ngFor", "ngForOf"], [1, "card-wrapper", "d-flex", "justify-content-center", "col-6", "px-2", "py-2"], [1, "card"], [1, "image"], [1, "subtitle", "px-4", "py-1", "d-flex", "justify-content-center", 2, "position", "absolute", "left", "0", "bottom", "0"], [1, "card-text"], [1, "title-wrapper", "d-flex", "justify-content-start", 2, "padding-right", "50px"], [1, "text-left", "cursos-title", "px-0"], [1, "text-wrapper"], [1, "small-text", "text-left", "pt-0", "pl-lg-1"], [3, "href"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " IDEM es una organizaci\u00F3n sin fines de lucro que tiene como misi\u00F3n descentralizar lacalidad educativa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Logramos nuestro objetivo mediante el desarrollo de cursos presenciales en provincia y cursos online. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Nuestros cursos se encuentran especializados en negocios y \u00E1reas afines como contabilidad, derecho, econom\u00EDa, entre otros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ol", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "CURSOS DE NEGOCIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "CURSOS DE TECNOLOGIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cursos Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ngb-carousel", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, HomeComponent_ng_template_57_Template, 4, 1, "ng-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "[NGIF](*)Pr\u00F3ximamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Arequipa / Set 28-29 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Seminario de derecho tributario*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Ver mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Ponente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Francisco Ruiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Gustavo Herr\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Roberto Polo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Eder Fuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Juan perez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Cursos Presenciales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Contamos tambi\u00E9n con los mejores cursos presenciales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "ol", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "link", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Cada curso online o presencial esta aval\u00E1do oficialmente por Idem, adem\u00E1s formar\u00E1s parte de una comunidad donde el dinero obtenido estar\u00E1 100% destinados a proyectos educativos para las personas con menos recursos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Aprenderas a tu propio ritmo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Los mejores profecionales te ense\u00F1ar\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Obtendr\u00E1s un certificado oficial.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Formar\u00E1s parte de una comunidad que genera el cambio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "link", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Testimonios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Hemos capacitado a miles de profesionales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Pude culminar mis estudios sin tener que viajar\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "-Jorge Castro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Testimonios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Hemos capacitado a miles de profesionales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Me alegr\u00F3 saber que al capacitarme, personas con menores recursos obtendr\u00EDan beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "-Christian Paredes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "ol", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "li", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Aliados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "ol", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "li", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "li", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h4", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "EL COMERCIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan dui eget tincidunt tristique Duis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "EL COMERCIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan dui eget tincidunt tristique Duis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "EL COMERCIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan dui eget tincidunt tristique Duis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "EL COMERCIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan dui eget tincidunt tristique Duis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "EL COMERCIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan dui eget tincidunt tristique Duis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "EL COMERCIO2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan dui eget tincidunt tristique Duis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Previous Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Next Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "ol", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "li", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "li", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@font-face {\n    font-family: FABRIKBOLD;\n    src: url('FABRIK-BOLD_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: FABRIK;\n    src: url('FABRIK-REGULAR_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: TIEMPO;\n    src: url('TIEMPOSHEADLINE-BLACK.OTF') format(\"opentype\");\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        width: 900px;\n        padding-left: 40px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        width: 1050px;\n        padding-left: 60px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        width: 1200px;\n        padding-left: 30px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .text_container[_ngcontent-%COMP%] {\n        width: 1400px;\n        padding-left: 20px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n    width: 700px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        width: 900px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        width: 1050px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        width: 1250px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n        width: 1450px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    position: inherit;\n    padding: 0;\n    left: 0;\n    bottom: 0;\n    height: 85vh;\n    width: 100%;\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n        max-width: 1250px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n        max-width: 1450px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n    max-width: 700px;\n    display: flex;\n    justify-content: center;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n        max-width: 900px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n        max-width: 1050px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n        max-width: 1200px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n        max-width: 1400px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n    max-width: 325px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        max-width: 420px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        max-width: 470px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        max-width: 580px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n        max-width: 690px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    max-width: 320px;\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        max-width: 400px;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        max-width: 450px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        max-width: 580px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        max-width: 690px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    background-image: url('Fotos-IDEM--15.png');\n    position: relative;\n    height: 60%;\n    width: 100%;\n    background-size: cover;\n    background-position: center;\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    color: #280071;\n    font-family: FABRIK;\n    background-color: #dcebec;\n    font-size: 10px;\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n        font-size: 14px;\n        line-height: 18px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n        font-size: 18px;\n        line-height: 22px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    background-color: #dcebec;\n    height: 40%;\n    width: 100%;\n    font-family: FABRIK;\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n    min-width: 120px;\n    align-items: start;\n    height: 60%;\n    padding-left: 25px;\n    padding-right: 5px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n        min-width: 140px;\n        height: 50%;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n        min-width: 180px;\n        height: 50%;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n        min-width: 200px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n        min-width: 240px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n    color: #fb4030;\n    font-size: 14px;\n    line-height: 15px;\n    text-shadow: none;\n    font-family: TIEMPO;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 18px;\n        line-height: 22px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n        font-size: 22px;\n        line-height: 26px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    position: relative;\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n    background-image: url('flechaRoja.png');\n    background-size: cover;\n    right: 20px;\n    bottom: -10px;\n    height: 14px;\n    width: 24px;\n}\n\n@media screen and (min-width: 1024px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n        right: 20px;\n        bottom: -20px;\n        height: 16px;\n        width: 28px;\n    }\n}\n\n@media screen and (min-width: 1232px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n        right: 20px;\n        bottom: -30px;\n        height: 16px;\n        width: 28px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n        right: 20px;\n        bottom: -40px;\n        height: 22px;\n        width: 36px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .flecha[_ngcontent-%COMP%] {\n        right: 20px;\n        bottom: -40px;\n        height: 22px;\n        width: 36px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .cursos-button[_ngcontent-%COMP%] {\n    background-color: #dcecec;\n    color: #43398a;\n    font-size: 13px;\n    letter-spacing: 3px;\n    text-shadow: none;\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    z-index: 15;\n    top: 50%;\n    height: 20px;\n    width: 20px;\n    opacity: 1;\n    background-size: cover;\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%], .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%], .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n@media screen and (min-width: 1440px) {\n    .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n        height: 30px;\n        width: 30px;\n    }\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    background-image: url(/r2.png);\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    background-image: url(/r1.png);\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .agregar-btn-selected[_ngcontent-%COMP%] {\n    max-height: 40px;\n    font-size: 14px;\n    border-color: #f94139;\n    font-family: FABRIK;\n    background-color: transparent;\n    border-radius: 0;\n}\n\n.cursosOnlineDesktop[_ngcontent-%COMP%]   .agregar-btn[_ngcontent-%COMP%] {\n    max-height: 40px;\n    border-color: transparent;\n    font-size: 14px;\n    font-family: FABRIK;\n    background-color: transparent;\n    border-radius: 0;\n    color: #280071;\n    min-width: 100px;\n}\n\n.estartegicAllies[_ngcontent-%COMP%] {\n    height: 250px;\n    background-color: #280071;\n    font-family: 'Merriweather', serif;\n    color: white;\n    font-size: 12px;\n}\n\n@media screen and (min-width: 1024px) {\n    .estartegicAllies[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .estartegicAllies[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .estartegicAllies[_ngcontent-%COMP%] {\n        height: 500px;\n    }\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .blog_tittle[_ngcontent-%COMP%] {\n    color: #dcebec;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    height: 100%;\n    visibility: hidden;\n    border-color: transparent;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    background-color: #280071;\n    border: none;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n    min-height: 100px;\n}\n\n@media screen and (min-width: 1024px) {\n    .estartegicAllies[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n        min-height: 120px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .estartegicAllies[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n        min-height: 150px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .estartegicAllies[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n        min-height: 180px;\n    }\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .ci1[_ngcontent-%COMP%] {\n    background-image: url('echecopar.png');\n    background-size: cover;\n    background-position: right;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .ci2[_ngcontent-%COMP%] {\n    background-image: url('utp--blanco.png');\n    background-size: cover;\n    background-position: right;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .ci3[_ngcontent-%COMP%] {\n    background-image: url('Iberica---blanco.png');\n    background-size: cover;\n    background-position: right;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .cursos-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 18px;\n    padding-right: 15%;\n    line-height: 19px;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .cursos-button[_ngcontent-%COMP%] {\n    font-size: 9px;\n    background-color: #280071;\n    color: white;\n    font-family: FABRIK;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .cursos-text[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    color: #dcebec;\n    opacity: 0.8;\n    text-align: left;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .icon1[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    background-image: url(/FooterXX/American.png);\n    background-size: cover;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .icon2[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    background-image: url(/FooterXX/Dinner.png);\n    background-size: cover;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .icon3[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    background-image: url(/FooterXX/PayPal.png);\n    background-size: cover;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .icon4[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    background-image: url(/FooterXX/VISA.png);\n    background-size: cover;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .icon5[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    background-image: url(/FooterXX/CARTA.png);\n    background-size: cover;\n}\n\n.estartegicAllies[_ngcontent-%COMP%]   .carr[_ngcontent-%COMP%] {\n    min-height: 230px;\n}\n\n@media screen and (min-width: 1024px) {\n    .estartegicAllies[_ngcontent-%COMP%]   .carr[_ngcontent-%COMP%] {\n        min-height: 290px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .estartegicAllies[_ngcontent-%COMP%]   .carr[_ngcontent-%COMP%] {\n        min-height: 360px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .estartegicAllies[_ngcontent-%COMP%]   .carr[_ngcontent-%COMP%] {\n        min-height: 420px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixnREFBK0U7QUFDbkY7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbURBQWtGO0FBQ3RGOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdEQUF1RjtBQUMzRjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdC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RUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDJDQUEyQztJQUMzQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlDQUF5QztJQUN6QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDBDQUEwQztJQUMxQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IEZBQlJJS0JPTEQ7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvZm9udHMvRkFCUklLLUJPTERfMC5PVEYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xuICAgIHNyYzogdXJsKC4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2ZvbnRzL0ZBQlJJSy1SRUdVTEFSXzAuT1RGKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFRJRU1QTztcbiAgICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9mb250cy9USUVNUE9TSEVBRExJTkUtQkxBQ0suT1RGKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLnRleHRfY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAudGV4dF9jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTA1MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAudGV4dF9jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTIwMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAudGV4dF9jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTQwMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwge1xuICAgIHdpZHRoOiA3MDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIHtcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIzMnB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIHtcbiAgICAgICAgd2lkdGg6IDEwNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCB7XG4gICAgICAgIHdpZHRoOiAxMjUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwge1xuICAgICAgICB3aWR0aDogMTQ1MHB4O1xuICAgIH1cbn1cblxuLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogODV2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgICAgICBtYXgtd2lkdGg6IDE0NTBweDtcbiAgICB9XG59XG5cbi5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogMzI1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciB7XG4gICAgICAgIG1heC13aWR0aDogNDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjMycHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDQ3MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciB7XG4gICAgICAgIG1heC13aWR0aDogNjkwcHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQge1xuICAgIG1heC13aWR0aDogMzIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCB7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQge1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCB7XG4gICAgICAgIG1heC13aWR0aDogNjkwcHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvSG9tZS9Gb3Rvcy1JREVNLS0xNS5wbmcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5pbWFnZSAuc3VidGl0bGUge1xuICAgIGNvbG9yOiAjMjgwMDcxO1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZWJlYztcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuaW1hZ2UgLnN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuaW1hZ2UgLnN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB9XG59XG5cbi5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZWJlYztcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xufVxuXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGl0bGUtd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkLXRleHQgLnRpdGxlLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50aXRsZS13cmFwcGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMjQwcHg7XG4gICAgfVxufVxuXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGl0bGUtd3JhcHBlciAuY3Vyc29zLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZiNDAzMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFRJRU1QTztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkLXRleHQgLnRpdGxlLXdyYXBwZXIgLmN1cnNvcy10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGl0bGUtd3JhcHBlciAuY3Vyc29zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50aXRsZS13cmFwcGVyIC5jdXJzb3MtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIH1cbn1cblxuLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkLXRleHQgLnRleHQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50ZXh0LXdyYXBwZXIgLmZsZWNoYSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2N1cnNvU2VsZWN0L2ZsZWNoYVJvamEucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGV4dC13cmFwcGVyIC5mbGVjaGEge1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMzJweCkge1xuICAgIC5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY2FyZC1jb250YWluZXIgLmNhcmQtd3JhcHBlciAuY2FyZCAuY2FyZC10ZXh0IC50ZXh0LXdyYXBwZXIgLmZsZWNoYSB7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICBib3R0b206IC0zMHB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jYXJkLWNvbnRhaW5lciAuY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkLXRleHQgLnRleHQtd3JhcHBlciAuZmxlY2hhIHtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogLTQwcHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNhcmQtY29udGFpbmVyIC5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGV4dCAudGV4dC13cmFwcGVyIC5mbGVjaGEge1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAtNDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICB9XG59XG5cbi5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jdXJzb3MtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlY2VjO1xuICAgIGNvbG9yOiAjNDMzOThhO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgei1pbmRleDogMTU7XG4gICAgdG9wOiA1MCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsLWNvbnRyb2wtcHJldiAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsLWNvbnRyb2wtcHJldiAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24sXG4uY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbiAgICAuY3Vyc29zT25saW5lRGVza3RvcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG59XG5cbi5jdXJzb3NPbmxpbmVEZXNrdG9wIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcjIucG5nKTtcbn1cblxuLmN1cnNvc09ubGluZURlc2t0b3AgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9yMS5wbmcpO1xufVxuXG4uY3Vyc29zT25saW5lRGVza3RvcCAuYWdyZWdhci1idG4tc2VsZWN0ZWQge1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1jb2xvcjogI2Y5NDEzOTtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5jdXJzb3NPbmxpbmVEZXNrdG9wIC5hZ3JlZ2FyLWJ0biB7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgY29sb3I6ICMyODAwNzE7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmVzdGFydGVnaWNBbGxpZXMge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MDA3MTtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5lc3RhcnRlZ2ljQWxsaWVzIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5lc3RhcnRlZ2ljQWxsaWVzIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5lc3RhcnRlZ2ljQWxsaWVzIHtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG59XG5cbi5lc3RhcnRlZ2ljQWxsaWVzIC5ibG9nX3RpdHRsZSB7XG4gICAgY29sb3I6ICNkY2ViZWM7XG59XG5cbi5lc3RhcnRlZ2ljQWxsaWVzIC5pbWctZmx1aWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmVzdGFydGVnaWNBbGxpZXMgLmNhcmQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwMDcxO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmVzdGFydGVnaWNBbGxpZXMgLmNhcmQtaW1hZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZXN0YXJ0ZWdpY0FsbGllcyAuY2FyZC1pbWFnZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmVzdGFydGVnaWNBbGxpZXMgLmNhcmQtaW1hZ2Uge1xuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5lc3RhcnRlZ2ljQWxsaWVzIC5jYXJkLWltYWdlIHtcbiAgICAgICAgbWluLWhlaWdodDogMTgwcHg7XG4gICAgfVxufVxuXG4uZXN0YXJ0ZWdpY0FsbGllcyAuY2kxIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvYWxpYWRvcy9lY2hlY29wYXIucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuXG4uZXN0YXJ0ZWdpY0FsbGllcyAuY2kyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvYWxpYWRvcy91dHAtLWJsYW5jby5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG59XG5cbi5lc3RhcnRlZ2ljQWxsaWVzIC5jaTMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9hbGlhZG9zL0liZXJpY2EtLS1ibGFuY28ucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuXG4uZXN0YXJ0ZWdpY0FsbGllcyAuY3Vyc29zLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLmVzdGFydGVnaWNBbGxpZXMgLmN1cnNvcy1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODAwNzE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBGQUJSSUs7XG59XG5cbi5lc3RhcnRlZ2ljQWxsaWVzIC5jdXJzb3MtdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBjb2xvcjogI2RjZWJlYztcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmVzdGFydGVnaWNBbGxpZXMgLmljb24xIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9Gb290ZXJYWC9BbWVyaWNhbi5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5lc3RhcnRlZ2ljQWxsaWVzIC5pY29uMiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvRm9vdGVyWFgvRGlubmVyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmVzdGFydGVnaWNBbGxpZXMgLmljb24zIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9Gb290ZXJYWC9QYXlQYWwucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXN0YXJ0ZWdpY0FsbGllcyAuaWNvbjQge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL0Zvb3RlclhYL1ZJU0EucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXN0YXJ0ZWdpY0FsbGllcyAuaWNvbjUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL0Zvb3RlclhYL0NBUlRBLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmVzdGFydGVnaWNBbGxpZXMgLmNhcnIge1xuICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZXN0YXJ0ZWdpY0FsbGllcyAuY2FyciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI5MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmVzdGFydGVnaWNBbGxpZXMgLmNhcnIge1xuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5lc3RhcnRlZ2ljQWxsaWVzIC5jYXJyIHtcbiAgICAgICAgbWluLWhlaWdodDogNDIwcHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_api_idemCursos_service__WEBPACK_IMPORTED_MODULE_1__["IdemCursosService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function RegisterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Validar Datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Obten recomendaciones personalizadas seg\u00FAn tus antecedentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Registrate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_0_Template_p_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.loguear(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Entrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_0_Template_p_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signInWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Obten recomendaciones personalizadas seg\u00FAn tus antecedentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experiencia Laboral");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nivel de experiencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Option 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Empleador");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Educaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "T\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Bachiller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Maestria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Doctorado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Universidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Campo o especializaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Bachiller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Maestria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Doctorado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Objetivos Profesionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Profesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Bachiller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Maestria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Doctorado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Industria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Omitir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Continuar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenido a IDEM ", ctx_r1.user.name, "");
} }
class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.logueado = 0;
    }
    ngOnInit() {
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID);
        this.loguear(1);
    }
    loguear(valor) {
        this.logueado = valor;
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "d-flex", "align-items-center"], ["src", "../../../assets/css/images/LogoBlanco.png", "width", "40px"], [2, "margin-right", "56px", "margin-left", "10px"], [2, "font-size", "10px"], [1, "fonfoFormulario"], [1, "container", 2, "margin-top", "18px"], [1, "row"], [1, "col"], [1, "titulosLogin", 2, "margin-top", "15px"], [1, "col-md-4", 2, "margin-right", "30px"], ["appearance", "outline"], ["matInput", "", "placeholder", "correo@electronico.com"], [1, "col-md-4"], ["matInput", "", "type", "password"], [1, "align-self-end"], [1, "text-lg-left", "botonesLogin", 3, "click"], [1, "d-flex", "align-items-start", "flex-column", "bd-highlight", "mb-3", 2, "height", "240px"], [1, "mb-auto", "p-2", "bd-highlight"], [1, "p-2", "bd-highlight"], [1, "align-text-bottom", "text-lg-left", "botonesLogin"], [1, "align-text-bottom", "text-lg-left", "botonesLogin", 2, "font-size", "10px", 3, "click"], [1, "container"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ejemplo: Gerente de productos"], ["value", "option1"], ["value", "option2"], ["value", "option3"], ["matInput", "", "placeholder", "Ejemplo: Microsft"], ["matInput", "", "placeholder", "Ejemplo: Universidad de Lima"], [1, "btn", "btn-danger", "omitir-btn"], [1, "btn", "btn-danger", "continuar-btn", 2, "margin-left", "10px"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterComponent_div_0_Template, 59, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_1_Template, 102, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logueado == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logueado == 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["@font-face {\n    font-family: FABRIKBOLD;\n    src: url('FABRIK-BOLD_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: FABRIK;\n    src: url('FABRIK-REGULAR_0.OTF') format(\"opentype\");\n}\n\n@font-face {\n    font-family: TIEMPO;\n    src: url('TIEMPOSHEADLINE-BLACK.OTF') format(\"opentype\");\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n    background-color: #280071;\n    font-family: 'Merriweather', serif;\n}\n\n.fonfoFormulario[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    background-color: #280071;\n    color: white;\n}\n\n.continuar-btn[_ngcontent-%COMP%], .omitir-btn[_ngcontent-%COMP%] {\n    font-family: 'Merriweather', serif;\n    border-color: transparent;\n    border-radius: 0px;\n    font-family: FABRIK;\n    font-size: 14px;\n}\n\n.continuar-btn[_ngcontent-%COMP%] {\n    border-color: white;\n    background-color: white;\n    color: #280071;\n}\n\n.omitir-btn[_ngcontent-%COMP%] {\n    border-color: white;\n    background-color: transparent;\n}\n\n@media screen and (min-width: 1024px) {\n    .continuar-btn[_ngcontent-%COMP%], .omitir-btn[_ngcontent-%COMP%] {\n        font-size: 13px;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n    .continuar-btn[_ngcontent-%COMP%], .omitir-btn[_ngcontent-%COMP%] {\n        font-size: 22px;\n    }\n}\n\n@media screen and (min-width: 2000px) {\n    .continuar-btn[_ngcontent-%COMP%], .omitir-btn[_ngcontent-%COMP%] {\n        font-size: 32px;\n    }\n}\n\n.task-header[_ngcontent-%COMP%] {\n    background-color: transparent;\n    padding: 0 5px;\n    height: 20px;\n}\n\n.fx-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    text-align: left;\n    font-size: 12px;\n    font-family: 'Merriweather', serif;\n}\n\n.botonesLogin[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: #f8433c;\n    font-family: TIEMPO;\n}\n\n.titulosLogin[_ngcontent-%COMP%] {\n    color: white;\n    font-family: TIEMPO;\n    font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdEQUErRTtBQUNuRjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtREFBa0Y7QUFDdEY7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0RBQXVGO0FBQzNGOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IEZBQlJJS0JPTEQ7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Nzcy9pbWFnZXMvZm9udHMvRkFCUklLLUJPTERfMC5PVEYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogRkFCUklLO1xuICAgIHNyYzogdXJsKC4uLy4uLy4uL2Fzc2V0cy9jc3MvaW1hZ2VzL2ZvbnRzL0ZBQlJJSy1SRUdVTEFSXzAuT1RGKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFRJRU1QTztcbiAgICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvY3NzL2ltYWdlcy9mb250cy9USUVNUE9TSEVBRExJTkUtQkxBQ0suT1RGKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwMDcxO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG59XG5cbi5mb25mb0Zvcm11bGFyaW8ge1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MDA3MTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250aW51YXItYnRuLFxuLm9taXRpci1idG4ge1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IEZBQlJJSztcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250aW51YXItYnRuIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjMjgwMDcxO1xufVxuXG4ub21pdGlyLWJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmNvbnRpbnVhci1idG4sXG4gICAgLm9taXRpci1idG4ge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuY29udGludWFyLWJ0bixcbiAgICAub21pdGlyLWJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jb250aW51YXItYnRuLFxuICAgIC5vbWl0aXItYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbn1cblxuLnRhc2staGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5meC1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbn1cblxuLmJvdG9uZXNMb2dpbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZjg0MzNjO1xuICAgIGZvbnQtZmFtaWx5OiBUSUVNUE87XG59XG5cbi50aXR1bG9zTG9naW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogVElFTVBPO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/api/idemAlumnos.service.ts":
/*!*************************************************!*\
  !*** ./src/services/api/idemAlumnos.service.ts ***!
  \*************************************************/
/*! exports provided: IdemAlumnosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemAlumnosService", function() { return IdemAlumnosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemAlumnosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemAlumnosDelete(dni, password, email, carrera, idestado, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (password !== undefined && password !== null) {
            queryParameters = queryParameters.set('password', password);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (carrera !== undefined && carrera !== null) {
            queryParameters = queryParameters.set('carrera', carrera);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_alumnos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemAlumnosGet(dni, password, email, carrera, idestado, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (password !== undefined && password !== null) {
            queryParameters = queryParameters.set('password', password);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (carrera !== undefined && carrera !== null) {
            queryParameters = queryParameters.set('carrera', carrera);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_alumnos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemAlumnosPatch(dni, password, email, carrera, idestado, fecharegistro, idemAlumnos, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (password !== undefined && password !== null) {
            queryParameters = queryParameters.set('password', password);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (carrera !== undefined && carrera !== null) {
            queryParameters = queryParameters.set('carrera', carrera);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_alumnos`, idemAlumnos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemAlumnosPost(idemAlumnos, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_alumnos`, idemAlumnos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemAlumnosService.ɵfac = function IdemAlumnosService_Factory(t) { return new (t || IdemAlumnosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemAlumnosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemAlumnosService, factory: IdemAlumnosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemAlumnosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemApartados.service.ts":
/*!***************************************************!*\
  !*** ./src/services/api/idemApartados.service.ts ***!
  \***************************************************/
/*! exports provided: IdemApartadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemApartadosService", function() { return IdemApartadosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemApartadosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemApartadosDelete(idapartado, nombre, classe, titulo, url, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idapartado !== undefined && idapartado !== null) {
            queryParameters = queryParameters.set('idapartado', idapartado);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (classe !== undefined && classe !== null) {
            queryParameters = queryParameters.set('classe', classe);
        }
        if (titulo !== undefined && titulo !== null) {
            queryParameters = queryParameters.set('titulo', titulo);
        }
        if (url !== undefined && url !== null) {
            queryParameters = queryParameters.set('url', url);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_apartados`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemApartadosGet(idapartado, nombre, classe, titulo, url, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idapartado !== undefined && idapartado !== null) {
            queryParameters = queryParameters.set('idapartado', idapartado);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (classe !== undefined && classe !== null) {
            queryParameters = queryParameters.set('classe', classe);
        }
        if (titulo !== undefined && titulo !== null) {
            queryParameters = queryParameters.set('titulo', titulo);
        }
        if (url !== undefined && url !== null) {
            queryParameters = queryParameters.set('url', url);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_apartados`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemApartadosPatch(idapartado, nombre, classe, titulo, url, fecharegistro, idemApartados, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idapartado !== undefined && idapartado !== null) {
            queryParameters = queryParameters.set('idapartado', idapartado);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (classe !== undefined && classe !== null) {
            queryParameters = queryParameters.set('classe', classe);
        }
        if (titulo !== undefined && titulo !== null) {
            queryParameters = queryParameters.set('titulo', titulo);
        }
        if (url !== undefined && url !== null) {
            queryParameters = queryParameters.set('url', url);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_apartados`, idemApartados, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemApartadosPost(idemApartados, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_apartados`, idemApartados, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemApartadosService.ɵfac = function IdemApartadosService_Factory(t) { return new (t || IdemApartadosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemApartadosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemApartadosService, factory: IdemApartadosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemApartadosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemCargos.service.ts":
/*!************************************************!*\
  !*** ./src/services/api/idemCargos.service.ts ***!
  \************************************************/
/*! exports provided: IdemCargosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemCargosService", function() { return IdemCargosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemCargosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemCargosDelete(idcargo, nombre, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_cargos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCargosGet(idcargo, nombre, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_cargos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCargosPatch(idcargo, nombre, fecharegistro, idemCargos, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_cargos`, idemCargos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCargosPost(idemCargos, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_cargos`, idemCargos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemCargosService.ɵfac = function IdemCargosService_Factory(t) { return new (t || IdemCargosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemCargosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemCargosService, factory: IdemCargosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemCargosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemCategorias.service.ts":
/*!****************************************************!*\
  !*** ./src/services/api/idemCategorias.service.ts ***!
  \****************************************************/
/*! exports provided: IdemCategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemCategoriasService", function() { return IdemCategoriasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemCategoriasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemCategoriasDelete(idcategoria, nombre, idestado, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcategoria !== undefined && idcategoria !== null) {
            queryParameters = queryParameters.set('idcategoria', idcategoria);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_categorias`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCategoriasGet(idcategoria, nombre, idestado, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcategoria !== undefined && idcategoria !== null) {
            queryParameters = queryParameters.set('idcategoria', idcategoria);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_categorias`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCategoriasPatch(idcategoria, nombre, idestado, idemCategorias, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcategoria !== undefined && idcategoria !== null) {
            queryParameters = queryParameters.set('idcategoria', idcategoria);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_categorias`, idemCategorias, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCategoriasPost(idemCategorias, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_categorias`, idemCategorias, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemCategoriasService.ɵfac = function IdemCategoriasService_Factory(t) { return new (t || IdemCategoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemCategoriasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemCategoriasService, factory: IdemCategoriasService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemCategoriasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemCursos.service.ts":
/*!************************************************!*\
  !*** ./src/services/api/idemCursos.service.ts ***!
  \************************************************/
/*! exports provided: IdemCursosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemCursosService", function() { return IdemCursosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemCursosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemCursosDelete(idcurso, nombre, descripcion, descripcion2, imagen, costo, moneda, idtipocurso, fechahoraInicio, fechahoraFin, lugar, fecharegistro, idcategoria, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (descripcion2 !== undefined && descripcion2 !== null) {
            queryParameters = queryParameters.set('descripcion2', descripcion2);
        }
        if (imagen !== undefined && imagen !== null) {
            queryParameters = queryParameters.set('imagen', imagen);
        }
        if (costo !== undefined && costo !== null) {
            queryParameters = queryParameters.set('costo', costo);
        }
        if (moneda !== undefined && moneda !== null) {
            queryParameters = queryParameters.set('moneda', moneda);
        }
        if (idtipocurso !== undefined && idtipocurso !== null) {
            queryParameters = queryParameters.set('idtipocurso', idtipocurso);
        }
        if (fechahoraInicio !== undefined && fechahoraInicio !== null) {
            queryParameters = queryParameters.set('fechahora_inicio', fechahoraInicio);
        }
        if (fechahoraFin !== undefined && fechahoraFin !== null) {
            queryParameters = queryParameters.set('fechahora_fin', fechahoraFin);
        }
        if (lugar !== undefined && lugar !== null) {
            queryParameters = queryParameters.set('lugar', lugar);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (idcategoria !== undefined && idcategoria !== null) {
            queryParameters = queryParameters.set('idcategoria', idcategoria);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_cursos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCursosGet(idcurso, nombre, descripcion, descripcion2, imagen, costo, moneda, idtipocurso, fechahoraInicio, fechahoraFin, lugar, fecharegistro, idcategoria, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (descripcion2 !== undefined && descripcion2 !== null) {
            queryParameters = queryParameters.set('descripcion2', descripcion2);
        }
        if (imagen !== undefined && imagen !== null) {
            queryParameters = queryParameters.set('imagen', imagen);
        }
        if (costo !== undefined && costo !== null) {
            queryParameters = queryParameters.set('costo', costo);
        }
        if (moneda !== undefined && moneda !== null) {
            queryParameters = queryParameters.set('moneda', moneda);
        }
        if (idtipocurso !== undefined && idtipocurso !== null) {
            queryParameters = queryParameters.set('idtipocurso', idtipocurso);
        }
        if (fechahoraInicio !== undefined && fechahoraInicio !== null) {
            queryParameters = queryParameters.set('fechahora_inicio', fechahoraInicio);
        }
        if (fechahoraFin !== undefined && fechahoraFin !== null) {
            queryParameters = queryParameters.set('fechahora_fin', fechahoraFin);
        }
        if (lugar !== undefined && lugar !== null) {
            queryParameters = queryParameters.set('lugar', lugar);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (idcategoria !== undefined && idcategoria !== null) {
            queryParameters = queryParameters.set('idcategoria', idcategoria);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_cursos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCursosPatch(idcurso, nombre, descripcion, descripcion2, imagen, costo, moneda, idtipocurso, fechahoraInicio, fechahoraFin, lugar, fecharegistro, idcategoria, idemCursos, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (descripcion2 !== undefined && descripcion2 !== null) {
            queryParameters = queryParameters.set('descripcion2', descripcion2);
        }
        if (imagen !== undefined && imagen !== null) {
            queryParameters = queryParameters.set('imagen', imagen);
        }
        if (costo !== undefined && costo !== null) {
            queryParameters = queryParameters.set('costo', costo);
        }
        if (moneda !== undefined && moneda !== null) {
            queryParameters = queryParameters.set('moneda', moneda);
        }
        if (idtipocurso !== undefined && idtipocurso !== null) {
            queryParameters = queryParameters.set('idtipocurso', idtipocurso);
        }
        if (fechahoraInicio !== undefined && fechahoraInicio !== null) {
            queryParameters = queryParameters.set('fechahora_inicio', fechahoraInicio);
        }
        if (fechahoraFin !== undefined && fechahoraFin !== null) {
            queryParameters = queryParameters.set('fechahora_fin', fechahoraFin);
        }
        if (lugar !== undefined && lugar !== null) {
            queryParameters = queryParameters.set('lugar', lugar);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (idcategoria !== undefined && idcategoria !== null) {
            queryParameters = queryParameters.set('idcategoria', idcategoria);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_cursos`, idemCursos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemCursosPost(idemCursos, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_cursos`, idemCursos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemCursosService.ɵfac = function IdemCursosService_Factory(t) { return new (t || IdemCursosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemCursosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemCursosService, factory: IdemCursosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemCursosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemDocentes.service.ts":
/*!**************************************************!*\
  !*** ./src/services/api/idemDocentes.service.ts ***!
  \**************************************************/
/*! exports provided: IdemDocentesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemDocentesService", function() { return IdemDocentesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemDocentesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemDocentesDelete(dni, tituloProfesional, descripcion, email, idestado, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (tituloProfesional !== undefined && tituloProfesional !== null) {
            queryParameters = queryParameters.set('titulo_profesional', tituloProfesional);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_docentes`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemDocentesGet(dni, tituloProfesional, descripcion, email, idestado, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (tituloProfesional !== undefined && tituloProfesional !== null) {
            queryParameters = queryParameters.set('titulo_profesional', tituloProfesional);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_docentes`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemDocentesPatch(dni, tituloProfesional, descripcion, email, idestado, fecharegistro, idemDocentes, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (tituloProfesional !== undefined && tituloProfesional !== null) {
            queryParameters = queryParameters.set('titulo_profesional', tituloProfesional);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_docentes`, idemDocentes, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemDocentesPost(idemDocentes, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_docentes`, idemDocentes, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemDocentesService.ɵfac = function IdemDocentesService_Factory(t) { return new (t || IdemDocentesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemDocentesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemDocentesService, factory: IdemDocentesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemDocentesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemEstados.service.ts":
/*!*************************************************!*\
  !*** ./src/services/api/idemEstados.service.ts ***!
  \*************************************************/
/*! exports provided: IdemEstadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemEstadosService", function() { return IdemEstadosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemEstadosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemEstadosDelete(ideestado, nombre, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (ideestado !== undefined && ideestado !== null) {
            queryParameters = queryParameters.set('ideestado', ideestado);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_estados`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemEstadosGet(ideestado, nombre, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (ideestado !== undefined && ideestado !== null) {
            queryParameters = queryParameters.set('ideestado', ideestado);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_estados`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemEstadosPatch(ideestado, nombre, idemEstados, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (ideestado !== undefined && ideestado !== null) {
            queryParameters = queryParameters.set('ideestado', ideestado);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_estados`, idemEstados, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemEstadosPost(idemEstados, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_estados`, idemEstados, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemEstadosService.ɵfac = function IdemEstadosService_Factory(t) { return new (t || IdemEstadosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemEstadosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemEstadosService, factory: IdemEstadosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemEstadosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemMatriculas.service.ts":
/*!****************************************************!*\
  !*** ./src/services/api/idemMatriculas.service.ts ***!
  \****************************************************/
/*! exports provided: IdemMatriculasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemMatriculasService", function() { return IdemMatriculasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemMatriculasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemMatriculasDelete(idmatricula, dni, idcurso, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idmatricula !== undefined && idmatricula !== null) {
            queryParameters = queryParameters.set('idmatricula', idmatricula);
        }
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_matriculas`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemMatriculasGet(idmatricula, dni, idcurso, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idmatricula !== undefined && idmatricula !== null) {
            queryParameters = queryParameters.set('idmatricula', idmatricula);
        }
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_matriculas`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemMatriculasPatch(idmatricula, dni, idcurso, fecharegistro, idemMatriculas, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idmatricula !== undefined && idmatricula !== null) {
            queryParameters = queryParameters.set('idmatricula', idmatricula);
        }
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_matriculas`, idemMatriculas, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemMatriculasPost(idemMatriculas, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_matriculas`, idemMatriculas, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemMatriculasService.ɵfac = function IdemMatriculasService_Factory(t) { return new (t || IdemMatriculasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemMatriculasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemMatriculasService, factory: IdemMatriculasService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemMatriculasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemModulos.service.ts":
/*!*************************************************!*\
  !*** ./src/services/api/idemModulos.service.ts ***!
  \*************************************************/
/*! exports provided: IdemModulosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemModulosService", function() { return IdemModulosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemModulosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemModulosDelete(idmodulo, nombre, dniProfesor, imagen, video, descripcion, idestado, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (dniProfesor !== undefined && dniProfesor !== null) {
            queryParameters = queryParameters.set('dni_profesor', dniProfesor);
        }
        if (imagen !== undefined && imagen !== null) {
            queryParameters = queryParameters.set('imagen', imagen);
        }
        if (video !== undefined && video !== null) {
            queryParameters = queryParameters.set('video', video);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_modulos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemModulosGet(idmodulo, nombre, dniProfesor, imagen, video, descripcion, idestado, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (dniProfesor !== undefined && dniProfesor !== null) {
            queryParameters = queryParameters.set('dni_profesor', dniProfesor);
        }
        if (imagen !== undefined && imagen !== null) {
            queryParameters = queryParameters.set('imagen', imagen);
        }
        if (video !== undefined && video !== null) {
            queryParameters = queryParameters.set('video', video);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_modulos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemModulosPatch(idmodulo, nombre, dniProfesor, imagen, video, descripcion, idestado, fecharegistro, idemModulos, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (dniProfesor !== undefined && dniProfesor !== null) {
            queryParameters = queryParameters.set('dni_profesor', dniProfesor);
        }
        if (imagen !== undefined && imagen !== null) {
            queryParameters = queryParameters.set('imagen', imagen);
        }
        if (video !== undefined && video !== null) {
            queryParameters = queryParameters.set('video', video);
        }
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', descripcion);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_modulos`, idemModulos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemModulosPost(idemModulos, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_modulos`, idemModulos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemModulosService.ɵfac = function IdemModulosService_Factory(t) { return new (t || IdemModulosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemModulosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemModulosService, factory: IdemModulosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemModulosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemModulosComentarios.service.ts":
/*!************************************************************!*\
  !*** ./src/services/api/idemModulosComentarios.service.ts ***!
  \************************************************************/
/*! exports provided: IdemModulosComentariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemModulosComentariosService", function() { return IdemModulosComentariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemModulosComentariosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemModulosComentariosDelete(idcomentario, idmodulo, idcurso, dni, titulo, comentario, idestado, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcomentario !== undefined && idcomentario !== null) {
            queryParameters = queryParameters.set('idcomentario', idcomentario);
        }
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (titulo !== undefined && titulo !== null) {
            queryParameters = queryParameters.set('titulo', titulo);
        }
        if (comentario !== undefined && comentario !== null) {
            queryParameters = queryParameters.set('comentario', comentario);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_modulos_comentarios`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemModulosComentariosGet(idcomentario, idmodulo, idcurso, dni, titulo, comentario, idestado, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcomentario !== undefined && idcomentario !== null) {
            queryParameters = queryParameters.set('idcomentario', idcomentario);
        }
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (titulo !== undefined && titulo !== null) {
            queryParameters = queryParameters.set('titulo', titulo);
        }
        if (comentario !== undefined && comentario !== null) {
            queryParameters = queryParameters.set('comentario', comentario);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_modulos_comentarios`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemModulosComentariosPatch(idcomentario, idmodulo, idcurso, dni, titulo, comentario, idestado, fecharegistro, idemModulosComentarios, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcomentario !== undefined && idcomentario !== null) {
            queryParameters = queryParameters.set('idcomentario', idcomentario);
        }
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (titulo !== undefined && titulo !== null) {
            queryParameters = queryParameters.set('titulo', titulo);
        }
        if (comentario !== undefined && comentario !== null) {
            queryParameters = queryParameters.set('comentario', comentario);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_modulos_comentarios`, idemModulosComentarios, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemModulosComentariosPost(idemModulosComentarios, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_modulos_comentarios`, idemModulosComentarios, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemModulosComentariosService.ɵfac = function IdemModulosComentariosService_Factory(t) { return new (t || IdemModulosComentariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemModulosComentariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemModulosComentariosService, factory: IdemModulosComentariosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemModulosComentariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemPagos.service.ts":
/*!***********************************************!*\
  !*** ./src/services/api/idemPagos.service.ts ***!
  \***********************************************/
/*! exports provided: IdemPagosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemPagosService", function() { return IdemPagosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemPagosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemPagosDelete(idpago, idmatricula, idcurso, fechaProgramada, monto, comentario, idestado, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idpago !== undefined && idpago !== null) {
            queryParameters = queryParameters.set('idpago', idpago);
        }
        if (idmatricula !== undefined && idmatricula !== null) {
            queryParameters = queryParameters.set('idmatricula', idmatricula);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (fechaProgramada !== undefined && fechaProgramada !== null) {
            queryParameters = queryParameters.set('fecha_programada', fechaProgramada);
        }
        if (monto !== undefined && monto !== null) {
            queryParameters = queryParameters.set('monto', monto);
        }
        if (comentario !== undefined && comentario !== null) {
            queryParameters = queryParameters.set('comentario', comentario);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_pagos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPagosGet(idpago, idmatricula, idcurso, fechaProgramada, monto, comentario, idestado, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idpago !== undefined && idpago !== null) {
            queryParameters = queryParameters.set('idpago', idpago);
        }
        if (idmatricula !== undefined && idmatricula !== null) {
            queryParameters = queryParameters.set('idmatricula', idmatricula);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (fechaProgramada !== undefined && fechaProgramada !== null) {
            queryParameters = queryParameters.set('fecha_programada', fechaProgramada);
        }
        if (monto !== undefined && monto !== null) {
            queryParameters = queryParameters.set('monto', monto);
        }
        if (comentario !== undefined && comentario !== null) {
            queryParameters = queryParameters.set('comentario', comentario);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_pagos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPagosPatch(idpago, idmatricula, idcurso, fechaProgramada, monto, comentario, idestado, fecharegistro, idemPagos, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idpago !== undefined && idpago !== null) {
            queryParameters = queryParameters.set('idpago', idpago);
        }
        if (idmatricula !== undefined && idmatricula !== null) {
            queryParameters = queryParameters.set('idmatricula', idmatricula);
        }
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (fechaProgramada !== undefined && fechaProgramada !== null) {
            queryParameters = queryParameters.set('fecha_programada', fechaProgramada);
        }
        if (monto !== undefined && monto !== null) {
            queryParameters = queryParameters.set('monto', monto);
        }
        if (comentario !== undefined && comentario !== null) {
            queryParameters = queryParameters.set('comentario', comentario);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_pagos`, idemPagos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPagosPost(idemPagos, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_pagos`, idemPagos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemPagosService.ɵfac = function IdemPagosService_Factory(t) { return new (t || IdemPagosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemPagosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemPagosService, factory: IdemPagosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemPagosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemPermisos.service.ts":
/*!**************************************************!*\
  !*** ./src/services/api/idemPermisos.service.ts ***!
  \**************************************************/
/*! exports provided: IdemPermisosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemPermisosService", function() { return IdemPermisosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemPermisosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemPermisosDelete(idapartado, idcargo, permiso, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idapartado !== undefined && idapartado !== null) {
            queryParameters = queryParameters.set('idapartado', idapartado);
        }
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (permiso !== undefined && permiso !== null) {
            queryParameters = queryParameters.set('permiso', permiso);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_permisos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPermisosGet(idapartado, idcargo, permiso, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idapartado !== undefined && idapartado !== null) {
            queryParameters = queryParameters.set('idapartado', idapartado);
        }
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (permiso !== undefined && permiso !== null) {
            queryParameters = queryParameters.set('permiso', permiso);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_permisos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPermisosPatch(idapartado, idcargo, permiso, fecharegistro, idemPermisos, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idapartado !== undefined && idapartado !== null) {
            queryParameters = queryParameters.set('idapartado', idapartado);
        }
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (permiso !== undefined && permiso !== null) {
            queryParameters = queryParameters.set('permiso', permiso);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_permisos`, idemPermisos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPermisosPost(idemPermisos, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_permisos`, idemPermisos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemPermisosService.ɵfac = function IdemPermisosService_Factory(t) { return new (t || IdemPermisosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemPermisosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemPermisosService, factory: IdemPermisosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemPermisosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemPersonas.service.ts":
/*!**************************************************!*\
  !*** ./src/services/api/idemPersonas.service.ts ***!
  \**************************************************/
/*! exports provided: IdemPersonasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemPersonasService", function() { return IdemPersonasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemPersonasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemPersonasDelete(dni, nombres, apellidoPa, apellidoMa, foto, fechaNacimiento, fecharegistro, estado, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (nombres !== undefined && nombres !== null) {
            queryParameters = queryParameters.set('nombres', nombres);
        }
        if (apellidoPa !== undefined && apellidoPa !== null) {
            queryParameters = queryParameters.set('apellido_pa', apellidoPa);
        }
        if (apellidoMa !== undefined && apellidoMa !== null) {
            queryParameters = queryParameters.set('apellido_ma', apellidoMa);
        }
        if (foto !== undefined && foto !== null) {
            queryParameters = queryParameters.set('foto', foto);
        }
        if (fechaNacimiento !== undefined && fechaNacimiento !== null) {
            queryParameters = queryParameters.set('fecha_nacimiento', fechaNacimiento);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', estado);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_personas`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPersonasGet(dni, nombres, apellidoPa, apellidoMa, foto, fechaNacimiento, fecharegistro, estado, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (nombres !== undefined && nombres !== null) {
            queryParameters = queryParameters.set('nombres', nombres);
        }
        if (apellidoPa !== undefined && apellidoPa !== null) {
            queryParameters = queryParameters.set('apellido_pa', apellidoPa);
        }
        if (apellidoMa !== undefined && apellidoMa !== null) {
            queryParameters = queryParameters.set('apellido_ma', apellidoMa);
        }
        if (foto !== undefined && foto !== null) {
            queryParameters = queryParameters.set('foto', foto);
        }
        if (fechaNacimiento !== undefined && fechaNacimiento !== null) {
            queryParameters = queryParameters.set('fecha_nacimiento', fechaNacimiento);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', estado);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_personas`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPersonasPatch(dni, nombres, apellidoPa, apellidoMa, foto, fechaNacimiento, fecharegistro, estado, idemPersonas, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (nombres !== undefined && nombres !== null) {
            queryParameters = queryParameters.set('nombres', nombres);
        }
        if (apellidoPa !== undefined && apellidoPa !== null) {
            queryParameters = queryParameters.set('apellido_pa', apellidoPa);
        }
        if (apellidoMa !== undefined && apellidoMa !== null) {
            queryParameters = queryParameters.set('apellido_ma', apellidoMa);
        }
        if (foto !== undefined && foto !== null) {
            queryParameters = queryParameters.set('foto', foto);
        }
        if (fechaNacimiento !== undefined && fechaNacimiento !== null) {
            queryParameters = queryParameters.set('fecha_nacimiento', fechaNacimiento);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', estado);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_personas`, idemPersonas, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemPersonasPost(idemPersonas, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_personas`, idemPersonas, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemPersonasService.ɵfac = function IdemPersonasService_Factory(t) { return new (t || IdemPersonasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemPersonasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemPersonasService, factory: IdemPersonasService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemPersonasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemRelCursosModulos.service.ts":
/*!**********************************************************!*\
  !*** ./src/services/api/idemRelCursosModulos.service.ts ***!
  \**********************************************************/
/*! exports provided: IdemRelCursosModulosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemRelCursosModulosService", function() { return IdemRelCursosModulosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemRelCursosModulosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemRelCursosModulosDelete(idcurso, idmodulo, fechahoraInicio, fechahoraFin, lugar, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (fechahoraInicio !== undefined && fechahoraInicio !== null) {
            queryParameters = queryParameters.set('fechahora_inicio', fechahoraInicio);
        }
        if (fechahoraFin !== undefined && fechahoraFin !== null) {
            queryParameters = queryParameters.set('fechahora_fin', fechahoraFin);
        }
        if (lugar !== undefined && lugar !== null) {
            queryParameters = queryParameters.set('lugar', lugar);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_rel_cursos_modulos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemRelCursosModulosGet(idcurso, idmodulo, fechahoraInicio, fechahoraFin, lugar, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (fechahoraInicio !== undefined && fechahoraInicio !== null) {
            queryParameters = queryParameters.set('fechahora_inicio', fechahoraInicio);
        }
        if (fechahoraFin !== undefined && fechahoraFin !== null) {
            queryParameters = queryParameters.set('fechahora_fin', fechahoraFin);
        }
        if (lugar !== undefined && lugar !== null) {
            queryParameters = queryParameters.set('lugar', lugar);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_rel_cursos_modulos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemRelCursosModulosPatch(idcurso, idmodulo, fechahoraInicio, fechahoraFin, lugar, fecharegistro, idemRelCursosModulos, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idcurso !== undefined && idcurso !== null) {
            queryParameters = queryParameters.set('idcurso', idcurso);
        }
        if (idmodulo !== undefined && idmodulo !== null) {
            queryParameters = queryParameters.set('idmodulo', idmodulo);
        }
        if (fechahoraInicio !== undefined && fechahoraInicio !== null) {
            queryParameters = queryParameters.set('fechahora_inicio', fechahoraInicio);
        }
        if (fechahoraFin !== undefined && fechahoraFin !== null) {
            queryParameters = queryParameters.set('fechahora_fin', fechahoraFin);
        }
        if (lugar !== undefined && lugar !== null) {
            queryParameters = queryParameters.set('lugar', lugar);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_rel_cursos_modulos`, idemRelCursosModulos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemRelCursosModulosPost(idemRelCursosModulos, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_rel_cursos_modulos`, idemRelCursosModulos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemRelCursosModulosService.ɵfac = function IdemRelCursosModulosService_Factory(t) { return new (t || IdemRelCursosModulosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemRelCursosModulosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemRelCursosModulosService, factory: IdemRelCursosModulosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemRelCursosModulosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/idemUsuarios.service.ts":
/*!**************************************************!*\
  !*** ./src/services/api/idemUsuarios.service.ts ***!
  \**************************************************/
/*! exports provided: IdemUsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdemUsuariosService", function() { return IdemUsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class IdemUsuariosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    idemUsuariosDelete(dni, idcargo, email, password, idestado, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (password !== undefined && password !== null) {
            queryParameters = queryParameters.set('password', password);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/idem_usuarios`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemUsuariosGet(dni, idcargo, email, password, idestado, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (password !== undefined && password !== null) {
            queryParameters = queryParameters.set('password', password);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/idem_usuarios`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemUsuariosPatch(dni, idcargo, email, password, idestado, fecharegistro, idemUsuarios, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (dni !== undefined && dni !== null) {
            queryParameters = queryParameters.set('dni', dni);
        }
        if (idcargo !== undefined && idcargo !== null) {
            queryParameters = queryParameters.set('idcargo', idcargo);
        }
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
        }
        if (password !== undefined && password !== null) {
            queryParameters = queryParameters.set('password', password);
        }
        if (idestado !== undefined && idestado !== null) {
            queryParameters = queryParameters.set('idestado', idestado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/idem_usuarios`, idemUsuarios, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    idemUsuariosPost(idemUsuarios, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/idem_usuarios`, idemUsuarios, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IdemUsuariosService.ɵfac = function IdemUsuariosService_Factory(t) { return new (t || IdemUsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
IdemUsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdemUsuariosService, factory: IdemUsuariosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdemUsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/introspection.service.ts":
/*!***************************************************!*\
  !*** ./src/services/api/introspection.service.ts ***!
  \***************************************************/
/*! exports provided: IntrospectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntrospectionService", function() { return IntrospectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */







class IntrospectionService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    rootGet(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/openapi+json',
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IntrospectionService.ɵfac = function IntrospectionService_Factory(t) { return new (t || IntrospectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8)); };
IntrospectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IntrospectionService, factory: IntrospectionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntrospectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/api/itemTipocursos.service.ts":
/*!****************************************************!*\
  !*** ./src/services/api/itemTipocursos.service.ts ***!
  \****************************************************/
/*! exports provided: ItemTipocursosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTipocursosService", function() { return ItemTipocursosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/services/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/services/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/services/configuration.ts");
/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class ItemTipocursosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://168.138.150.197:3000';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    itemTipocursosDelete(idtipocurso, nombre, estado, fecharegistro, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idtipocurso !== undefined && idtipocurso !== null) {
            queryParameters = queryParameters.set('idtipocurso', idtipocurso);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', estado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.delete(`${this.basePath}/item_tipocursos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    itemTipocursosGet(idtipocurso, nombre, estado, fecharegistro, select, order, range, rangeUnit, offset, limit, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idtipocurso !== undefined && idtipocurso !== null) {
            queryParameters = queryParameters.set('idtipocurso', idtipocurso);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', estado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', order);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        if (range !== undefined && range !== null) {
            headers = headers.set('Range', String(range));
        }
        if (rangeUnit !== undefined && rangeUnit !== null) {
            headers = headers.set('Range-Unit', String(rangeUnit));
        }
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        return this.httpClient.get(`${this.basePath}/item_tipocursos`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    itemTipocursosPatch(idtipocurso, nombre, estado, fecharegistro, itemTipocursos, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idtipocurso !== undefined && idtipocurso !== null) {
            queryParameters = queryParameters.set('idtipocurso', idtipocurso);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', nombre);
        }
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', estado);
        }
        if (fecharegistro !== undefined && fecharegistro !== null) {
            queryParameters = queryParameters.set('fecharegistro', fecharegistro);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.patch(`${this.basePath}/item_tipocursos`, itemTipocursos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    itemTipocursosPost(itemTipocursos, select, prefer, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (select !== undefined && select !== null) {
            queryParameters = queryParameters.set('select', select);
        }
        let headers = this.defaultHeaders;
        if (prefer !== undefined && prefer !== null) {
            headers = headers.set('Prefer', String(prefer));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json',
            'application/vnd.pgrst.object+json',
            'text/csv'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/item_tipocursos`, itemTipocursos, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
ItemTipocursosService.ɵfac = function ItemTipocursosService_Factory(t) { return new (t || ItemTipocursosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
ItemTipocursosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemTipocursosService, factory: ItemTipocursosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemTipocursosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/services/configuration.ts":
/*!***************************************!*\
  !*** ./src/services/configuration.ts ***!
  \***************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        let type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        let type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}


/***/ }),

/***/ "./src/services/encoder.ts":
/*!*********************************!*\
  !*** ./src/services/encoder.ts ***!
  \*********************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"] {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}


/***/ }),

/***/ "./src/services/variables.ts":
/*!***********************************!*\
  !*** ./src/services/variables.ts ***!
  \***********************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/parodriguez/IDEM/WEBSITE/idem/idemweb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map