import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

//ionic native
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Device} from '@ionic-native/device';


//page
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {Page1Page} from '../pages/home/page1/page1';
import {TabsPage} from '../pages/tabs/tabs';
import {NewsPage} from '../pages/news/news';
import {NewsContentPage} from '../pages/news/news-content/news-content';


//module
import {UploadModule,HttpExtModule} from 'base4ionic'
import {MycenterPageModule} from '../pages/mycenter/mycenter.module'
import {Tab2PageModule} from '../pages/tab2/tab2.module'

//provider
import {ZhiHuAPI} from '../providers/zhihuAPI';
import {CnodeAPI} from '../providers/cnodeAPI';
import { NativePageTransitions} from '@ionic-native/native-page-transitions';



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
        MycenterPageModule,
        Tab2PageModule,
        IonicModule.forRoot(MyApp, {
            tabsHideOnSubPages: true,
            swipeBackEnabled: true,
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
        }, {
            links: [
                {component:NewsContentPage,loadChildren:"",name:"newsContent",segment:"news/:id",defaultHistory:[],priority:""}
            ]
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
        NativePageTransitions,
        Device,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ZhiHuAPI,
        CnodeAPI
    ]
})
export class AppModule {
}
