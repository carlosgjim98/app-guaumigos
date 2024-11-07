import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-usuario',
  templateUrl: './seleccionar-usuario.page.html',
  styleUrls: ['./seleccionar-usuario.page.scss'],
})
export class SeleccionarUsuarioPage {

  opcionSeleccionada: string = '';

  
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

  constructor(private router: Router) {}

  // Lógica para seleccionar una opción de usuario
  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  // Verificar si la opción está seleccionada
  esSeleccionada(opcion: string): boolean {
    return this.opcionSeleccionada === opcion;
  }

  // Obtener el icono correspondiente dependiendo si está seleccionado o no
  obtenerRutaIcono(opcion: string): string {
    return this.esSeleccionada(opcion)
      ? this.iconos[opcion].seleccionado
      : this.iconos[opcion].normal;
  }

  // Al enviar el formulario, guardar el tipo de usuario y redirigir al login
  continuar() {
    if (this.opcionSeleccionada) {
      // Guardar el tipo de usuario seleccionado en sessionStorage
      sessionStorage.setItem('tipoUsuario', this.opcionSeleccionada);

      // Redirigir al login
      this.router.navigate(['/login']);
    }
  }
}
