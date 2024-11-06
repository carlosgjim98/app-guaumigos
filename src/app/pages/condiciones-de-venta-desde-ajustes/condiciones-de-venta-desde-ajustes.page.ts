import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condiciones-de-venta-desde-ajustes',
  templateUrl: './condiciones-de-venta-desde-ajustes.page.html',
  styleUrls: ['./condiciones-de-venta-desde-ajustes.page.scss'],
})
export class CondicionesDeVentaDesdeAjustesPage implements OnInit {

  dynamicHeaderText: string = 'Condiciones de Venta';
  returnLink: string = '/ajustes';

  constructor() { }

  ngOnInit() {
  }

}
