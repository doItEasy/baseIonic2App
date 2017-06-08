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
import { NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { ZhiHuAPI } from '../../../providers/zhihuAPI';
var NewsContentPage = (function () {
    function NewsContentPage(navCtrl, navParams, zhiHuAPI, menuCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zhiHuAPI = zhiHuAPI;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.id = this.navParams.get('id');
        this.menuCtrl.swipeEnable(false);
    }
    NewsContentPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    NewsContentPage.prototype.ionViewDidLoad = function () {
        this.initData();
    };
    NewsContentPage.prototype.initData = function () {
        var _this = this;
        this.hasErr = null;
        this.zhiHuAPI.getZhihuContent(this.id).then(function (res) {
            _this.content = res;
        }, function (err) {
            _this.hasErr = err;
        });
    };
    NewsContentPage.prototype.shareContent = function (type, content) {
        var that = this;
        switch (type) {
            case 'QQ':
                var QQ = {
                    url: content.share_url,
                    title: content.title,
                    description: "来自Ion2--基于Ionic2的资讯类APP",
                    imageUrl: content.images[0],
                    appName: "Ion2"
                };
                YCQQ.shareToQQ(function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                }, QQ);
                break;
            case 'Qzone':
                var Qzone = {
                    url: content.share_url,
                    title: content.title,
                    description: "来自Ion2--基于Ionic2的资讯类APP",
                    imageUrl: content.images,
                    appName: "Ion2"
                };
                YCQQ.shareToQzone(function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                }, Qzone);
                break;
            case 'weixin':
                Wechat.share({
                    message: {
                        title: content.title,
                        description: "来自Ion2--基于Ionic2的资讯类APP",
                        thumb: content.images[0],
                        mediaTagName: "TEST-TAG-001",
                        messageExt: "来自Ion2--基于Ionic2的资讯类APP",
                        messageAction: "<action>dotalist</action>",
                        media: {
                            type: Wechat.Type.WEBPAGE,
                            webpageUrl: content.share_url
                        }
                    },
                    scene: Wechat.Scene.SESSION
                }, function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                });
                break;
            case 'friends':
                Wechat.share({
                    message: {
                        title: content.title,
                        description: "来自Ion2--基于Ionic2的资讯类APP",
                        thumb: content.images[0],
                        mediaTagName: "TEST-TAG-001",
                        messageExt: "来自Ion2--基于Ionic2的资讯类APP",
                        messageAction: "<action>dotalist</action>",
                        media: {
                            type: Wechat.Type.WEBPAGE,
                            webpageUrl: content.share_url
                        }
                    },
                    scene: Wechat.Scene.TIMELINE
                }, function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                });
                break;
        }
    };
    NewsContentPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    return NewsContentPage;
}());
NewsContentPage = __decorate([
    Component({
        selector: 'page-news-content',
        templateUrl: 'news-content.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ZhiHuAPI,
        MenuController, ToastController])
], NewsContentPage);
export { NewsContentPage };
//# sourceMappingURL=news-content.js.map