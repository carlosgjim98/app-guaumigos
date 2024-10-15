import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-paseadores',
  templateUrl: './listado-paseadores.page.html',
  styleUrls: ['./listado-paseadores.page.scss'],
})
export class ListadoPaseadoresPage implements OnInit {

  paseadores: any[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarPaseadores();
  }

  cargarPaseadores() {
    this.paseadores = [
      {
        nombre: 'Ana V.',
        distancia: 'A 0,1 km de ti · Jerez de la Frontera…',
        precio: '30€',
        duracion: '2 horas',
        valoracion: '4,8',
        imgPerro: 'assets/imgs/perros/shared image.png',
        imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
      },
      {
        nombre: 'Marcos L.',
        distancia: 'A 0,1 km de ti · Jerez de la Frontera…',
        precio: '15€',
        duracion: '1 horas',
        valoracion: '4,8',
        imgPerro: 'assets/imgs/perros/shared image-1.png',
        imgUsuario: 'assets/imgs/usuarios/Rectángulo 19646.png',
      },
      {
        nombre: 'Marcos L.',
        distancia: 'A 0,1 km de ti · Jerez de la Frontera…',
        precio: '15€',
        duracion: '1 horas',
        valoracion: '4,8',
        imgPerro: 'assets/imgs/perros/shared image-2.png',
        imgUsuario: 'assets/imgs/usuarios/Rectángulo 19646.png',
      },
    ];
  }
}
