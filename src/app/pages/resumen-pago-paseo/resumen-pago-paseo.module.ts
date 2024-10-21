import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenPagoPaseoPageRoutingModule } from './resumen-pago-paseo-routing.module';

import { ResumenPagoPaseoPage } from './resumen-pago-paseo.page';
import { ComponentsModule } from 'src/app/components/components.module';
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenPagoPaseoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResumenPagoPaseoPage],
})

export class ResumenPagoPaseoPageModule {}
