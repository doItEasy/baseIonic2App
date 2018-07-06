import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab2Page } from './tab2';
import { CnodeViewComponent} from '../../components/cnode-view/cnode-view';

@NgModule({
  declarations: [
    Tab2Page,
    CnodeViewComponent
  ],
  imports: [
    IonicPageModule.forChild(Tab2Page),
  ],
  exports: [
    Tab2Page,
    CnodeViewComponent
  ]
})
export class Tab2PageModule {}
