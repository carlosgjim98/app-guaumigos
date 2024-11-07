import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginUsuarioPaseadorPageRoutingModule } from './login-usuario-paseador-routing.module';

import { LoginUsuarioPaseadorPage } from './login-usuario-paseador.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    LoginUsuarioPaseadorPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild(),
  ],
  declarations: [LoginUsuarioPaseadorPage]
})
export class LoginUsuarioPaseadorPageModule {}
