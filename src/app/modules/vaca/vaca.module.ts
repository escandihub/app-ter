import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacaPageRoutingModule } from './vaca-routing.module';

import { VacaPage } from './vaca.page';
import { CardInfoComponent } from "../../share/components/card-info/card-info.component";
import { ShowSonsComponent } from "./show-sons/show-sons.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacaPageRoutingModule
  ],
  declarations: [VacaPage, CardInfoComponent, ShowSonsComponent]
})
export class VacaPageModule {}
