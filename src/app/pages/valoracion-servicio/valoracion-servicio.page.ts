import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valoracion-servicio',
  templateUrl: './valoracion-servicio.page.html',
  styleUrls: ['./valoracion-servicio.page.scss'],
})
export class ValoracionServicioPage implements OnInit {

  dynamicHeaderText: string = 'Añade una valoración';
 

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

