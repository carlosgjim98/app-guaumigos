import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-solicitud-aceptada',
  templateUrl: './detalle-solicitud-aceptada.page.html',
  styleUrls: ['./detalle-solicitud-aceptada.page.scss'],
})
export class DetalleSolicitudAceptadaPage implements OnInit {

  dynamicHeaderText: string = '';
  returnLink: string = '/detalle-solicitud-en-curso';

  constructor(private router: Router) {}

  // Método para manejar el clic en "Finalizar paseo"
  finalizarPaseo() {
    // Obtener el rol del usuario desde sessionStorage
    const userRole = sessionStorage.getItem('tipoUsuario');

    // Redirigir según el rol del usuario
    if (userRole === 'paseador') {
      this.router.navigate(['/valoracion-paseo']); 
    } else if (userRole === 'dueño') {
      this.router.navigate(['/anadir-valoracion-desde-detalle-de-solicitud']);
    } else {
      // Si no se encuentra un rol o el rol es desconocido, redirige a una página predeterminada
      this.router.navigate(['/pagina-error']);
    }
  }


  ngOnInit() {
  }

}
