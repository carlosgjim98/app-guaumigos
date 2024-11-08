import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes-paseador',
  templateUrl: './ajustes-paseador.page.html',
  styleUrls: ['./ajustes-paseador.page.scss'],
})
export class AjustesPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Ajustes';
  returnLink: string = '/tabs/perfil';

  constructor() { }

  ngOnInit() {
  }

}
