import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-solicitud-aceptada-iniciar-paseo',
  templateUrl: './detalle-solicitud-aceptada-iniciar-paseo.page.html',
  styleUrls: ['./detalle-solicitud-aceptada-iniciar-paseo.page.scss'],
})
export class DetalleSolicitudAceptadaIniciarPaseoPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/calendario-paseador';

  constructor() { }

  ngOnInit() {
  }

}
