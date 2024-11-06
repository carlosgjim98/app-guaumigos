import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-solicitud-en-curso',
  templateUrl: './detalle-solicitud-en-curso.page.html',
  styleUrls: ['./detalle-solicitud-en-curso.page.scss'],
})
export class DetalleSolicitudEnCursoPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/mis-solicitudes-de-paseo';

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
