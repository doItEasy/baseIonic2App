import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CnodeAPI {
  data: any;
  url:any = "https://cnodejs.org/api/v1";
  header: {} = {
    'Content-Type': 'application/json; charset=utf-8'
  }
  private timeout: number = 10000;



  //接口地址
  API: any = {
    getTopics: '/topics',
    getTopic: '/topic/',
    postTopic: '/topics',
    updateTopic: '/topics/update',
    collectTopics: '/topic_collect/collect',
    cancelCollect: '/topic_collect/de_collect',
    topicCollect: '/topic_collect/',
    newReply: '/topic/:topic_id/replies',
    upReply: '/reply/:reply_id/ups',
    userInfo: '/user/',
    verifyToken: '/accesstoken',
    msgCount: '/message/count',
    msgs: '/messages',
    markAll: '/message/mark_all',
    markOne: '/message/mark_one/:msg_id',
  };



  constructor(public http: Http) {

  }




  getTopic(params) {
    return new Promise((resolve, reject) => {
        var url = this.url+this.API.getTopics;
        url = url + "?" + Object.keys(params).map(key => {
              return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
            }).join('&');

        this.http.get(url).subscribe(res => {
          this.data = res.json();
          resolve(this.data);
        }, err => {
          reject(err);
        });
    })
  }



}
