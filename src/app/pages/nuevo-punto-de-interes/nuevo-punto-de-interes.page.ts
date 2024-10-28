import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-punto-de-interes',
  templateUrl: './nuevo-punto-de-interes.page.html',
  styleUrls: ['./nuevo-punto-de-interes.page.scss'],
})
export class NuevoPuntoDeInteresPage implements OnInit {
  dynamicHeaderText: string = 'Nuevo punto de interés';
  returnLink: string = '/tabs/puntos-de-interes';
  selectedCategory: string | null = null;
  description: string = '';

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
  
  selectCategory(category: { name: string; icon: string }) {
    this.selectedCategory = category.name; // Almacena el nombre de la categoría seleccionada
}

  constructor() { }

  ngOnInit() {
  }

}
