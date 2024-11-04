import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  dynamicHeaderText: string = 'Notificaciones';
  returnLink: string = '/tabs/perfil';

  constructor() { }

  ngOnInit() {
  }

}
