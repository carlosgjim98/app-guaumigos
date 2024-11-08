import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  dynamicHeaderText: string = 'Mis solicitudes de paseo';
  returnLink: string = '/ajustes';
  constructor() { }

  ngOnInit() {
  }

}
