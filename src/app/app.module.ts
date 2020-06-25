import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyCVgy8l3Sra1KJwb7Wc8fBoi6xF7jd3Ii4',
  authDomain: 'test-8633b.firebaseapp.com',
  databaseURL: 'https://test-8633b.firebaseio.com',
  projectId: 'test-8633b',
  storageBucket: 'test-8633b.appspot.com',
  messagingSenderId: '70664190350',
  appId: '1:70664190350:web:a60ba2985f0e150ca44cdf',
  measurementId: 'G-FME3C3PDXP'

};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
