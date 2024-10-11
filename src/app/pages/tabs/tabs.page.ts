import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public pages = [
    { tab: 'listado-paseadores', name: 'Paseadores', icon: 'assets/icons/icon-tabs/tab-paseadores.svg' },
    { tab: 'deinteres', name: 'De Interés', icon: 'assets/icons/icon-tabs/tab-interes.svg' },
    { tab: 'servicios', name: 'Servicios', icon: 'assets/icons/icon-tabs/tab-servicios.svg' },
    { tab: 'mensajes', name: 'Mensajes', icon: 'assets/icons/icon-tabs/tab-mensajes.svg' },
    { tab: 'perfil', name: 'Mi Perfil', icon: 'assets/icons/icon-tabs/tab-perfil.svg' }
  ];

  public selectedTab: string;

  constructor() {}

  tabChange(event: any) {
    this.selectedTab = event.tab;
  }
  
}
