import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-punto-de-interes',
  templateUrl: './filtro-punto-de-interes.page.html',
  styleUrls: ['./filtro-punto-de-interes.page.scss'],
})
export class FiltroPuntoDeInteresPage implements OnInit {

  dynamicHeaderText: string = 'Filtros';
  returnLink: string = '/tabs/puntos-de-interes';

  rangoSeleccionado: number = 5;  
  selectedCategories: string[] = [];  
  selectedSubcategories: string[] = []; 
  

  categories = [
    { name: 'Parque', icon: 'assets/icons/tree-alt12088685.svg' }, 
    { name: 'Hotel apto para perros', icon: 'assets/icons/paw-heart_14656010.svg' },
    { name: 'Playa', icon: 'assets/icons/umbrella-beach_9240013.svg' },
    { name: 'Guardería canina', icon: 'assets/icons/paw-heart_14656010.svg' },
    { name: 'Tienda para mascotas', icon: 'assets/icons/shop_3916657.svg' },
    { name: 'Entrenamiento', icon: 'assets/icons/gym_3914460.svg' },
    { name: 'Fotógrafo para mascotas', icon: 'assets/icons/camera_3917108.svg' },
    { name: 'Adopción', icon: 'assets/icons/camera_3917108.svg' },
    { name: 'Veterinario', icon: 'assets/icons/paw-heart_14656010.svg' },
    { name: 'Peluquería', icon: 'assets/icons/barber-shop_3914559.svg' },
  ];

  subcategories = [
    { name: 'Parques funcionales' }, 
    { name: 'Parques de agility' },
    { name: 'Parques sociales' },
    { name: 'Tiendas de alimentación' },
    { name: 'Adopción por protectora' },
  ];

  constructor() { }

  ngOnInit() {
    
  }

  onRangoChange(event: any) {
    this.rangoSeleccionado = Number(event.target.value); 
  }

  selectCategory(category: { name: string; icon: string }) {
    const index = this.selectedCategories.indexOf(category.name);
    if (index > -1) {
     
      this.selectedCategories.splice(index, 1);
    } else {
     
      this.selectedCategories.push(category.name);
    }
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
