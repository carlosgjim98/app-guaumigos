import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completar-perfil-empresa',
  templateUrl: './completar-perfil-empresa.page.html',
  styleUrls: ['./completar-perfil-empresa.page.scss'],
})
export class CompletarPerfilEmpresaPage implements OnInit {
  dynamicHeaderText: string = 'Completa tu perfil';
  constructor() { }

  ngOnInit() {
  }

}
