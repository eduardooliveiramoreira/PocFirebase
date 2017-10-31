import { ActivitiesPage } from './../pages/activities/activities';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule} from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseDataStorageService } from './../providers/firebase.data.storage.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
  apiKey: "1tlWQduS4zId5r-rC8WAe2cdY_SuIi_trCUu47i0qPE0",
  authDomain: "ifsp-a486b.firebaseio.com",
  databaseURL: "https://ifsp-a486b.firebaseio.com/",
  projectId: "ifsp-a486b",
  storageBucket: "ifsp-a486b.appspot.com",
  messagingSenderId: "1200608017"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ActivitiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ActivitiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseDataStorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
