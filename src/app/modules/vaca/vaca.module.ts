import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacaPageRoutingModule } from './vaca-routing.module';

import { VacaPage } from './vaca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacaPageRoutingModule
  ],
  declarations: [VacaPage]
})
export class VacaPageModule {}
