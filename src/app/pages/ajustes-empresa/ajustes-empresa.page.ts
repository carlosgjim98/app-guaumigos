import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes-empresa',
  templateUrl: './ajustes-empresa.page.html',
  styleUrls: ['./ajustes-empresa.page.scss'],
})
export class AjustesEmpresaPage implements OnInit {

  dynamicHeaderText: string = 'Ajustes';
  returnLink: string = '/tabs/perfil';

  constructor() { }

  ngOnInit() {
  }

}
