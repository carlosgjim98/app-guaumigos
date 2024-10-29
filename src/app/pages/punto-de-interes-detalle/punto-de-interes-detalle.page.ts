import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punto-de-interes-detalle',
  templateUrl: './punto-de-interes-detalle.page.html',
  styleUrls: ['./punto-de-interes-detalle.page.scss'],
})
export class PuntoDeInteresDetallePage implements OnInit {
  nombre: string = 'Nombre por defecto';
  ubicacion: string = 'Ubicación por defecto';
  img: string = 'assets/imgs/default-image.png'; // Imagen por defecto si no se recibe
  icono: string = 'assets/icons/tree-alt12088685.svg'; 

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    // Asegúrate de que el estado esté definido
    if (navigation?.extras.state) {
      const state = navigation.extras.state as { img: string; nombre: string; ubicacion: string; icono: string };
      this.img = state.img; // Asignar la imagen recibida
      this.nombre = state.nombre; // Asignar el nombre recibido
      this.ubicacion = state.ubicacion; // Asignar la ubicación recibida
      this.icono= state.icono;
    }
  }
  

  ngOnInit() {
    // Aquí puedes ejecutar lógica adicional si es necesario
  }
}
