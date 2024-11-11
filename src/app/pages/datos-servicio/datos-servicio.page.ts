import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-servicio',
  templateUrl: './datos-servicio.page.html',
  styleUrls: ['./datos-servicio.page.scss'],
})
export class DatosServicioPage implements OnInit {
  dynamicHeaderText: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
