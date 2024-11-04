import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-suscripcion',
  templateUrl: './mi-suscripcion.page.html',
  styleUrls: ['./mi-suscripcion.page.scss'],
})
export class MiSuscripcionPage implements OnInit {

  dynamicHeaderText: string = 'Mi suscripción';
  returnLink: string = '/ajustes';

  constructor() { }

  ngOnInit() {
  }

}
