import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-services-filters',
  templateUrl: './services-filters.page.html',
  styleUrls: ['./services-filters.page.scss'],
})
export class ServicesFiltersPage implements OnInit {

  dynamicHeaderText: string = 'Filtros';
  returnLink: string = '/tabs/listado-paseadores';

  form: FormGroup;

  rangoSeleccionado: number = 5;

  opcionSeleccionadaTamano: string = '';
  opcionSeleccionadaPeso: string = '';

  buttons=[
    {
      id : 1,
      text : 'Guarderías caninas',
      checked : false,
    },
    
    {
      id : 2,
      text : 'Hoteles para mascotas',
      checked : false,
    },
    {
      id : 3,
      text : 'Servicios de rehabilitación',
      checked : false,
    },
    {
      id : 4,
      text : 'Peluquería canina',
      checked : false,
    },
    {
      id : 5,
      text : 'Comida para perros',
      checked : false,
    },
    {
      id : 6,
      text : 'Juguetes para perros',
      checked : false,
    },
    {
      id : 7,
      text : 'Accesorios (correas, collares, camas)',
      checked : false,
    },
  ]

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onRangoChange(event: any) {
    this.rangoSeleccionado = event.target.value;
  }

  color(id){
    let index = this.buttons.findIndex(item => item.id === id);
    this.buttons[index].checked = !this.buttons[index].checked
  }

  

}
