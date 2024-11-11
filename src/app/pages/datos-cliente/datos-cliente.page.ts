import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.page.html',
  styleUrls: ['./datos-cliente.page.scss'],
})
export class DatosClientePage implements OnInit {

  dynamicHeaderText: string = '';
  public dynamicText: string;
  public title: string;
  public userRole: string; 
  userType: string = '';

  constructor() { }

  ngOnInit() {
    this.userRole = sessionStorage.getItem('tipoUsuario'); 

    if (this.userRole === 'paseador') {
      this.title = 'Datos del paseador';
      this.dynamicText = 'Datos del paseador';
    } else if (this.userRole === 'empresa') {
      this.title = 'Datos del servicio';
      this.dynamicText = 'Datos del cliente';
    } else {
      this.dynamicText = '¿Cuándo realizarás los paseos?'; // Por defecto
    }
  }
}