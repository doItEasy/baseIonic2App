import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ZhiHuAPI {
  data: any;
  constructor(public http: Http) {

  }

  getZhihuLatest() {
    return new Promise((resolve, reject) => {
      this.http.get('http://news-at.zhihu.com/api/4/news/latest').subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
  getZhihuBefore(date) {
    return new Promise((resolve, reject) => {
      this.http.get('http://news-at.zhihu.com/api/4/news/before/' + date).subscribe(res => {
        this.data = res.json().stories;
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
  getZhihuContent(id) {
    return new Promise((resolve, reject) => {
      this.http.get('http://news-at.zhihu.com/api/4/news/' + id).subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
}
