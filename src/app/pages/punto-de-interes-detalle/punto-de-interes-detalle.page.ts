import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto-de-interes-detalle',
  templateUrl: './punto-de-interes-detalle.page.html',
  styleUrls: ['./punto-de-interes-detalle.page.scss'],
})
export class PuntoDeInteresDetallePage implements OnInit {


  images: string[] = [
    'assets/imgs/shared-image@3x.png',
    
    // Agrega más imágenes según sea necesario
  ];



  constructor() { }

  ngOnInit() {
  }

}
