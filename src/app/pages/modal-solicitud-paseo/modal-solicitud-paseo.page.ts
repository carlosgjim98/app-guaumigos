import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-solicitud-paseo',
  templateUrl: './modal-solicitud-paseo.page.html',
  styleUrls: ['./modal-solicitud-paseo.page.scss'],
})
export class ModalSolicitudPaseoPage implements OnInit {

  paseadores: any[] = [];
  
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

  dismiss() {

    // using the injected ModalController this page

    // can "dismiss" itself and optionally pass back data

    this.modalCtrl.dismiss({

      'dismissed': true

    });

  }

}
