import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mis-solicitudes-de-paseo',
  templateUrl: './mis-solicitudes-de-paseo.page.html',
  styleUrls: ['./mis-solicitudes-de-paseo.page.scss'],
})
export class MisSolicitudesDePaseoPage implements OnInit {

  dynamicHeaderText: string = 'Mis solicitudes de paseo';
  returnLink: string = '/ajustes';

  buttons=[
    {
      id : 1,
      text : 'Todas las solicitudes',
      checked : false,

    },
    {
      id : 2,
      text : 'Pendientes',
      checked : false,

    }
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  color(id){
    let index = this.buttons.findIndex(item => item.id === id);
    this.buttons[index].checked = !this.buttons[index].checked
  }

}
