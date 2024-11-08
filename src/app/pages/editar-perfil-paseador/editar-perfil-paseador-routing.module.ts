import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfilPaseadorPage } from './editar-perfil-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfilPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfilPaseadorPageRoutingModule {}
