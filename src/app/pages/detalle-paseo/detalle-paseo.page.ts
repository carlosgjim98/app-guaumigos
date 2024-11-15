import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-paseo',
  templateUrl: './detalle-paseo.page.html',
  styleUrls: ['./detalle-paseo.page.scss'],
})
export class DetallePaseoPage implements OnInit {

  paseadores: any[] = [];

  tipoPaseo: string[] = ['Paseo durante el día', 'Paseo de 2 horas por 30€'];
  mascotasAcepta: string[] = ['Razas: Pastor Alemán, Bulldog, Labrador, Beagle, Caniche, Chihuahua, Dachshund, Pator Belga, Golden Retriever',
    'Edad: entre 2 y 11 años', 'Tamaño: menos de 35 cm', 'Peso: entre 10 y 30 kg', 'Hembra, Macho', 'La mascota no puede estar en celo'];
  serviciosExtra: string[] = ['Visita al veterinario', 'Administración de medicamentos', 'Corrección de malos hábitos', 'Socialización'];

  modal: number = 1;

  mostrarTextoCompleto: boolean[] = [];

  serviciosExtraPrecio: { nombre: string, precio: string }[] = [
    { nombre: 'Visita al veterinario', precio: '(+25€)' },
    { nombre: 'Administración de medicamentos', precio: '(+5€)' },
    { nombre: 'Corrección de malos hábitos', precio: '(+5€)' },
    { nombre: 'Socialización', precio: '(+5€)' }
  ];

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) {}

  ngOnInit() {
    this.cargarPaseadores();
    this.mostrarTextoCompleto = new Array(this.mascotasAcepta.length).fill(false);
  }
  goBack() {
    this.navCtrl.back(); // Usando Ionic NavController para hacer "go back"
  }

  cargarPaseadores() {
    this.paseadores = [
      {
        nombre: 'Ana Velázquez',
        localizacion: 'Jerez de la Frontera, España',
        opiniones: '1635',
        valoracion: '4,8',
        imagenes: ['assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png', 'assets/imgs/perros/shared image-full.png'],
        imgUsuario: 'assets/imgs/usuarios/Rectángulo 19618.png',
        precio: '15€',
        duracion: '1 horas',
      }
    ];
  }

  alternarVerMas(indice: number) {
    this.mostrarTextoCompleto[indice] = !this.mostrarTextoCompleto[indice];
  }

  siguientePaso() {
    this.modal = 2;
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
