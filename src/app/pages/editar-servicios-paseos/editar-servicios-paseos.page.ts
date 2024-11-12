import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-servicios-paseos',
  templateUrl: './editar-servicios-paseos.page.html',
  styleUrls: ['./editar-servicios-paseos.page.scss'],
})
export class EditarServiciosPaseosPage implements OnInit {

  dynamicHeaderText: string = 'Paseos';
  returnLink: string = '/tabs/mi-perfil-paseador';
  selectedSegment: string = 'option1';
  esEspecial: boolean = true;

  
  paseos: any[] = [];

  segmentValue: string = 'informacion';

  

  

  constructor() { }

  ngOnInit() {
    this.cargarPaseos();
  }


  cargarPaseos() {
    this.paseos = [{
      nombre: 'Paseo de dia',
      valoracion: '4,8',
      distancia: 'A 0,1 km de ti · Jerez de la Frontera, Cádiz',
      imgPerro: 'assets/imgs/perros/shared image.png',
      precio: '15€',
      duracion: '1 horas',
    },
    {
      nombre: 'Paseo de noche',
      valoracion: '4,8',
      distancia: 'A 0,1 km de ti · Jerez de la Frontera, Cádiz',
      imgPerro: 'assets/imgs/perros/shared image-3.png',
      precio: '15€',
      duracion: '1 horas',
    }
    ];
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  

  

}
