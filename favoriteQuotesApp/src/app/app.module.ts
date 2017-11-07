import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { FavirotepagePage } from '../pages/favirotepage/favirotepage';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quotes/quote/quote';
import { SettingsPage } from '../pages/settings/settings';
import { tabspage } from '../pages/tabs/tabs';
import { Service } from '../pages/services/service';


@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    FavirotepagePage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    tabspage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    FavirotepagePage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    tabspage
  ],
  providers: [
    StatusBar,
    Service,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
