import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-perfil-paseador',
  templateUrl: './mi-perfil-paseador.page.html',
  styleUrls: ['./mi-perfil-paseador.page.scss'],
})
export class MiPerfilPaseadorPage implements OnInit {

  selectedSegment: string = 'option1';

  segmentChanged(event: any) {
    console.log('Segment changed:', event.detail.value);
    this.selectedSegment = event.detail.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
