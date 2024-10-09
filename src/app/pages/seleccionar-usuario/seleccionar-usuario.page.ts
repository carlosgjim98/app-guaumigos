import { Component } from '@angular/core';

@Component({
  selector: 'app-seleccionar-usuario',
  templateUrl: './seleccionar-usuario.page.html',
  styleUrls: ['./seleccionar-usuario.page.scss'],
})
export class SeleccionarUsuarioPage {

  opcionSeleccionada: string = '';

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  esSeleccionada(opcion: string): boolean {
    return this.opcionSeleccionada === opcion;
  }
}