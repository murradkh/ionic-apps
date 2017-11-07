import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { tabspage } from '../pages/tabs/tabs';
import {SettingsPage} from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = tabspage;
  @ViewChild('menuctrl') private menuctrl:MenuController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page:string){
if(page=='settings')
this.rootPage=SettingsPage;
else this.rootPage=tabspage;

this.menuctrl.close();

}
}

