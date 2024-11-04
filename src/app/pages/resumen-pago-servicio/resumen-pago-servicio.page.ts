import { Component, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resumen-pago-servicio',
  templateUrl: './resumen-pago-servicio.page.html',
  styleUrls: ['./resumen-pago-servicio.page.scss'],
})
export class ResumenPagoServicioPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/detalle-servicio';

  constructor(private modalController: ModalController,) { }
  
  closeModal() {
    this.modalController.getTop().then(modal => {
      if (modal) {
        modal.dismiss(); // Cierra el modal
      }
    });
  }
  

  ngOnInit() {
  }

}

