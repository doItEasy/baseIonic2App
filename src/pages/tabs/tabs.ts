import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';

import { Tab2Page } from '../tab2/tab2';
import { NewsPage } from '../news/news';
import { MycenterPage } from '../mycenter/mycenter';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NewsPage;
  tab2Root: any = Tab2Page;
  tab3Root: any = MycenterPage;

  constructor() {

  }
}
