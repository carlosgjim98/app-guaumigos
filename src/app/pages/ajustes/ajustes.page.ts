import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  dynamicHeaderText: string = 'Ajustes';
  returnLink: string = '/tabs/perfil';

  constructor() { }

  ngOnInit() {
  }

}
