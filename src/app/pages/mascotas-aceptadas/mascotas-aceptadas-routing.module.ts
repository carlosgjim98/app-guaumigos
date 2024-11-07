import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotasAceptadasPage } from './mascotas-aceptadas.page';

const routes: Routes = [
  {
    path: '',
    component: MascotasAceptadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotasAceptadasPageRoutingModule {}
