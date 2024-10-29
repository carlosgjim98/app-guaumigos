import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.page.html',
  styleUrls: ['./detalle-servicio.page.scss'],
})
export class DetalleServicioPage implements OnInit {

  constructor(private modalController: ModalController, ) { }

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
