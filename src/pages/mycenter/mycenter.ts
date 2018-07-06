import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';


/**
 * Generated class for the MycenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mycenter',
  templateUrl: 'mycenter.html',
})
export class MycenterPage {
  items: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public device: Device) {
  }

  ionViewDidLoad() {

    try {
      this.items.push("uuid:" + this.device.uuid);
      this.items.push("model:" + this.device.model);
      this.items.push("platform:" + this.device.platform);
      this.items.push("system version:" + this.device.version);
      this.items.push("manufacturer:" + this.device.manufacturer);
      this.items.push("是否跑在虚拟机:" + this.device.isVirtual);
      this.items.push("serial:" + this.device.serial);
      this.items.push("imei:" + window['plugins'].device.imei);
      this.items.push("imsi:" + window['plugins'].device.imsi);
      this.items.push("mac 地址:" + window['plugins'].device.mac);
      this.items.push("屏幕分辨率:" + window['plugins'].device.screen);
      this.items.push("wifi:" + window['plugins'].device.wifi);
      this.items.push("memory:" + window['plugins'].device.memory);
      this.items.push("battery:" + window['plugins'].device.battery);
      this.items.push("all:" + window['plugins'].device.all);
    } catch (e) {
    }



    console.log('ionViewDidLoad MycenterPage');
  }

}
