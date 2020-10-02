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
         loadChildren: () => 
         import('../../modules/inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'toro',
        // loadChildren: '../../modules/toro/toro.module#ToroPageModule'
        loadChildren: () => 
        import('../../modules/toro/toro.module').then(m => m.ToroPageModule)
      },
      {
        path: 'ternero',
        // loadChildren: '../../modules/ternero/ternero.module#TerneroPageModule'
        loadChildren: () => 
        import('../../modules/ternero/ternero.module').then(m => m.TerneroPageModule)
      },
      {
        path: 'configuracion',
        // loadChildren: '../../modules/configuracion/configuracion.module#ConfiguracionPageModule'
        loadChildren: () => 
        import('../../modules/configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
      },
      {
        path: 'vaca',
        loadChildren: () => 
        import('../../modules/vaca/vaca.module').then(m => m.VacaPageModule)
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
