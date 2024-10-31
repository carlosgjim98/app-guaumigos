import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  @Input() headerText: string = 'Galería';
  @Input() returnLink: string = '/tabs/perfil';
  @Input() esEspecial: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
