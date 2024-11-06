import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'bienvenida', pathMatch: 'full' 
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cover-page',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./pages/idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'interior-chat',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then( m => m.InteriorChatPageModule)
  },
  {
    path: 'interior-chat/:chat_id',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then( m => m.InteriorChatPageModule)
  },
  { 
    path: 'interior-chat/:id_chat/:nombre_chat/:ultimo_mensaje', 
    //canActivate: [AuthGuard], 
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then(m => m.InteriorChatPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'test-plugins',
    loadChildren: () => import('./pages/test-plugins/test-plugins.module').then( m => m.TestPluginsPageModule)
  },
  {
    path: 'photo-crop',
    loadChildren: () => import('./pages/utils/photo-crop/photo-crop.module').then( m => m.PhotoCropPageModule)
  },
  {
    path: 'image-view',
    loadChildren: () => import('./pages/utils/image-view/image-view.module').then( m => m.ImageViewPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./pages/reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'eulas',
    loadChildren: () => import('./pages/eulas/eulas.module').then( m => m.EulasPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'seleccionar-usuario',
    loadChildren: () => import('./pages/seleccionar-usuario/seleccionar-usuario.module').then( m => m.SeleccionarUsuarioPageModule)
  },
  {
    path: 'condiciones-venta',
    loadChildren: () => import('./pages/condiciones-venta/condiciones-venta.module').then( m => m.CondicionesVentaPageModule)
  },
  {
    path: 'listado-paseadores',
    loadChildren: () => import('./pages/listado-paseadores/listado-paseadores.module').then( m => m.ListadoPaseadoresPageModule)
  },
  {
    path: 'filtros-paseadores',
    loadChildren: () => import('./pages/filtros-paseadores/filtros-paseadores.module').then( m => m.FiltrosPaseadoresPageModule)
  },
  {
    path: 'detalle-paseo',
    loadChildren: () => import('./pages/detalle-paseo/detalle-paseo.module').then( m => m.DetallePaseoPageModule)
  },
  {
    path: 'resumen-pago-paseo',
    loadChildren: () => import('./pages/resumen-pago-paseo/resumen-pago-paseo.module').then( m => m.ResumenPagoPaseoPageModule)
  },
  {
    path: 'perfil-paseador',
    loadChildren: () => import('./pages/perfil-paseador/perfil-paseador.module').then( m => m.PerfilPaseadorPageModule)
  },
  {
    path: 'valoraciones',
    loadChildren: () => import('./pages/valoraciones/valoraciones.module').then( m => m.ValoracionesPageModule)
  },
  {
    path: 'anadir-valoracion',
    loadChildren: () => import('./pages/anadir-valoracion/anadir-valoracion.module').then( m => m.AnadirValoracionPageModule)
  },
  {
    path: 'puntos-de-interes',
    loadChildren: () => import('./pages/puntos-de-interes/puntos-de-interes.module').then( m => m.PuntosDeInteresPageModule)
  },

  {
    path: 'nuevo-punto-de-interes',
    loadChildren: () => import('./pages/nuevo-punto-de-interes/nuevo-punto-de-interes.module').then( m => m.NuevoPuntoDeInteresPageModule)
  },

  {
    path: 'punto-de-interes-detalle',
    loadChildren: () => import('./pages/punto-de-interes-detalle/punto-de-interes-detalle.module').then( m => m.PuntoDeInteresDetallePageModule)
  },

  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },

  {
    path: 'services-filters',
    loadChildren: () => import('./pages/services-filters/services-filters.module').then( m => m.ServicesFiltersPageModule)
  },
  {

    path: 'punto-de-interes-publicado-cliente',
    loadChildren: () => import('./pages/punto-de-interes-publicado-cliente/punto-de-interes-publicado-cliente.module').then( m => m.PuntoDeInteresPublicadoClientePageModule)
  },
  {
    path: 'editar-punto-de-interes',
    loadChildren: () => import('./pages/editar-punto-de-interes/editar-punto-de-interes.module').then( m => m.EditarPuntoDeInteresPageModule)
  },
  {
    path: 'mapa-punto-de-interes',
    loadChildren: () => import('./pages/mapa-punto-de-interes/mapa-punto-de-interes.module').then( m => m.MapaPuntoDeInteresPageModule)
  },
  {
    path: 'filtro-punto-de-interes',
    loadChildren: () => import('./pages/filtro-punto-de-interes/filtro-punto-de-interes.module').then( m => m.FiltroPuntoDeInteresPageModule)},
  {

    path: 'detalle-servicio',
    loadChildren: () => import('./pages/detalle-servicio/detalle-servicio.module').then( m => m.DetalleServicioPageModule)

  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'mensajes-chat',
    loadChildren: () => import('./pages/mensajes-chat/mensajes-chat.module').then( m => m.MensajesChatPageModule)
  },

  {
    path: 'nuevo-punto-de-interes',
    loadChildren: () => import('./pages/nuevo-punto-de-interes/nuevo-punto-de-interes.module').then( m => m.NuevoPuntoDeInteresPageModule)
  },

  {
    path: 'punto-de-interes-detalle',
    loadChildren: () => import('./pages/punto-de-interes-detalle/punto-de-interes-detalle.module').then( m => m.PuntoDeInteresDetallePageModule)
  },

  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },

  {
    path: 'services-filters',
    loadChildren: () => import('./pages/services-filters/services-filters.module').then( m => m.ServicesFiltersPageModule)
  },
  {

    path: 'punto-de-interes-publicado-cliente',
    loadChildren: () => import('./pages/punto-de-interes-publicado-cliente/punto-de-interes-publicado-cliente.module').then( m => m.PuntoDeInteresPublicadoClientePageModule)
  },
  {
    path: 'editar-punto-de-interes',
    loadChildren: () => import('./pages/editar-punto-de-interes/editar-punto-de-interes.module').then( m => m.EditarPuntoDeInteresPageModule)
  },
  {
    path: 'mapa-punto-de-interes',
    loadChildren: () => import('./pages/mapa-punto-de-interes/mapa-punto-de-interes.module').then( m => m.MapaPuntoDeInteresPageModule)
  },
  {
    path: 'filtro-punto-de-interes',
    loadChildren: () => import('./pages/filtro-punto-de-interes/filtro-punto-de-interes.module').then( m => m.FiltroPuntoDeInteresPageModule)},
  {

    path: 'detalle-servicio',
    loadChildren: () => import('./pages/detalle-servicio/detalle-servicio.module').then( m => m.DetalleServicioPageModule)

  },
  {
    path: 'resumen-pago-servicio',
    loadChildren: () => import('./pages/resumen-pago-servicio/resumen-pago-servicio.module').then( m => m.ResumenPagoServicioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'configurar-datos',
    loadChildren: () => import('./pages/configurar-datos/configurar-datos.module').then( m => m.ConfigurarDatosPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'editar-mascota',
    loadChildren: () => import('./pages/editar-mascota/editar-mascota.module').then( m => m.EditarMascotaPageModule)
  },
  {
    path: 'mis-servicios-reservados',
    loadChildren: () => import('./pages/mis-servicios-reservados/mis-servicios-reservados.module').then( m => m.MisServiciosReservadosPageModule)
  },
  {
    path: 'detalle-resrva-de-servicio',
    loadChildren: () => import('./pages/detalle-resrva-de-servicio/detalle-resrva-de-servicio.module').then( m => m.DetalleResrvaDeServicioPageModule)
  },
  {
    path: 'seguimiento-de-paseo',
    loadChildren: () => import('./pages/seguimiento-de-paseo/seguimiento-de-paseo.module').then( m => m.SeguimientoDePaseoPageModule)
  },
  {
    path: 'detalle-solicitud-aceptada',
    loadChildren: () => import('./pages/detalle-solicitud-aceptada/detalle-solicitud-aceptada.module').then( m => m.DetalleSolicitudAceptadaPageModule)
  },
  {
    path: 'anadir-valoracion-desde-detalle-de-solicitud',
    loadChildren: () => import('./pages/anadir-valoracion-desde-detalle-de-solicitud/anadir-valoracion-desde-detalle-de-solicitud.module').then( m => m.AnadirValoracionDesdeDetalleDeSolicitudPageModule)
  },
  {
    path: 'perfil-mascota',
    loadChildren: () => import('./pages/perfil-mascota/perfil-mascota.module').then( m => m.PerfilMascotaPageModule)
  },
  {
    path: 'editar-galeria',
    loadChildren: () => import('./pages/editar-galeria/editar-galeria.module').then( m => m.EditarGaleriaPageModule)
  },
  {
    path: 'mis-puntos-de-interes',
    loadChildren: () => import('./pages/mis-puntos-de-interes/mis-puntos-de-interes.module').then( m => m.MisPuntosDeInteresPageModule)
  },
  {
    path: 'mis-puntos-de-interes-detalle',
    loadChildren: () => import('./pages/mis-puntos-de-interes-detalle/mis-puntos-de-interes-detalle.module').then( m => m.MisPuntosDeInteresDetallePageModule)
  },
  {
    path: 'mis-valoraciones',
    loadChildren: () => import('./pages/mis-valoraciones/mis-valoraciones.module').then( m => m.MisValoracionesPageModule)
  },  {
    path: 'detalle-valoracion',
    loadChildren: () => import('./pages/detalle-valoracion/detalle-valoracion.module').then( m => m.DetalleValoracionPageModule)
  },
  {
    path: 'seguimiento-de-paseos',
    loadChildren: () => import('./pages/seguimiento-de-paseos/seguimiento-de-paseos.module').then( m => m.SeguimientoDePaseosPageModule)
  },
  {
    path: 'rgpd-desde-ajustes',
    loadChildren: () => import('./pages/rgpd-desde-ajustes/rgpd-desde-ajustes.module').then( m => m.RgpdDesdeAjustesPageModule)
  },
  {
    path: 'condiciones-de-venta-desde-ajustes',
    loadChildren: () => import('./pages/condiciones-de-venta-desde-ajustes/condiciones-de-venta-desde-ajustes.module').then( m => m.CondicionesDeVentaDesdeAjustesPageModule)
  },
  {
    path: 'eula-desde-ajustes',
    loadChildren: () => import('./pages/eula-desde-ajustes/eula-desde-ajustes.module').then( m => m.EulaDesdeAjustesPageModule)
  },
  {
    path: 'mi-suscripcion',
    loadChildren: () => import('./pages/mi-suscripcion/mi-suscripcion.module').then( m => m.MiSuscripcionPageModule)
  },
  {
    path: 'mis-solicitudes-de-paseo',
    loadChildren: () => import('./pages/mis-solicitudes-de-paseo/mis-solicitudes-de-paseo.module').then( m => m.MisSolicitudesDePaseoPageModule)
  },
  {
    path: 'detalle-solicitud-en-curso',
    loadChildren: () => import('./pages/detalle-solicitud-en-curso/detalle-solicitud-en-curso.module').then( m => m.DetalleSolicitudEnCursoPageModule)
  },
  {
    path: 'perfil-empresa-galeria',
    loadChildren: () => import('./pages/perfil-empresa-galeria/perfil-empresa-galeria.module').then( m => m.PerfilEmpresaGaleriaPageModule)
  },







];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

