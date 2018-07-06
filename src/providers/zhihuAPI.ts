import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ZhiHuAPI {
  data: any;
  url:any = "http://news-at.zhihu.com";
  // url:any="http://192.168.5.142:8888";
  constructor(public http: Http) {

  }

  getNews() {
    return new Promise((resolve, reject) => {
        this.http.get(this.url+'/api/4/news/latest').subscribe(res => {
            this.data = res.json();
            resolve(this.data);
        }, err => {
          reject(err);
        });
    })
  }
  getNewsByDate(date) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/api/4/news/before/' + date).subscribe(res => {
        this.data = res.json().stories;
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
  getNewsById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/api/4/news/' + id).subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }


  getNewsInfoById( id ) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/api/4/story-extra?id='+id).subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })

  }

  getTopics() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/api/4/themes').subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
  getTopicsById( topicid ) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/api/4/theme/'+ topicid).subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
  getSections() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/api/3/sections').subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
  getSectionsById( sectionid ) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/api/3/section?sectionid='+sectionid).subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })

  }

}
