import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-galeria-empresa',
  templateUrl: './editar-galeria-empresa.page.html',
  styleUrls: ['./editar-galeria-empresa.page.scss'],
})
export class EditarGaleriaEmpresaPage implements OnInit {

  dynamicHeaderText: string = 'Galeria';
  selectedSegment: string = 'option1';
  esEspecial: boolean = true;
  segmentValue: string = 'galeria';

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
    
    
  }

  ngOnInit() {
   
    
  }
  

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  
  

}