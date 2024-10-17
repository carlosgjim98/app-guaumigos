import { Component } from '@angular/core';

@Component({
  selector: 'app-seleccionar-usuario',
  templateUrl: './seleccionar-usuario.page.html',
  styleUrls: ['./seleccionar-usuario.page.scss'],
})
export class SeleccionarUsuarioPage {

  opcionSeleccionada: string = '';

  //ESO SI LOS TIPOS SON FIJOS
  iconos = {
    dueño: {
      normal: 'assets/icons/acceso-cliente.svg',
      seleccionado: 'assets/icons/acceso-cliente-negro.svg',
    },
    paseador: {
      normal: 'assets/icons/acceso-paseador.svg',
      seleccionado: 'assets/icons/acceso-paseador-negro.svg',
    },
    empresa: {
      normal: 'assets/icons/acceso-empresa.svg',
      seleccionado: 'assets/icons/acceso-empresa-negro.svg',
    },
  };

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  esSeleccionada(opcion: string): boolean {
    return this.opcionSeleccionada === opcion;
  }

  obtenerRutaIcono(opcion: string): string {
    return this.esSeleccionada(opcion)
      ? this.iconos[opcion].seleccionado
      : this.iconos[opcion].normal;
  }
}