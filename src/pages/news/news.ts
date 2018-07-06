import { Component, ChangeDetectorRef,ViewChild } from '@angular/core';
import {NavController, MenuController,Events,Content} from 'ionic-angular';
import {NewsContentPage} from './news-content/news-content'
import {ZhiHuAPI} from '../../providers/zhihuAPI';
import { MycenterPage } from '../mycenter/mycenter';

@Component({
    selector: 'page-news',
    templateUrl: 'news.html'
})
export class NewsPage {
    @ViewChild(Content) content: Content;

    zhihuList: any;
    dataFinish: boolean = false;
    date: Date = new Date();
    showToolbar:boolean = false;

    topicType:any;
    constructor(public navCtrl: NavController,
                public zhihuAPI: ZhiHuAPI,
                public events: Events,
                public ref: ChangeDetectorRef,
                public menuCtrl: MenuController) {

    }


    ionViewDidEnter() {
        this.menuCtrl.swipeEnable(true);
        console.log('viewDidEnter HomePage');
    }

    ionViewWillLeave() {
        this.menuCtrl.swipeEnable(false);
    }

    ionViewDidLoad() {
        this.initData();
        this.events.subscribe("changeType",(data)=>{
            this.zhihuList=null;
            this.topicType=data;
            this.zhihuAPI.getTopicsById(data).then(res => {
                this.zhihuList = res;
                this.dataFinish = true;
            }, err => {
            })
        })
        this.events.subscribe("home",()=>{
            this.topicType=null;
            this.zhihuList=null;
            this.initData();
        })
    }

    initData() {
        this.dataFinish = false;
        this.zhihuAPI.getNews().then(res => {
            this.zhihuList = res;
            this.dataFinish = true;
        }, err => {
        })

    }

    refresh(refresher) {
        if(!!this.topicType){
            this.zhihuAPI.getTopicsById(this.topicType).then(res => {
                this.zhihuList = res;
                this.dataFinish = true;
                refresher.complete();
            }, err => {
            })
        }else{
            this.zhihuAPI.getNews().then(res => {
                this.zhihuList = res;
                this.dataFinish = true;
                refresher.complete();
            }, err => {
            });
        }

    }

    getMoreZhihuList(event) {
        let year = this.date.getFullYear();
        let month = (this.date.getMonth() + 1).toString();
        let day = this.date.getDate().toString();
        if (day.length < 2) day = '0' + day;
        if (month.length < 2) month = '0' + month;

        this.zhihuAPI.getNewsByDate('' + year + month + day).then((res) => {
            this.zhihuList.stories = this.zhihuList.stories.concat(res);
            this.date = new Date(this.date.getTime() - 1 * 24 * 60 * 60 * 1000)
            event.complete();
        })
    }

    pushContent(id) {
        this.navCtrl.push(NewsContentPage,{id:id});
    }

    onScroll($event: any){
        let scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 120;
        this.ref.detectChanges();
    }

}
