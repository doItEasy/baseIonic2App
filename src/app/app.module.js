var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//ionic native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//page
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page1Page } from '../pages/home/page1/page1';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { NewsContentPage } from '../pages/news/news-content/news-content';
//module
import { HttpExtModule } from '/Users/feixiangming/ionic2Product/base4ionic/src';
//provider
import { ZhiHuAPI } from '../providers/zhihuAPI';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            TabsPage,
            Page1Page,
            NewsPage,
            NewsContentPage
        ],
        imports: [
            BrowserModule,
            HttpExtModule.forRoot(),
            IonicModule.forRoot(MyApp, {
                tabsHideOnSubPages: true,
                swipeBackEnabled: false,
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                platforms: {
                    ios: {
                        backButtonText: "返回"
                    },
                    android: {
                        activator: 'none'
                    }
                }
            }),
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            Page1Page,
            TabsPage,
            NewsPage,
            NewsContentPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            ZhiHuAPI
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map