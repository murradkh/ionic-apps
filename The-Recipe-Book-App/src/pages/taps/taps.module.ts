import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TapsPage } from './taps';

@NgModule({
  declarations: [
    TapsPage,
  ],
  imports: [
    IonicPageModule.forChild(TapsPage),
  ],
})
export class TapsPageModule {}
