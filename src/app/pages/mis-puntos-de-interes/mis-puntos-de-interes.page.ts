import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-puntos-de-interes',
  templateUrl: './mis-puntos-de-interes.page.html',
  styleUrls: ['./mis-puntos-de-interes.page.scss'],
})
export class MisPuntosDeInteresPage implements OnInit {
   
  dynamicHeaderText: string = 'Mis puntos de interés publicados';
  returnLink: string = '/ajustes';
  constructor() { }

  ngOnInit() {
  }

}
