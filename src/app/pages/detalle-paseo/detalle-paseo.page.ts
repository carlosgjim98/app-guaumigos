import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular'

import { ModalSolicitudPaseoPage } from '../modal-solicitud-paseo/modal-solicitud-paseo.page'

@Component({
  selector: 'app-detalle-paseo',
  templateUrl: './detalle-paseo.page.html',
  styleUrls: ['./detalle-paseo.page.scss'],
})
export class DetallePaseoPage implements OnInit {

  paseadores: any[] = [];

  tipoPaseo: string[] = ['Paseo durante el día', 'Paseo de 2 horas por 30€'];
  mascotasAcepta: string[] = ['Razas: Pastor Alemán, Bulldog, Labrador, Beagle, Caniche, Chihuahua, Dachshund,',
    'Edad: entre 2 y 11 años', 'Tamaño: menos de 35 cm', 'Peso: entre 10 y 30 kg', 'Hembra, Macho', 'La mascota no puede estar en celo'];
  serviciosExtra: string[] = ['Visita al veterinario', 'Administración de medicamentos', 'Corrección de malos hábitos', 'Socialización'];

  constructor(private modalCtrl: ModalController) { }

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
      }
    ];
  }

  async presentModal() {

    const modal = await this.modalCtrl.create({

      component: ModalSolicitudPaseoPage,

      mode: 'ios',
      // enterAnimation: myEnterAnimation,

      // leaveAnimation: myLeaveAnimation,

      cssClass: 'modal-date',

    });

    return await modal.present();

  }
}
