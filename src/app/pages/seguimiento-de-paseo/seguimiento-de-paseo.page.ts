import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seguimiento-de-paseo',
  templateUrl: './seguimiento-de-paseo.page.html',
  styleUrls: ['./seguimiento-de-paseo.page.scss'],
})
export class SeguimientoDePaseoPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/detalle-solicitud-aceptada';

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
