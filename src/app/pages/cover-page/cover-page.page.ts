import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.page.html',
  styleUrls: ['./cover-page.page.scss'],
})
export class CoverPagePage implements OnInit {

  private swiper: Swiper;

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    // Asegúrate de no tener autoplay configurado aquí.
    this.swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
      autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection:false,
        stopOnLastSlide:true,


    },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      grabCursor: true,
      simulateTouch: true,
    
    });
  }

}
