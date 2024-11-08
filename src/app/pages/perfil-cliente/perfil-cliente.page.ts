import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.page.html',
  styleUrls: ['./perfil-cliente.page.scss'],
})
export class PerfilClientePage implements OnInit {
  private swiper: Swiper;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back(); // Usando Ionic NavController para hacer "go back"
  }
  
  ngAfterViewInit() {


    
    this.swiper = new Swiper(".mySwiper", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
      grabCursor: true,
      simulateTouch: true,
      pagination: {
        el: ".swiper-pagination",  // Esto habilita los puntos de paginación
        clickable: true,  // Hace que los puntos sean clickeables para navegar entre las slides
      },

    });

    

    this.swiper.on('slideChange',  () => {
     
    });

    
  }

}
