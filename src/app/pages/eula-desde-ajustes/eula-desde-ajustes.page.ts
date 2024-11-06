import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eula-desde-ajustes',
  templateUrl: './eula-desde-ajustes.page.html',
  styleUrls: ['./eula-desde-ajustes.page.scss'],
})
export class EulaDesdeAjustesPage implements OnInit {

  dynamicHeaderText: string = 'EULA';
  returnLink: string = '/ajustes';

  constructor() { }

  ngOnInit() {
  }

}
