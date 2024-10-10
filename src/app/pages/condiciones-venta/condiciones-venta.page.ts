import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condiciones-venta',
  templateUrl: './condiciones-venta.page.html',
  styleUrls: ['./condiciones-venta.page.scss'],
})
export class CondicionesVentaPage implements OnInit {

  dynamicHeaderText: string = 'Condiciones de Venta';
  returnLink: string = '/register';

  constructor() { }

  ngOnInit() {
  }

}
