import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-valoraciones',
  templateUrl: './mis-valoraciones.page.html',
  styleUrls: ['./mis-valoraciones.page.scss'],
})
export class MisValoracionesPage implements OnInit {
  dynamicHeaderText: string = 'Mis valoraciones';
  returnLink: string = '/ajustes';
  
  constructor() { }

  ngOnInit() {
  }

}
