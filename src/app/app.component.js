var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Page1Page } from '../pages/home/page1/page1';
import { TabsPage } from '../pages/tabs/tabs';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.rootPage = TabsPage;
        this.backButtonPressed = false;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'List', component: Page1Page }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.platform.registerBackButtonAction(function () {
            var activeVC = _this.nav.getActive();
            var page = activeVC.instance;
            if (!(page instanceof TabsPage)) {
                if (!_this.nav.canGoBack()) {
                    return _this.showExit();
                }
                //当前页面为tabs的子页面，正常返回
                return _this.nav.pop();
            }
            var tabs = page.tabs;
            var activeNav = tabs.getSelected();
            if (!activeNav.canGoBack()) {
                //当前页面为tab栏，退出APP
                return _this.showExit();
            }
            //当前页面为tab栏的子页面，正常返回
            return activeNav.pop();
        }, 101);
    };
    MyApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed)
            this.platform.exitApp();
        else {
            var toast = this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
            this.backButtonPressed = true;
            setTimeout(function () {
                _this.backButtonPressed = false;
            }, 2000);
        }
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        StatusBar,
        SplashScreen,
        ToastController])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map