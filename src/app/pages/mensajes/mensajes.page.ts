import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  userRole: string = '';
  mensajes: any[] = [];
  chatName: string = '';
  chatAvatar: string = '';


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el tipo de usuario desde sessionStorage
    this.userRole = sessionStorage.getItem('tipoUsuario') || '';

    this.activatedRoute.queryParams.subscribe(params => {
      this.chatName = params['name'];  // Nombre del chat
      this.chatAvatar = params['avatar'];  // Foto del avatar
    });

 
    this.cargarMensajes();
  }

  cargarMensajes() {
    if (this.userRole === 'paseador') {
      
      this.mensajes = [
        {
          nombre: 'Luis Z.',
          foto: 'assets/imgs/usuarios-chat-paseador/img-perfil-usuario@2x.png',
          tiempo: '10 minutos',
          nuevoMensaje: '(3) mensajes nuevos',
          mensaje: '',
          tieneNuevo: true
        },
        {
          nombre: 'Marta R.',
          foto: 'assets/imgs/avatar-marta.png',
          tiempo: 'Hace 2 días',
          nuevoMensaje: '',
          mensaje: 'Tú: has enviado 1 imagen',
          tieneNuevo: false
        },
        {
          nombre: 'Juan V.',
          foto: 'assets/imgs/usuarios-chat-paseador/Elipse 407@2x.png',
          tiempo: 'Hace 1 semana',
          nuevoMensaje: '',
          mensaje: 'Juan: ¡Hola! ¿Qué tal?',
          tieneNuevo: false
        },
        {
          nombre: 'Sandra T.',
          foto: 'assets/imgs/usuarios-chat-paseador/Elipse 562@2x.png',
          tiempo: 'Hace 2 semanas',
          nuevoMensaje: '',
          mensaje: 'Tú: has enviado 1 imagen',
          tieneNuevo: false
        },
        {
          nombre: 'Carlos G.',
          foto: 'assets/imgs/usuarios-chat-paseador/Elipse 412@2x.png',
          tiempo: 'Hace 2 semanas',
          nuevoMensaje: '',
          mensaje: 'Carlos: ¡Hola! ¿Qué tal?',
          tieneNuevo: false
        }
    
      ];
    } else if (this.userRole === 'dueño') {
    
      this.mensajes = [
       {
        nombre: 'Alberto P.',
        foto: 'assets/imgs/img-perfil-usuario@2x.png',
        tiempo: '10 minutos',
        nuevoMensaje: '(3) mensajes nuevos',
        mensaje: '',
        tieneNuevo: true
      },
      {
        nombre: 'Marta A.',
        foto: 'assets/imgs/Elipse 304@2x.png',
        tiempo: 'Hace 2 días',
        nuevoMensaje: '',
        mensaje: 'Tú: has enviado 1 imagen',
        tieneNuevo: false
      },
      {
        nombre: 'Mario H.',
        foto: 'assets/imgs/Elipse 407@2x.png',
        tiempo: 'Hace 1 semana',
        nuevoMensaje: '',
        mensaje: 'Mario: ¡Hola! ¿Qué tal?',
        tieneNuevo: false
      },
      {
        nombre: 'Marta S.' ,
        foto: 'assets/imgs/Elipse 562@2x.png',
        tiempo: 'Hace 2 semanas',
        nuevoMensaje: '',
        mensaje: 'Tú: has enviado 1 imagen',
        tieneNuevo: false
      },
      {
        nombre: 'Carlos E.',
        foto: 'assets/imgs/Elipse 412@2x.png',
        tiempo: 'Hace 2 semanas',
        nuevoMensaje: '',
        mensaje: 'Carlos: ¡Hola! ¿Qué tal?',
        tieneNuevo: false
      }
       
      ];
    }
   
  }
}