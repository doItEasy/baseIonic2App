import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {NewsContentPage} from './news-content/news-content'
import {ZhiHuAPI} from '../../providers/zhihuAPI';

@Component({
    selector: 'page-news',
    templateUrl: 'news.html'
})
export class NewsPage {
    zhihuList: any;
    dataFinish: boolean = false;
    date: Date = new Date();

    constructor(public navCtrl: NavController,
                public zhihuAPI: ZhiHuAPI,
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
    }

    initData() {
        this.dataFinish = false;
        this.zhihuAPI.getZhihuLatest().then(res => {
            this.zhihuList = res;
            this.dataFinish = true;
        }, err => {
        })
    }

    refresh(refresher) {
        this.zhihuAPI.getZhihuLatest().then(res => {
            this.zhihuList = res;
            this.dataFinish = true;
            refresher.complete();
        }, err => {
        });
    }

    getMoreZhihuList(event) {
        let year = this.date.getFullYear();
        let month = (this.date.getMonth() + 1).toString();
        let day = this.date.getDate().toString();
        if (day.length < 2) day = '0' + day;
        if (month.length < 2) month = '0' + month;

        this.zhihuAPI.getZhihuBefore('' + year + month + day).then((res) => {
            this.zhihuList.stories = this.zhihuList.stories.concat(res);
            this.date = new Date(this.date.getTime() - 1 * 24 * 60 * 60 * 1000)
            event.complete();
        })
    }

    pushContent(id) {
        this.navCtrl.push(NewsContentPage, {id: id});
    }
}
