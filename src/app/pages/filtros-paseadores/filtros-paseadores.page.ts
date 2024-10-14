import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtros-paseadores',
  templateUrl: './filtros-paseadores.page.html',
  styleUrls: ['./filtros-paseadores.page.scss'],
})
export class FiltrosPaseadoresPage implements OnInit {

  dynamicHeaderText: string = 'Filtros';
  returnLink: string = '/tabs/listado-paseadores';

  form: FormGroup;

  rangoSeleccionado: number = 5;

  opcionSeleccionadaTamano: string = '';
  opcionSeleccionadaPeso: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      paseosDia: [false],
      paseosNoche: [false],
      guarderia: [false],
    });
  }

  onRangoChange(event: any) {
    this.rangoSeleccionado = event.target.value;
  }


  seleccionarOpcionTamano(opcion: string) {
    this.opcionSeleccionadaTamano = opcion;
  }

  seleccionarOpcionPeso(opcion: string) {
    this.opcionSeleccionadaPeso = opcion;
  }

  esSeleccionadaTamano(opcion: string): boolean {
    return this.opcionSeleccionadaTamano === opcion;
  }

  esSeleccionadaPeso(opcion: string): boolean {
    return this.opcionSeleccionadaPeso === opcion;
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
