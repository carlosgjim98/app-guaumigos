import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-valoraciones-paseador',
  templateUrl: './mis-valoraciones-paseador.page.html',
  styleUrls: ['./mis-valoraciones-paseador.page.scss'],
})
export class MisValoracionesPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Mis valoraciones';
  returnLink: string = '/ajustes';

  constructor() { }

  ngOnInit() {
  }

}
