import { Component, OnInit } from '@angular/core';
//import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar-punto-de-interes',
  templateUrl: './editar-punto-de-interes.page.html',
  styleUrls: ['./editar-punto-de-interes.page.scss'],
  
})
export class EditarPuntoDeInteresPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/punto-de-interes-publicado-cliente';
  selectedCategories: string[] = [];
  description: string = '';
  nombre: string = '';
  ubicacion: string = '';

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
    // Agrega las demás categorías
  ];



  subcategories = ['Parques funcionales', 'Parques de agility','Parques funcionales','Parques sociales','Tiendas de alimentación','Adopción por protectora' ]; 
  
  selectCategory(category: any) {
    const index = this.selectedCategories.indexOf(category.name);
    if (index > -1) {
      // Si la categoría ya está seleccionada, la quitamos
      this.selectedCategories.splice(index, 1);
    } else {
      // Si no está seleccionada, la agregamos
      this.selectedCategories.push(category.name);
    }
  }

  constructor() { }



  ngOnInit() {
  }

}
