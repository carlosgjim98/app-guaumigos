import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-servicio-empresa',
  templateUrl: './editar-servicio-empresa.page.html',
  styleUrls: ['./editar-servicio-empresa.page.scss'],
})
export class EditarServicioEmpresaPage implements OnInit {

  dynamicHeaderText: string = '';
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