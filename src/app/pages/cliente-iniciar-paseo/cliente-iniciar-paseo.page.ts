import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-iniciar-paseo',
  templateUrl: './cliente-iniciar-paseo.page.html',
  styleUrls: ['./cliente-iniciar-paseo.page.scss'],
})
export class ClienteIniciarPaseoPage implements OnInit {
  dynamicHeaderText: string = '';
  constructor() { }

  ngOnInit() {
  }

}
