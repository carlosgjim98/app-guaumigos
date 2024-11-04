import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.page.html',
  styleUrls: ['./editar-mascota.page.scss'],
})
export class EditarMascotaPage implements OnInit {
  dynamicHeaderText: string = 'Moka';
  returnLink: string = '/perfil-mascota';
  constructor() { }

  ngOnInit() {
  }

}
