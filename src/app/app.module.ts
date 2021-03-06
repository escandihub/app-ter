import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RazaReduce } from "./core/store/reduce.store";
import { RazaEffects } from './core/store/effects.store';

import {NewRumianteComponent  } from "./share/components/new-rumiante/new-rumiante.component";
import {  ModalFullInfoComponent } from "./share/components/modal-full-info/modal-full-info.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@NgModule({
  declarations: [AppComponent, NewRumianteComponent, ModalFullInfoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    StoreModule.forRoot({razas: RazaReduce}),
    EffectsModule.forRoot([RazaEffects])
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite, 
    SQLitePorter,
    DatePicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
