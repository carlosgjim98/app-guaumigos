import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-punto-de-interes',
  templateUrl: './mapa-punto-de-interes.page.html',
  styleUrls: ['./mapa-punto-de-interes.page.scss'],
})
export class MapaPuntoDeInteresPage implements OnInit {

  dynamicHeaderText: string = 'Mapa';
  returnLink: string="/puntos-de-interes"
  @Input() headerText: string = '';
  @Input() esEspecial: boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

}
