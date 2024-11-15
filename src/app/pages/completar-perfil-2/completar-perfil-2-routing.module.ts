import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletarPerfil2Page } from './completar-perfil-2.page';

const routes: Routes = [
  {
    path: '',
    component: CompletarPerfil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletarPerfil2PageRoutingModule {}
