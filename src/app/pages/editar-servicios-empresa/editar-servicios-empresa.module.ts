import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarServiciosEmpresaPageRoutingModule } from './editar-servicios-empresa-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditarServiciosEmpresaPage } from './editar-servicios-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditarServiciosEmpresaPageRoutingModule
  ],
  declarations: [EditarServiciosEmpresaPage]
})
export class EditarServiciosEmpresaPageModule {}
