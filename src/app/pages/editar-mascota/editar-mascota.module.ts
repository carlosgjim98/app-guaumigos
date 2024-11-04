import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { EditarMascotaPageRoutingModule } from './editar-mascota-routing.module';

import { EditarMascotaPage } from './editar-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditarMascotaPageRoutingModule
  ],
  declarations: [EditarMascotaPage]
})
export class EditarMascotaPageModule {}
