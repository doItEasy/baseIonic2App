import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

//ionic native
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';


//page
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {Page1Page} from '../pages/home/page1/page1';
import {TabsPage} from '../pages/tabs/tabs';
import {NewsPage} from '../pages/news/news';
import {NewsContentPage} from '../pages/news/news-content/news-content';

//module

import {UploadModule,HttpExtModule} from 'base4ionic'


//provider
import {ZhiHuAPI} from '../providers/zhihuAPI';


@NgModule({
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
        UploadModule,
        HttpExtModule,
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
        })
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
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ZhiHuAPI
    ]
})
export class AppModule {
}
