import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntos-de-interes',
  templateUrl: './puntos-de-interes.page.html',
  styleUrls: ['./puntos-de-interes.page.scss'],
})
export class PuntosDeInteresPage implements OnInit {

  paseos: any[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarPaseos()
  }

  cargarPaseos() {
    this.paseos = [{
      nombre: 'Parque para perros',
      distancia: 'A 0,3 km de ti · Jerez de la Frontera, Cádiz',
      imgPerro: 'assets/imgs/interes/shared image.png',
      imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
      nombreUsuario: 'Ana V.',
      iconoUsuario: 'assets/icons/park-icon.svg'
    },
    {
      nombre: 'Hotel Spa donde se permite entrar…',
      distancia: 'A 0,3 km de ti · Jerez de la Frontera, Cádiz',
      imgPerro: 'assets/imgs/interes/02.png',
      imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
      nombreUsuario: 'Ana V.',
       iconoUsuario: 'assets/icons/hotel-icon.svg'
    },
    {
      nombre: 'Playa de Cádiz apta para todas las…',
      distancia: 'A 0,3 km de ti · Jerez de la Frontera, Cádiz',
      imgPerro: 'assets/imgs/interes/01.png',
      imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
      nombreUsuario: 'Ana V.',
       iconoUsuario: 'assets/icons/beach-icon.svg'
    }
    ];
  }

}
