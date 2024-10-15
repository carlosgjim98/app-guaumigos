import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-paseo',
  templateUrl: './detalle-paseo.page.html',
  styleUrls: ['./detalle-paseo.page.scss'],
})
export class DetallePaseoPage implements OnInit {

  paseadores: any[] = [];

  tipoPaseo: string[] = ['Paseo durante el día', 'Paseo de 2 horas por 30€'];
  mascotasAcepta: string[] = ['Razas: Pastor Alemán, Bulldog, Labrador, Beagle, Caniche, Chihuahua, Dachshund,',
    'Edad: entre 2 y 11 años','Tamaño: menos de 35 cm', 'Peso: entre 10 y 30 kg', 'Hembra, Macho', 'La mascota no puede estar en celo'];
  serviciosExtra: string[] = ['Visita al veterinario', 'Administración de medicamentos', 'Corrección de malos hábitos', 'Socialización'];

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
        imgPerro: 'assets/imgs/perros/shared image-full.png',
        imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
      }
    ];
  }
}
