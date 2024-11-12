import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfilEmpresaPage } from './editar-perfil-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfilEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfilEmpresaPageRoutingModule {}
