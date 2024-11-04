import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSolicitudEnCursoPageRoutingModule } from './detalle-solicitud-en-curso-routing.module';

import { DetalleSolicitudEnCursoPage } from './detalle-solicitud-en-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSolicitudEnCursoPageRoutingModule
  ],
  declarations: [DetalleSolicitudEnCursoPage]
})
export class DetalleSolicitudEnCursoPageModule {}
