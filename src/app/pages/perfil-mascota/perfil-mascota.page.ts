import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-perfil-mascota',
  templateUrl: './perfil-mascota.page.html',
  styleUrls: ['./perfil-mascota.page.scss'],
})
export class PerfilMascotaPage implements OnInit {
  @Input() headerText: string = 'Moka';
  @Input() returnLink: string = '/tabs/perfil';
  @Input() esEspecial: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
