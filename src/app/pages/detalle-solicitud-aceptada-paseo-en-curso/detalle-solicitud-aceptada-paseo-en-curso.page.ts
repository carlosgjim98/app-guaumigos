import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalle-solicitud-aceptada-paseo-en-curso',
  templateUrl: './detalle-solicitud-aceptada-paseo-en-curso.page.html',
  styleUrls: ['./detalle-solicitud-aceptada-paseo-en-curso.page.scss'],
})
export class DetalleSolicitudAceptadaPaseoEnCursoPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/cliente-iniciar-paseo';

  constructor() { }

  ngOnInit() {
  }

}
