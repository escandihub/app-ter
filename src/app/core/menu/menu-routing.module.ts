import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path:'inicio',
         loadChildren: '../../modules/inicio/inicio.module#InicioPageModule'
      },
      {
        path: 'toro',
        loadChildren: '../../modules/toro/toro.module#ToroPageModule'
      },
      {
        path: 'ternero',
        loadChildren: '../../modules/ternero/ternero.module#TerneroPageModule'
      },
      {
        path: 'configuracion',
        loadChildren: '../../modules/configuracion/configuracion.module#ConfiguracionPageModule'
      },
    ],
  },
  {
    path: '',
    redirectTo: '/menu/inicio',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
