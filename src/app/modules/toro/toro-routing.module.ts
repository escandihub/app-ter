import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToroPage } from './toro.page';

const routes: Routes = [
  {
    path: '',
    component: ToroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToroPageRoutingModule {}
