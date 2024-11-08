import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarServiciosPaseosPageRoutingModule } from './editar-servicios-paseos-routing.module';

import { EditarServiciosPaseosPage } from './editar-servicios-paseos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarServiciosPaseosPageRoutingModule
  ],
  declarations: [EditarServiciosPaseosPage]
})
export class EditarServiciosPaseosPageModule {}
