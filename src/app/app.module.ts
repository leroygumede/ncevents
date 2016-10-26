import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { EventDetails } from '../pages/event-details/event-details';
import { TabsPage } from '../pages/tabs/tabs';

import { Fullscreenimage } from '../pages/modals/fullscreenimage/fullscreenimage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventDetails,
    Fullscreenimage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventDetails,
    Fullscreenimage
  ],
  providers: []
})
export class AppModule { }
