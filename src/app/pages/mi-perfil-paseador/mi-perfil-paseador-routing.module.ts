import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiPerfilPaseadorPage } from './mi-perfil-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: MiPerfilPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiPerfilPaseadorPageRoutingModule {}
