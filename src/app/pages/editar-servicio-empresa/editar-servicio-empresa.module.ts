import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarServicioEmpresaPageRoutingModule } from './editar-servicio-empresa-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditarServicioEmpresaPage } from './editar-servicio-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule ,
    EditarServicioEmpresaPageRoutingModule
  ],
  declarations: [EditarServicioEmpresaPage]
})
export class EditarServicioEmpresaPageModule {}
