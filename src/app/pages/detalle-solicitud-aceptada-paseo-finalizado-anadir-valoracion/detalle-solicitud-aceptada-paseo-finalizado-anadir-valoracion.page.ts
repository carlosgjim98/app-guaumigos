import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-solicitud-aceptada-paseo-finalizado-anadir-valoracion',
  templateUrl: './detalle-solicitud-aceptada-paseo-finalizado-anadir-valoracion.page.html',
  styleUrls: ['./detalle-solicitud-aceptada-paseo-finalizado-anadir-valoracion.page.scss'],
})
export class DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/cliente-iniciar-paseo';

  constructor() { }

  ngOnInit() {
  }

}
