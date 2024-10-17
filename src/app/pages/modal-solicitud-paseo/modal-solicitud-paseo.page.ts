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
    
  }

  
}
