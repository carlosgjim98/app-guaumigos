import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-perfil-empresa-galeria',
  templateUrl: './perfil-empresa-galeria.page.html',
  styleUrls: ['./perfil-empresa-galeria.page.scss'],
})
export class PerfilEmpresaGaleriaPage implements OnInit {

  selectedSegment: string = 'option1';

  segmentChanged(event: any) {
    console.log('Segment changed:', event.detail.value);
    this.selectedSegment = event.detail.value;
  }

  

  constructor() { }

  ngOnInit() {
  }

  

}
