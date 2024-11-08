import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas-paseador',
  templateUrl: './facturas-paseador.page.html',
  styleUrls: ['./facturas-paseador.page.scss'],
})
export class FacturasPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Mis facturas';
  returnLink: string = '/ajustes-paseador';

  constructor() { }

  ngOnInit() {
  }

}
