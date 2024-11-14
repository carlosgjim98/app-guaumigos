import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.page.html',
  styleUrls: ['./valoraciones.page.scss'],
})
export class ValoracionesPage implements OnInit {


  dynamicHeaderText: string = 'Valoraciones';
  tipoUsuario: string;

  valoraciones: any[] = [];

  constructor( ) { }
 

  ngOnInit() {
    this.cargarValoraciones();
    this.tipoUsuario = sessionStorage.getItem('tipoUsuario');
  }

  cargarValoraciones() {
    this.valoraciones = [
      {
        nombre: 'Claudia S.',
        estrellas: '5',
        tiempo: 'Hace 1 semanas',
        texto: '¡Totalmente recomendada! Ana cuida de mi mascota como si fuera de su familia. Súper confiable.',
        imgUsuario: 'assets/imgs/usuarios/valoraciones/Rectángulo 19618.png'
      },
      {
        nombre: 'Juan F.',
        estrellas: '5',
        tiempo: 'Hace 2 semanas',
        texto: '¡Excelente servicio! Ana es muy atenta y dedicada. Mi mascota siempre está feliz después de sus paseos.',
        imgUsuario: 'assets/imgs/usuarios/valoraciones/Rectángulo 19679.png'
      },
      {
        nombre: 'Gabriela T.',
        estrellas: '5',
        tiempo: 'Hace 1 semanas',
        texto: '¡Totalmente recomendada! Ana cuida de mi mascota como si fuera de su familia. Súper confiable.',
        imgUsuario: 'assets/imgs/usuarios/valoraciones/Rectángulo 19681.png'
      },
      {
        nombre: 'Carlos H.',
        estrellas: '5',
        tiempo: 'Hace 2 meses',
        texto: '¡Excelente servicio! Ana es muy atenta y dedicada. Mi mascota siempre está feliz después de sus paseos.',
        imgUsuario: 'assets/imgs/usuarios/valoraciones/Rectángulo 19679.png'
      },
      {
        nombre: 'Manuel R.',
        estrellas: '5',
        tiempo: 'Hace 2 meses',
        texto: '¡Excelente servicio! Ana es muy atenta y dedicada. Mi mascota siempre está feliz después de sus paseos.',
        imgUsuario: 'assets/imgs/usuarios/valoraciones/Rectángulo 19685.png'
      }
    ];
  }

}
