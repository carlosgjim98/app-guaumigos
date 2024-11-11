import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarMascotasAceptadasPage } from './editar-mascotas-aceptadas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarMascotasAceptadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMascotasAceptadasPageRoutingModule {}
