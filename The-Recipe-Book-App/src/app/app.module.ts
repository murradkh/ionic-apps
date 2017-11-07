import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { NewRecipePage } from '../pages/recipes/New-Recipe/recipes';
import { TapsPage } from '../pages/taps/taps';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { RecipesPage } from '../pages/recipes/recipes';
import { Service } from '../pages/service/service';
import { ModalPage } from '../pages/recipes/Modal/Modal';
import { SigninPage } from '../pages/authenication/signin/signin';
import { SignupPage } from '../pages/authenication/signup/signup';
import { Authnicationservice } from '../pages/authenication/authenicate.server';
import { MyPopOver } from '../pages/shopping-list/mypopover/mypopover';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    RecipesPage,
    ShoppingListPage,
    TapsPage,
    NewRecipePage,
    ModalPage ,
    SigninPage,
    SignupPage,
    MyPopOver

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecipesPage,
    ShoppingListPage,
    TapsPage,
    NewRecipePage,
    ModalPage,
    SigninPage,
    SignupPage,
    MyPopOver
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Service,
    Authnicationservice,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
