import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anadir-servicios-empresa',
  templateUrl: './anadir-servicios-empresa.page.html',
  styleUrls: ['./anadir-servicios-empresa.page.scss'],
})
export class AnadirServiciosEmpresaPage implements OnInit {
  dynamicHeaderText: string = 'Nuevo servicio';
  selectedSubcategories: string[] = []; 
 

  subcategories = [
    { name: 'Guarderías caninas' }, 
    { name: 'Hoteles para mascotas' },
    { name: 'Servicios de rehabilitación' },
    { name: 'Peluquería canina' },
    { name: 'Comida para perros' },
    { name: 'Juguetes para perros' },
    { name: 'Accesorios (correas, collares, camas)' },
   
  ];

  constructor() { }

  ngOnInit() {
  }

  selectSubcategory(subcategory: { name: string }) {
    const index = this.selectedSubcategories.indexOf(subcategory.name);
    if (index > -1) {
      
      this.selectedSubcategories.splice(index, 1);
    } else {
     
      this.selectedSubcategories.push(subcategory.name);
    }
  }
}
