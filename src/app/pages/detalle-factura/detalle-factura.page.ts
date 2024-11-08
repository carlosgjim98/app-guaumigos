import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.page.html',
  styleUrls: ['./detalle-factura.page.scss'],
})
export class DetalleFacturaPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/facturas-paseador';

  constructor() { }

  ngOnInit() {
  }

}
