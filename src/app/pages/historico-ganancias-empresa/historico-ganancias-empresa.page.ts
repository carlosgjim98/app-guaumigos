import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-ganancias-empresa',
  templateUrl: './historico-ganancias-empresa.page.html',
  styleUrls: ['./historico-ganancias-empresa.page.scss'],
})
export class HistoricoGananciasEmpresaPage implements OnInit {

  dynamicHeaderText: string = 'Histórico de ganancias';
  returnLink: string = '/ajustes-empresa';

  constructor() { }

  ngOnInit() {
  }

}
