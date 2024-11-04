import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSolicitudEnCursoPage } from './detalle-solicitud-en-curso.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSolicitudEnCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSolicitudEnCursoPageRoutingModule {}
