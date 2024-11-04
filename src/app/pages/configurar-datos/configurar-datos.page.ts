import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurar-datos',
  templateUrl: './configurar-datos.page.html',
  styleUrls: ['./configurar-datos.page.scss'],
})
export class ConfigurarDatosPage implements OnInit {

  
  dynamicHeaderText: string = 'Configurar mis datos';
  returnLink: string = '/ajustes';
  constructor() { }

  ngOnInit() {
  }

}
