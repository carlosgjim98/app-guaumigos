import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-valoracion',
  templateUrl: './detalle-valoracion.page.html',
  styleUrls: ['./detalle-valoracion.page.scss'],
})
export class DetalleValoracionPage implements OnInit {
  dynamicHeaderText: string = '';
  returnLink: string = '/mis-valoraciones';
  
  // Cambia 'paseadores' por 'paseador' y asegúrate de que sea un objeto
  paseador: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarPaseador(); // Llama al método modificado
  }

  cargarPaseador() {
    // Asigna el objeto de datos directamente a 'paseador'
    this.paseador = {
      nombre: 'Ana Velázquez',
      localizacion: 'Jerez de la Frontera, España',
      opiniones: '1635',
      valoracion: '4,8',
      imagenes: [
        'assets/imgs/perros/shared image-full.png', 
        'assets/imgs/perros/shared image-full.png', 
        'assets/imgs/perros/shared image-full.png', 
        'assets/imgs/perros/shared image-full.png'
      ],
      imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
      precio: '15€',
      duracion: '1 horas',
      fecha: '18/10/2024',
      hora: '11:00 A.M',
      imgPerro: 'assets/imgs/perros/Rectángulo 19665.png',
      nombrePerro: 'Moka',
      raza: 'Pug',
      edadPerro: '2'
    };
  }
}
