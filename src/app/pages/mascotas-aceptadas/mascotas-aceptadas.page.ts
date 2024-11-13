import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mascotas-aceptadas',
  templateUrl: './mascotas-aceptadas.page.html',
  styleUrls: ['./mascotas-aceptadas.page.scss'],
})
export class MascotasAceptadasPage implements OnInit {

  dynamicHeaderText: string = 'Mascotas aceptadas';
  returnLink: string = '/completar-perfil';

  form: FormGroup;

  rangoSeleccionado: number = 2;
  rangoSeleccionado2: number = 11;

  opcionSeleccionadaTamano: string = '';
  opcionSeleccionadaPeso: string = '';
  selectedGenero: string;
  selectedMascotasEnCelo: string;

  buttons=[
    {
      id : 1,
      text : 'Todas',
      checked : false,
    },
    
    {
      id : 2,
      text : 'Pastor Alemán',
      checked : false,
    },
    {
      id : 3,
      text : 'Bulldog',
      checked : false,
    },
    {
      id : 4,
      text : 'Labrador',
      checked : false,
    },
    {
      id : 5,
      text : 'Beagle',
      checked : false,
    },
    {
      id : 6,
      text : 'Caniche',
      checked : false,
    },
    {
      id : 7,
      text : 'Chihuahua',
      checked : false,
    },
    {
      id : 8,
      text : 'Dachshund',
      checked : false,
    },
    {
      id : 9,
      text : 'Carlino',
      checked : false,
    },
    {
      id : 10,
      text : 'Gran Danés',
      checked : false,
    },
    
  ]

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

  color(id){
    let index = this.buttons.findIndex(item => item.id === id);
    this.buttons[index].checked = !this.buttons[index].checked
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

  seleccionarOpcionGenero(opcion: string) {
    this.selectedGenero = opcion;
  }
  
  esSeleccionadaGenero(opcion: string) {
    return this.selectedGenero === opcion;
  }

  seleccionarOpcionMascotasEnCelo(opcion: string) {
    this.selectedMascotasEnCelo = opcion;
  }
  
  esSeleccionadaMascotasEnCelo(opcion: string) {
    return this.selectedMascotasEnCelo === opcion;
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    } else {
      console.log('Formulario no válido');
    }
  }

}
