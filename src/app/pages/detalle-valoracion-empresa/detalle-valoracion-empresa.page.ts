import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-valoracion-empresa',
  templateUrl: './detalle-valoracion-empresa.page.html',
  styleUrls: ['./detalle-valoracion-empresa.page.scss'],
})
export class DetalleValoracionEmpresaPage implements OnInit {

  dynamicHeaderText: string = 'Limado de uñas con Manchitas';
  returnLink: string = '/mis-valoraciones-empresa';

  constructor() { }

  ngOnInit() {
  }

}
