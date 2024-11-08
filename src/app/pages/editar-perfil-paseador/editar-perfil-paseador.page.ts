import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil-paseador',
  templateUrl: './editar-perfil-paseador.page.html',
  styleUrls: ['./editar-perfil-paseador.page.scss'],
})
export class EditarPerfilPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Editar perfil';
  returnLink: string = '/tabs/mi-perfil-paseador';

  constructor() { }

  ngOnInit() {
  }

}
