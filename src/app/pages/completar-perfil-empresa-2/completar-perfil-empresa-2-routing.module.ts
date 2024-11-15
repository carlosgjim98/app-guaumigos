import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletarPerfilEmpresa2Page } from './completar-perfil-empresa-2.page';

const routes: Routes = [
  {
    path: '',
    component: CompletarPerfilEmpresa2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletarPerfilEmpresa2PageRoutingModule {}
