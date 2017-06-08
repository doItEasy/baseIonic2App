var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
var Page1Page = (function () {
    function Page1Page(navCtrl, ref) {
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.showToolbar = false;
        this.articles = new Array(10).fill('');
    }
    Page1Page.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 120;
        this.ref.detectChanges();
    };
    return Page1Page;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], Page1Page.prototype, "content", void 0);
Page1Page = __decorate([
    Component({
        selector: 'page-page1',
        templateUrl: 'page1.html'
    }),
    __metadata("design:paramtypes", [NavController,
        ChangeDetectorRef])
], Page1Page);
export { Page1Page };
//# sourceMappingURL=page1.js.map