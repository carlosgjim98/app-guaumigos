import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-paseador',
  templateUrl: './perfil-paseador.page.html',
  styleUrls: ['./perfil-paseador.page.scss'],
})
export class PerfilPaseadorPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/detalle-paseo';
  esEspecial: boolean = true;

  paseadores: any[] = [];
  paseos: any[] = [];

  segmentValue: string = 'informacion';

  mostrarTextoCompleto: boolean = false;

  razas: string[] = [
    'Pastor Alemán', 'Bulldog', 'Labrador', 'Beagle', 'Caniche',
    'Chihuahua', 'Dachshund', 'Pastor Belga', 'Golden Retriever'
  ];

  razasConcatenadas: string = '';

  edad: string[] = ['2', '11'];

  tamano: string[] = [
    'Menos de 35 cm'
  ];

  peso: string[] = ['10', '30']

  sexo: string[] = [
    'Hembra', 'Macho'
  ];

  celo: string[] = [
    'No'
  ];

  galeriaFotos = [
    'assets/imgs/perrosPerfil/shared image.png',
    'assets/imgs/perrosPerfil/shared image-1.png',
    'assets/imgs/perrosPerfil/shared image-2.png',
    'assets/imgs/perrosPerfil/shared image-3.png',
    'assets/imgs/perrosPerfil/shared image-4.png',
    'assets/imgs/perrosPerfil/shared image-5.png',
    'assets/imgs/perrosPerfil/shared image-6.png',
    'assets/imgs/perrosPerfil/shared image-7.png',
    'assets/imgs/perrosPerfil/shared image-8.png',
    'assets/imgs/perrosPerfil/shared image-9.png',
    'assets/imgs/perrosPerfil/shared image-10.png',
    'assets/imgs/perrosPerfil/shared image-11.png',
  ];

  constructor() {
    this.razasConcatenadas = this.razas.join(', ');
  }

  ngOnInit() {
    this.cargarPaseadores();
    this.cargarPaseos();
    this.razasConcatenadas = this.razas.join(', ');
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

      }
    ];
  }

  cargarPaseos() {
    this.paseos = [{
      nombre: 'Paseo de dia',
      valoracion: '4,8',
      distancia: 'A 0,1 km de ti · Jerez de la Frontera sadasdas',
      imgPerro: 'assets/imgs/perros/shared image.png',
      precio: '15€',
      duracion: '1 horas',
    },
    {
      nombre: 'Paseo de dia',
      valoracion: '4,8',
      distancia: 'A 0,1 km de ti · Jerez de la Frontera sadasdas',
      imgPerro: 'assets/imgs/perros/shared image-3.png',
      precio: '15€',
      duracion: '1 horas',
    }
    ];
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  alternarVerMas(): void {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }

}
