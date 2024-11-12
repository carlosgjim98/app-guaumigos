import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {
  userType: string = ''; // Variable para almacenar el tipo de usuario
  datos = [
    {
      nombre: 'Paseo durante el día con Jackie',
      fecha: '18/09/2024',
      hora: '16:00 P.M.',
      estado: 'Pendiente',
       ruta: '/datos-cliente'
    },
    {
      nombre: 'Paseo durante el día con Moka',
      fecha: '18/09/2024',
      hora: '11:00 A.M.',
      estado: 'Aceptada',
      
    },
    {
      nombre: 'Paseo durante el día con Bimbo',
      fecha: '15/09/2024',
      hora: '10:00 A.M.',
      estado: 'Rechazada',
    },
  ];

  constructor() { }

  ngOnInit() {
    // Obtener el tipo de usuario desde sessionStorage
    this.userType = sessionStorage.getItem('tipoUsuario');
    // Cambiar los datos según el tipo de usuario
    this.cambiarDatosPorUsuario();
  }

  cambiarDatosPorUsuario() {
    if (this.userType === 'empresa') {
      this.datos = this.datos.map(paseo => {
        // Cambiar el texto dependiendo del tipo de usuario
        if (paseo.nombre.includes('Jackie')) {
          paseo.nombre = 'Corte de pelo a tu mascota con Jackie';
        } else if (paseo.nombre.includes('Moka')) {
          paseo.nombre = 'Limado de uñas con Moka';
          paseo.ruta= "/detalles-solicitud-aceptada-servicio"
        } else if (paseo.nombre.includes('Bimbo')) {
          paseo.nombre = 'Deslanado con Bimbo';
        }
        return paseo;
      });
    }
  }

  
}
