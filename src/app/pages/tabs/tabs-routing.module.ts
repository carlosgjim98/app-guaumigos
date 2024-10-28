import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'listado-paseadores',
        loadChildren: () => import('../listado-paseadores/listado-paseadores.module').then(m => m.ListadoPaseadoresPageModule)
      },
      {
        path: 'puntos-de-interes',
        loadChildren: () => import('../puntos-de-interes/puntos-de-interes.module').then(m => m.PuntosDeInteresPageModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('../services/services.module').then(m => m.ServicesPageModule)
      },
      {
        path: 'mensajes',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../test-plugins/test-plugins.module').then(m => m.TestPluginsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/listado-paseadores',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/listado-paseadores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
