import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordarContrasenaUsuarioPaseadorPageRoutingModule } from './recordar-contrasena-usuario-paseador-routing.module';

import { RecordarContrasenaUsuarioPaseadorPage } from './recordar-contrasena-usuario-paseador.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RecordarContrasenaUsuarioPaseadorPageRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule
  ],
  declarations: [RecordarContrasenaUsuarioPaseadorPage]
})
export class RecordarContrasenaUsuarioPaseadorPageModule {}
