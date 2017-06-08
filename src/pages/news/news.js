var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { NewsContentPage } from './news-content/news-content';
import { ZhiHuAPI } from '../../providers/zhihuAPI';
var NewsPage = (function () {
    function NewsPage(navCtrl, zhihuAPI, menuCtrl) {
        this.navCtrl = navCtrl;
        this.zhihuAPI = zhihuAPI;
        this.menuCtrl = menuCtrl;
        this.dataFinish = false;
        this.date = new Date();
    }
    NewsPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.swipeEnable(true);
        console.log('viewDidEnter HomePage');
    };
    NewsPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.swipeEnable(false);
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        this.initData();
    };
    NewsPage.prototype.initData = function () {
        var _this = this;
        this.dataFinish = false;
        this.zhihuAPI.getZhihuLatest().then(function (res) {
            _this.zhihuList = res;
            _this.dataFinish = true;
        }, function (err) {
        });
    };
    NewsPage.prototype.refresh = function (refresher) {
        var _this = this;
        this.zhihuAPI.getZhihuLatest().then(function (res) {
            _this.zhihuList = res;
            _this.dataFinish = true;
            refresher.complete();
        }, function (err) {
        });
    };
    NewsPage.prototype.getMoreZhihuList = function (event) {
        var _this = this;
        var year = this.date.getFullYear();
        var month = (this.date.getMonth() + 1).toString();
        var day = this.date.getDate().toString();
        if (day.length < 2)
            day = '0' + day;
        if (month.length < 2)
            month = '0' + month;
        this.zhihuAPI.getZhihuBefore('' + year + month + day).then(function (res) {
            _this.zhihuList.stories = _this.zhihuList.stories.concat(res);
            _this.date = new Date(_this.date.getTime() - 1 * 24 * 60 * 60 * 1000);
            event.complete();
        });
    };
    NewsPage.prototype.pushContent = function (id) {
        this.navCtrl.push(NewsContentPage, { id: id });
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Component({
        selector: 'page-news',
        templateUrl: 'news.html'
    }),
    __metadata("design:paramtypes", [NavController,
        ZhiHuAPI,
        MenuController])
], NewsPage);
export { NewsPage };
//# sourceMappingURL=news.js.map