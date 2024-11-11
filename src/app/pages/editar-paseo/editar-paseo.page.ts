import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-paseo',
  templateUrl: './editar-paseo.page.html',
  styleUrls: ['./editar-paseo.page.scss'],
})
export class EditarPaseoPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/detalle-servicio-paseo';

  opcionSeleccionadaTamano: string = '';

  constructor() { }

  ngOnInit() {
  }

  seleccionarOpcionTamano(opcion: string) {
    this.opcionSeleccionadaTamano = opcion;
  }

}
