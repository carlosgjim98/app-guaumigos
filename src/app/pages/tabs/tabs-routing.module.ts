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
        loadChildren: () => import('../mensajes/mensajes.module').then(m => m.MensajesPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },

      {
        path: 'calendario-paseador',
        loadChildren: () => import('../calendario-paseador/calendario-paseador.module').then(m => m.CalendarioPaseadorPageModule)
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
