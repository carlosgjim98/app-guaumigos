import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mis-servicios-reservados',
  templateUrl: './mis-servicios-reservados.page.html',
  styleUrls: ['./mis-servicios-reservados.page.scss'],
})
export class MisServiciosReservadosPage implements OnInit {

  dynamicHeaderText: string = 'Mis servicios reservados';
  returnLink: string = '/ajustes';

  buttons=[
    {
      id : 1,
      text : 'Todas las reservas',
      checked : false,
    },
    
    {
      id : 2,
      text : 'Pendientes',
      checked : false,
    },
    
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  color(id){
    let index = this.buttons.findIndex(item => item.id === id);
    this.buttons[index].checked = !this.buttons[index].checked
  }

}
