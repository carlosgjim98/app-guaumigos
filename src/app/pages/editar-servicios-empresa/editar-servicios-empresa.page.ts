import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-servicios-empresa',
  templateUrl: './editar-servicios-empresa.page.html',
  styleUrls: ['./editar-servicios-empresa.page.scss'],
})
export class EditarServiciosEmpresaPage implements OnInit {

  dynamicHeaderText: string = 'Paseos';
  servicios: any[] = []; 
  segmentValue: string = 'informacion';
  constructor() { }

  ngOnInit() {
    this.cargarServicios();
  }

  cargarServicios() {
    this.servicios = [{
      nombre: 'Corte de pelo + limado de uñas',
    
      distancia: ' Jerez de la Frontera, Cádiz',
      imgPerro: 'assets/imgs/yorkshire-terrier-getting-procedure-groomer-salon-cropped-photo-little-dog-yorkshire-terrier-puppy-getting-haircut@3x.png',
      precio: '25€',
    
    },
    {
      nombre: 'Corte de pelo ',
      
      distancia: ' Jerez de la Frontera, Cádiz',
      imgPerro: 'assets/imgs/yorkshire2-terrier-getting-procedure-groomer-salon-cropped-photo-little-dog-yorkshire-terrier-puppy-getting-haircut@3x.png',
      precio: '18€',
     
    }
    ];
  }
}
