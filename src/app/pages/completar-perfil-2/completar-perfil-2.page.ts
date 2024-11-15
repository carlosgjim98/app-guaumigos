import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completar-perfil-2',
  templateUrl: './completar-perfil-2.page.html',
  styleUrls: ['./completar-perfil-2.page.scss'],
})
export class CompletarPerfil2Page implements OnInit {
  dynamicHeaderText: string = 'Completa tu perfil';
  constructor() { }

  ngOnInit() {
  }

}
