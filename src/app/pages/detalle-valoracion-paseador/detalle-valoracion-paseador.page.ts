import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-valoracion-paseador',
  templateUrl: './detalle-valoracion-paseador.page.html',
  styleUrls: ['./detalle-valoracion-paseador.page.scss'],
})
export class DetalleValoracionPaseadorPage implements OnInit {
  dynamicHeaderText: string = 'Paseo de día con Moka';
  returnLink: string = '/mis-valoraciones';
  constructor() { }

  ngOnInit() {
  }

}
