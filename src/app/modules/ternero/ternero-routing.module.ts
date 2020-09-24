import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerneroPage } from './ternero.page';

const routes: Routes = [
  {
    path: '',
    component: TerneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerneroPageRoutingModule {}
