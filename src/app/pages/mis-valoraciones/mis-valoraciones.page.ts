import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-valoraciones',
  templateUrl: './mis-valoraciones.page.html',
  styleUrls: ['./mis-valoraciones.page.scss'],
})
export class MisValoracionesPage implements OnInit {
  dynamicHeaderText: string = 'Mis valoraciones';
  returnLink: string = '/ajustes';
  paseoNombre: string = '';
  paseoFecha: string = '';
  nombrePaseador:string = '';
  detalleRuta: string;
  userRole: string = sessionStorage.getItem('tipoUsuario') || '';

  constructor() { }

  ngOnInit() {
    this.setUserData();
  }

  setUserData() {
    if (this.userRole === 'paseador') {
      this.paseoNombre = 'Paseo de día con';
      this.nombrePaseador = 'Moka';
      this.paseoFecha = '18/09/2024';
      this.detalleRuta = '/detalle-valoracion-paseador';
    } else if (this.userRole === 'dueño') {
      this.paseoNombre = 'Paseo de día con Ana Velázquez';
      this.paseoFecha = '18/09/2024';
      this.detalleRuta = '/detalle-valoracion';
    } else if (this.userRole === 'empresa') {
      this.paseoNombre = 'Limado de uñas con Manchitas';
      this.paseoFecha = '18/09/2024';
    }
    console.log('detalleRuta:', this.detalleRuta);  // Para verificar el valor
  }
  
}
