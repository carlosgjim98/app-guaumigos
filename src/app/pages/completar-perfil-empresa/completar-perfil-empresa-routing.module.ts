import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletarPerfilEmpresaPage } from './completar-perfil-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: CompletarPerfilEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletarPerfilEmpresaPageRoutingModule {}
