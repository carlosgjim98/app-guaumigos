import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiPerfilEmpresaPage } from './mi-perfil-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: MiPerfilEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiPerfilEmpresaPageRoutingModule {}
