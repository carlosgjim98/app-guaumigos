import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  public pages = [
    { tab: 'listado-paseadores', name: 'Paseadores', icon: 'assets/icons/icon-tabs/tab-paseadores.svg' },
    { tab: 'puntos-de-interes', name: 'De Interés', icon: 'assets/icons/icon-tabs/tab-interes.svg' },
    { tab: 'servicios', name: 'Servicios', icon: 'assets/icons/icon-tabs/tab-servicios.svg' },
    { tab: 'mensajes', name: 'Mensajes', icon: 'assets/icons/icon-tabs/tab-mensajes.svg' },
    { tab: 'perfil', name: 'Mi Perfil', icon: 'assets/icons/icon-tabs/tab-perfil.svg' },
  ];

  public selectedTab: string;
  private userRole: string; // Guardamos el rol del usuario

  constructor( private router: Router) {}

  ngOnInit() {
    // Obtener el rol del usuario desde sessionStorage
    this.userRole = sessionStorage.getItem('tipoUsuario'); // 'paseador', 'dueño', 'empresa'

    // Si el rol del usuario es 'paseador', reemplazamos el tab 'listado-paseadores' por 'calendarios'
    if (this.userRole === 'paseador') {
      this.pages = this.pages.map(page => {
        if (page.tab === 'listado-paseadores') {
          return {
            tab: 'calendario-paseador',
            name: 'Calendario',
            icon: 'assets/icons/calendar event.svg'
          };
        } else if (page.tab === 'servicios') {
          return {
            tab: 'solicitudes',
            name: 'Solicitudes',
            icon: 'assets/icons/solicitudes.svg' 
          };
        } else if (page.tab === 'perfil') {
          return {
            tab: 'mi-perfil-paseador', 
            name: 'Mi Perfil',
            icon: 'assets/icons/icon-tabs/tab-perfil.svg'
          };
        }
        return page;
      });
    }

    if (this.userRole === 'empresa') {
      this.pages = this.pages.map(page => {
        if (page.tab === 'listado-paseadores') {
          return {
            tab: 'calendario-empresa',
            name: 'Calendario',
            icon: 'assets/icons/calendar event.svg'
          };
        } else if (page.tab === 'servicios') {
          return {
            tab: 'solicitudes',
            name: 'Solicitudes',
            icon: 'assets/icons/solicitudes.svg' 
          };
        } else if (page.tab === 'perfil') {
          return {
            tab: 'mi-perfil-empresa', 
            name: 'Mi Perfil',
            icon: 'assets/icons/icon-tabs/tab-perfil.svg'
          };
        }
        return page;
      });
    }
    
  }

  tabChange(event: any) {
    this.selectedTab = event.tab;

    // Si la pestaña seleccionada es 'Mi Perfil' y el rol es 'paseador', redirigir
    if (this.selectedTab === 'perfil' && this.userRole === 'paseador') {
      this.router.navigate(['/tabs/mi-perfil-paseador']);  // Redirige a la página de perfil del paseador
    }
    
  }


}
