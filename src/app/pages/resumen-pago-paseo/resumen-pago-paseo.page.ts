import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-pago-paseo',
  templateUrl: './resumen-pago-paseo.page.html',
  styleUrls: ['./resumen-pago-paseo.page.scss'],
})
export class ResumenPagoPaseoPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/detalle-paseo';

  paseadores: any[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarPaseadores();
  }

  cargarPaseadores() {
    this.paseadores = [
      {
        nombre: 'Ana Velázquez',
        localizacion: 'Jerez de la Frontera, España',
        opiniones: '1635',
        valoracion: '4,8',
        imagenes: ['assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png'],
        imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
        precio: '15€',
        duracion: '1 horas',
        fecha: '18/10/2024',
        hora: '11:00 A.M',
        imgPerro: 'assets/imgs/perros/Rectángulo 19665.png',
        nombrePerro: 'Moka',
        raza: 'Pug',
        edadPerro: '2'
      }
    ];
  }
}
