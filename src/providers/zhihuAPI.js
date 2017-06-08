var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var ZhiHuAPI = (function () {
    function ZhiHuAPI(http) {
        this.http = http;
    }
    ZhiHuAPI.prototype.getZhihuLatest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://news-at.zhihu.com/api/4/news/latest').subscribe(function (res) {
                _this.data = res.json();
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ZhiHuAPI.prototype.getZhihuBefore = function (date) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://news-at.zhihu.com/api/4/news/before/' + date).subscribe(function (res) {
                _this.data = res.json().stories;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ZhiHuAPI.prototype.getZhihuContent = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://news-at.zhihu.com/api/4/news/' + id).subscribe(function (res) {
                _this.data = res.json();
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    return ZhiHuAPI;
}());
ZhiHuAPI = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ZhiHuAPI);
export { ZhiHuAPI };
//# sourceMappingURL=zhihuAPI.js.map