import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MycenterPage } from './mycenter';

@NgModule({
  declarations: [
    MycenterPage,
  ],
  imports: [
    IonicPageModule.forChild(MycenterPage),
  ],
  exports: [
    MycenterPage
  ]
})
export class MycenterPageModule {}
