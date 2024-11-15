import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurar-mis-datos-paseador',
  templateUrl: './configurar-mis-datos-paseador.page.html',
  styleUrls: ['./configurar-mis-datos-paseador.page.scss'],
})
export class ConfigurarMisDatosPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Configurar mis datos';
  returnLink: string = '/ajustes-paseador';

  constructor() { }

  ngOnInit() {
  }

}
