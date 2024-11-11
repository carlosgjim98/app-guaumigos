import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMascotasAceptadasPageRoutingModule } from './editar-mascotas-aceptadas-routing.module';

import { EditarMascotasAceptadasPage } from './editar-mascotas-aceptadas.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMascotasAceptadasPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [EditarMascotasAceptadasPage]
})
export class EditarMascotasAceptadasPageModule {}
