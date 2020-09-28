import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerneroPageRoutingModule } from './ternero-routing.module';

import { TerneroPage } from './ternero.page';
import { CardInfoComponent } from "../../share/components/card-info/card-info.component";
import {  ModalTerneroComponent } from "./modal-ternero/modal-ternero.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerneroPageRoutingModule
  ],
  declarations: [TerneroPage, CardInfoComponent, ModalTerneroComponent]
})
export class TerneroPageModule {}
