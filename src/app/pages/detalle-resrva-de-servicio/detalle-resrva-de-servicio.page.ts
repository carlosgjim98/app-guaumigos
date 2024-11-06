import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-resrva-de-servicio',
  templateUrl: './detalle-resrva-de-servicio.page.html',
  styleUrls: ['./detalle-resrva-de-servicio.page.scss'],
})
export class DetalleResrvaDeServicioPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/mis-servicios-reservados';

  constructor() { }

  ngOnInit() {
  }

}
