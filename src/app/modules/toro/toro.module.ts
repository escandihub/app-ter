import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToroPageRoutingModule } from './toro-routing.module';

import { ToroPage } from './toro.page';
import {  CardToroComponent} from "./card-toro/card-toro.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToroPageRoutingModule
  ],
  declarations: [ToroPage, CardToroComponent]
})
export class ToroPageModule {}
