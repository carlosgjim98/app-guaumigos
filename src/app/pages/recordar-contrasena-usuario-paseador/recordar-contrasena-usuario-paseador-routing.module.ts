import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordarContrasenaUsuarioPaseadorPage } from './recordar-contrasena-usuario-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: RecordarContrasenaUsuarioPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordarContrasenaUsuarioPaseadorPageRoutingModule {}
