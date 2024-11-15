import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-ganancias-paseador',
  templateUrl: './historico-ganancias-paseador.page.html',
  styleUrls: ['./historico-ganancias-paseador.page.scss'],
})
export class HistoricoGananciasPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Histórico de ganancias';
  returnLink: string = '/ajustes-paseador';

  constructor() { }

  ngOnInit() {
  }

}
