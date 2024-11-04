import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-de-interes-publicado-cliente',
  templateUrl: './punto-de-interes-publicado-cliente.page.html',
  styleUrls: ['./punto-de-interes-publicado-cliente.page.scss'],
})
export class PuntoDeInteresPublicadoClientePage implements OnInit {

  nombre: string = 'Hotel adaptado para mascotas';
  ubicacion: string = 'Jerez de la Frontera, Cádiz';

  images: string[] = [
    'assets/imgs/resting-by-pool-french-bulldog-enjoys-breeze-comfortably-settled@3x.png',
    // Agrega más imágenes según sea necesario
  ];

  constructor(private router: Router,private navCtrl: NavController ) {
    const navigation = this.router.getCurrentNavigation();
    interface NavigationState {
      nombre?: string;
      ubicacion?: string;
    }

    // Acceder a las propiedades de 'state' con valores predeterminados si faltan
    if (navigation?.extras.state) {
      const state = navigation.extras.state as NavigationState;
      this.nombre = state.nombre || this.nombre;
      this.ubicacion = state.ubicacion || this.ubicacion;
    }
  }

  goBack() {
    this.navCtrl.back();
  }
  
  ngOnInit() {
    // Lógica adicional si es necesario
  }
}