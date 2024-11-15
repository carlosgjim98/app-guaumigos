import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurar-mis-datos-empresa',
  templateUrl: './configurar-mis-datos-empresa.page.html',
  styleUrls: ['./configurar-mis-datos-empresa.page.scss'],
})
export class ConfigurarMisDatosEmpresaPage implements OnInit {

  dynamicHeaderText: string = 'Configurar mis datos';
  returnLink: string = '/ajustes-empresa';

  constructor() { }

  ngOnInit() {
  }

}
