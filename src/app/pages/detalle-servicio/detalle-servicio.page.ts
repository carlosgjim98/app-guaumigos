import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.page.html',
  styleUrls: ['./detalle-servicio.page.scss'],
})
export class DetalleServicioPage implements OnInit {

  constructor(private modalController: ModalController, ) { }
  @ViewChild('open_modal', { static: true }) open_modal!: IonModal;
 

  @ViewChild('open_modal_2', { static: true }) open_modal_2!: IonModal;
 
  closeModal() {
    this.open_modal.dismiss()
        this.open_modal_2.present();
  }

  openModal() {
    this.open_modal.present();

  }

  ngOnInit() {
  }

}
