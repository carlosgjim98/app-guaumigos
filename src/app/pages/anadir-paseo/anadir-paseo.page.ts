import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anadir-paseo',
  templateUrl: './anadir-paseo.page.html',
  styleUrls: ['./anadir-paseo.page.scss'],
})
export class AnadirPaseoPage implements OnInit {

  dynamicHeaderText: string = 'NUevo paseo';
  returnLink: string = '/editar-servicios-paseos';

  constructor() { }

  ngOnInit() {
  }

}
