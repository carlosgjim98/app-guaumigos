import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSolicitudAceptadaPaseoEnCursoPage } from './detalle-solicitud-aceptada-paseo-en-curso.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSolicitudAceptadaPaseoEnCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSolicitudAceptadaPaseoEnCursoPageRoutingModule {}
