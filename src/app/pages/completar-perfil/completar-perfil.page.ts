import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completar-perfil',
  templateUrl: './completar-perfil.page.html',
  styleUrls: ['./completar-perfil.page.scss'],
})
export class CompletarPerfilPage implements OnInit {

  dynamicHeaderText: string = 'Completa tu perfil';
  returnLink: string = '/resgistro-usuario-paseador';

  constructor() { }

  ngOnInit() {
  }

}
