import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSolicitudAceptadaPaseoEnCursoPageRoutingModule } from './detalle-solicitud-aceptada-paseo-en-curso-routing.module';

import { DetalleSolicitudAceptadaPaseoEnCursoPage } from './detalle-solicitud-aceptada-paseo-en-curso.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSolicitudAceptadaPaseoEnCursoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleSolicitudAceptadaPaseoEnCursoPage]
})
export class DetalleSolicitudAceptadaPaseoEnCursoPageModule {}
