import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anadir-valoracion',
  templateUrl: './anadir-valoracion.page.html',
  styleUrls: ['./anadir-valoracion.page.scss'],
})
export class AnadirValoracionPage implements OnInit {

  dynamicHeaderText: string = 'Valoraciones';
  returnLink: string = '/valoraciones';

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
