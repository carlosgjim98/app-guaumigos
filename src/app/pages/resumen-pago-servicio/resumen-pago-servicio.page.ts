import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-pago-servicio',
  templateUrl: './resumen-pago-servicio.page.html',
  styleUrls: ['./resumen-pago-servicio.page.scss'],
})
export class ResumenPagoServicioPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/detalle-servicio';

  constructor() { }

  ngOnInit() {
  }

}
