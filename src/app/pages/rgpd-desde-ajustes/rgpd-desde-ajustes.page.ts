import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rgpd-desde-ajustes',
  templateUrl: './rgpd-desde-ajustes.page.html',
  styleUrls: ['./rgpd-desde-ajustes.page.scss'],
})
export class RgpdDesdeAjustesPage implements OnInit {

  dynamicHeaderText: string = 'Política de Privacidad';
  returnLink: string = '/ajustes';

  constructor() { }

  ngOnInit() {
  }

}
