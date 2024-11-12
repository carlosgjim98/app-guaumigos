import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-valoraciones-empresa',
  templateUrl: './mis-valoraciones-empresa.page.html',
  styleUrls: ['./mis-valoraciones-empresa.page.scss'],
})
export class MisValoracionesEmpresaPage implements OnInit {

  dynamicHeaderText: string = 'Mis valoraciones';
  returnLink: string = '/ajustes';

  constructor() { }

  ngOnInit() {
  }

}
