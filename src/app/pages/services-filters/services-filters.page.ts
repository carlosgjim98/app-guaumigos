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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onRangoChange(event: any) {
    this.rangoSeleccionado = event.target.value;
  }

  

}
