import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public pages = [
    { tab: 'paseadores', name: 'Paseadores', icon: 'assets/icons/toolbarFooter/tab-paseadores.svg' },
    { tab: 'deInteres', name: 'De Interés', icon: 'assets/icons/toolbarFooter/tab-interes.svg' },
    { tab: 'servicios', name: 'Servicios', icon: 'assets/icons/toolbarFooter/tab-servicios.svg' },
    { tab: 'mensajes', name: 'Mensajes', icon: 'assets/icons/toolbarFooter/tab-mensajes.svg' },
    { tab: 'perfil', name: 'Mi Perfil', icon: 'assets/icons/toolbarFooter/tab-perfil.svg' }
  ];
  constructor() {}

}
