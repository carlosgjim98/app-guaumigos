import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anadir-valoracion-desde-detalle-de-solicitud',
  templateUrl: './anadir-valoracion-desde-detalle-de-solicitud.page.html',
  styleUrls: ['./anadir-valoracion-desde-detalle-de-solicitud.page.scss'],
})
export class AnadirValoracionDesdeDetalleDeSolicitudPage implements OnInit {

  dynamicHeaderText: string = 'Valoraciones';
  returnLink: string = '/detalle-solicitud-aceptada';

  stars: number[] = [1, 2, 3, 4, 5];
  currentRating: number = 0;

  constructor() { }

  ngOnInit() {
  }

  setRating(rating: number): void {
    this.currentRating = rating;
  }

  getStarSrc(index: number): string {
    if ( this.currentRating >= index) {
      return 'assets/icons/star.svg';
    } else {
      return 'assets/icons/star-disabled.svg'; 
    }
  }

}
