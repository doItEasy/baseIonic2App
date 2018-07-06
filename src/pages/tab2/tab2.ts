import { Component,ViewChild ,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform} from 'ionic-angular';
import { CnodeAPI } from '../../providers/cnodeAPI'

/**
 * Generated class for the Tab2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

interface TopicParams {
  page?: number;
  tab?: string;
  limit?: number;
  mdrender?: boolean;
}


@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  @ViewChild('mySlider') slider: Slides;

  // tabs:any = ['全部','精华','分享','问答','招聘'];
  tabs:any = ['all','good','share','ask','job'];
  tabIndex: any = 0;
  topicList: any = [[],[],[],[],[]];
  topicParams: TopicParams = {
    limit: 10,
    page: 1,
    tab: 'all'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public cnodeAPI:CnodeAPI, private ngZone: NgZone,
  ) {

  }

  data_group: Array<{id:number, title: string, details: any, icon: string, showDetails: boolean}> = [];

  ionViewDidLoad() {
    this.fetchTopic(0);
  }

  selectTab(index) {
    this.tabIndex = index;
    this.topicParams.tab=this.tabs[index];
    this.slider.slideTo(index);
  }

  ionSlideDidChange($event) {
    this.tabIndex = $event._snapIndex;
    this.topicParams.tab= this.tabs[$event._snapIndex];
    if(this.topicList[$event._snapIndex].length==0){
      console.log("获取tab数据:"+$event._snapIndex);
      this.fetchTopic($event._snapIndex);

    }
  }

  fetchTopic(index) {
    this.cnodeAPI.getTopic(this.topicParams).then(res=>{
      console.log(JSON.stringify(res));
      this.topicList[index] =res['data'];
    })
  }

  loadMore(index,infiniteScroll?) {
    if(index!=this.tabIndex){
      return;
    }

    this.topicParams.page ++;
    this.cnodeAPI.getTopic(this.topicParams).then(res=>{
      for (var i = 0; i < res['data'].length; i++) {
        this.topicList[this.tabIndex].push( res['data'][i] );
      }
      infiniteScroll.complete();
    })
  }
  //
  // refresh(refresher) {
  //   this.cnodeAPI.getTopic(this.topicParams).then(res=>{
  //     console.log(JSON.stringify(res));
  //     this.topicList = res['data'];
  //     refresher.complete();
  //
  //   })
  //
  // }


}
