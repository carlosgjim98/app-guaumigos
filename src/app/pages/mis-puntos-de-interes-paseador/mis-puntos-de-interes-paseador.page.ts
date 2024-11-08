import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-puntos-de-interes-paseador',
  templateUrl: './mis-puntos-de-interes-paseador.page.html',
  styleUrls: ['./mis-puntos-de-interes-paseador.page.scss'],
})
export class MisPuntosDeInteresPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Mis puntos de interés publicados';
  returnLink: string = '/ajustes-paseador';

  constructor() { }

  ngOnInit() {
  }

}
