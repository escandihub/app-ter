import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerneroPageRoutingModule } from './ternero-routing.module';

import { TerneroPage } from './ternero.page';
import { CardInfoComponent } from "../../share/components/card-info/card-info.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerneroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TerneroPage, CardInfoComponent]
})
export class TerneroPageModule {}
