import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-perfil-empresa',
  templateUrl: './mi-perfil-empresa.page.html',
  styleUrls: ['./mi-perfil-empresa.page.scss'],
})
export class MiPerfilEmpresaPage implements OnInit {

  selectedSegment: string = 'option1';
  esEspecial: boolean = true;

  // segmentChanged(event: any) {
  //   console.log('Segment changed:', event.detail.value);
  //   this.selectedSegment = event.detail.value;
  // }

  paseadores: any[] = [];
  servicios: any[] = []; 

  segmentValue: string = 'galeria';

  mostrarTextoCompleto: boolean = false;

  razas: string[] = [
    'Pastor Alemán', 'Bulldog', 'Labrador', 'Beagle', 'Caniche',
    'Chihuahua', 'Dachshund', 'Pastor Belga', 'Golden Retriever'
  ];

  razasConcatenadas: string = '';

  edad: string[] = ['2', '11'];

  tamano: string[] = [
    'Menos de 35 cm'
  ];

  peso: string[] = ['10', '30']

  sexo: string[] = [
    'Hembra', 'Macho'
  ];

  celo: string[] = [
    'No'
  ];

  galeriaFotos = [
    'assets/imgs/peluqueria/shared image.png',
    'assets/imgs/peluqueria/shared image-6.png',
    'assets/imgs/peluqueria/shared image-3.png',
    'assets/imgs/peluqueria/shared image-1.png',
    'assets/imgs/peluqueria/shared image-4.png',
    'assets/imgs/peluqueria/shared image-7.png',
    'assets/imgs/peluqueria/shared image-2.png',
    'assets/imgs/peluqueria/shared image-3.png',
    'assets/imgs/peluqueria/shared image-5.png',
    
  ];

  constructor() { 
    this.razasConcatenadas = this.razas.join(', ');
  }

  ngOnInit() {
    this.cargarPaseadores();
    this.cargarServicios();
    this.razasConcatenadas = this.razas.join(', ');
  }

  cargarPaseadores() {
    this.paseadores = [
      {
        nombre: 'Ana Velázquez',
        localizacion: 'Jerez de la Frontera, España',
        opiniones: '1635',
        valoracion: '4,8',
        imagenes: ['assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png'],
        imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
        precio: '15€',
        duracion: '1 horas',

      }
    ];
  }

  cargarServicios() {
    this.servicios = [{
      nombre: 'Corte de pelo + limado de uñas',
    
      distancia: ' Jerez de la Frontera sadasdas',
      imgPerro: 'assets/imgs/yorkshire-terrier-getting-procedure-groomer-salon-cropped-photo-little-dog-yorkshire-terrier-puppy-getting-haircut@3x.png',
      precio: '15€',
    
    },
    {
      nombre: 'Corte de pelo ',
      
      distancia: ' Jerez de la Frontera sadasdas',
      imgPerro: 'assets/imgs/yorkshire2-terrier-getting-procedure-groomer-salon-cropped-photo-little-dog-yorkshire-terrier-puppy-getting-haircut@3x.png',
      precio: '15€',
     
    }
    ];
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  alternarVerMas(): void {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;

}
}

