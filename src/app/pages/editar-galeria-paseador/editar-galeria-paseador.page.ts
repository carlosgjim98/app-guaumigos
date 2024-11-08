import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-galeria-paseador',
  templateUrl: './editar-galeria-paseador.page.html',
  styleUrls: ['./editar-galeria-paseador.page.scss'],
})
export class EditarGaleriaPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Filtros';
  returnLink: string = '/tabs/puntos-de-interes';
  selectedSegment: string = 'option1';
  esEspecial: boolean = true;

  
  segmentValue: string = 'galeria';

  


  galeriaFotos = [
    'assets/imgs/perrosPerfil/shared image.png',
    'assets/imgs/perrosPerfil/shared image-3.png',
    'assets/imgs/perrosPerfil/shared image-6.png',
    'assets/imgs/perrosPerfil/shared image-1.png',
    'assets/imgs/perrosPerfil/shared image-4.png',
    'assets/imgs/perrosPerfil/shared image-7.png',
    'assets/imgs/perrosPerfil/shared image-2.png',
    'assets/imgs/perrosPerfil/shared image-5.png',
    'assets/imgs/perrosPerfil/shared image-8.png',
  ];

  constructor() { 
    
    
  }

  ngOnInit() {
   
    
  }
  

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  
  

}

