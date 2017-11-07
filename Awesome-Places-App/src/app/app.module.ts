import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPlacePage } from '../pages/add-place/add-place';
import { SetLocationPage } from '../pages/add-place/set-location/set-location';
import { PlacePage } from '../pages/home/place/place';
import {AgmCoreModule} from 'angular2-google-maps/core';
import { Camera } from '@ionic-native/camera';
import { Service } from '../pages/service';
import { File } from '@ionic-native/file';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlacePage,
    SetLocationPage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
apiKey:'AIzaSyD26oFeiQWr2cFSlKhK6xEGZmFLx473rsw'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlacePage,
    SetLocationPage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    Service,
    File,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
