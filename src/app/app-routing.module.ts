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
  },
  {
    path: 'detalle-valoracion',
    loadChildren: () => import('./pages/detalle-valoracion/detalle-valoracion.module').then( m => m.DetalleValoracionPageModule)
  },
  {
    path: 'detalle-valoracion-paseador',
    loadChildren: () => import('./pages/detalle-valoracion-paseador/detalle-valoracion-paseador.module').then( m => m.DetalleValoracionPaseadorPageModule)
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
  {
    path: 'login-usuario-paseador',
    loadChildren: () => import('./pages/login-usuario-paseador/login-usuario-paseador.module').then( m => m.LoginUsuarioPaseadorPageModule)
  },
  {
    path: 'resgistro-usuario-paseador',
    loadChildren: () => import('./pages/resgistro-usuario-paseador/resgistro-usuario-paseador.module').then( m => m.ResgistroUsuarioPaseadorPageModule)
  },
  {
    path: 'recordar-contrasena-usuario-paseador',
    loadChildren: () => import('./pages/recordar-contrasena-usuario-paseador/recordar-contrasena-usuario-paseador.module').then( m => m.RecordarContrasenaUsuarioPaseadorPageModule)
  },
  {
    path: 'completar-perfil',
    loadChildren: () => import('./pages/completar-perfil/completar-perfil.module').then( m => m.CompletarPerfilPageModule)
  },
  {
    path: 'mascotas-aceptadas',
    loadChildren: () => import('./pages/mascotas-aceptadas/mascotas-aceptadas.module').then( m => m.MascotasAceptadasPageModule)
  },
  {
    path: 'calendario-paseador',
    loadChildren: () => import('./pages/calendario-paseador/calendario-paseador.module').then( m => m.CalendarioPaseadorPageModule)
  },
  {
    path: 'configurar-calendario',
    loadChildren: () => import('./pages/configurar-calendario/configurar-calendario.module').then( m => m.ConfigurarCalendarioPageModule)
  },
  {
    path: 'detalle-solicitud-aceptada-iniciar-paseo',
    loadChildren: () => import('./pages/detalle-solicitud-aceptada-iniciar-paseo/detalle-solicitud-aceptada-iniciar-paseo.module').then( m => m.DetalleSolicitudAceptadaIniciarPaseoPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'datos-cliente',
    loadChildren: () => import('./pages/datos-cliente/datos-cliente.module').then( m => m.DatosClientePageModule)
  },
  {
    path: 'perfil-cliente',
    loadChildren: () => import('./pages/perfil-cliente/perfil-cliente.module').then( m => m.PerfilClientePageModule)
  },
  {
    path: 'cliente-iniciar-paseo',
    loadChildren: () => import('./pages/cliente-iniciar-paseo/cliente-iniciar-paseo.module').then( m => m.ClienteIniciarPaseoPageModule)
  },
  {
    path: 'valoracion-paseo',
    loadChildren: () => import('./pages/valoracion-paseo/valoracion-paseo.module').then( m => m.ValoracionPaseoPageModule) },
    { path: 'mi-perfil-paseador',
    loadChildren: () => import('./pages/mi-perfil-paseador/mi-perfil-paseador.module').then( m => m.MiPerfilPaseadorPageModule)
  },
  {
    path: 'editar-perfil-paseador',
    loadChildren: () => import('./pages/editar-perfil-paseador/editar-perfil-paseador.module').then( m => m.EditarPerfilPaseadorPageModule)
  },
  {
    path: 'ajustes-paseador',
    loadChildren: () => import('./pages/ajustes-paseador/ajustes-paseador.module').then( m => m.AjustesPaseadorPageModule)
  },
  {
    path: 'facturas-paseador',
    loadChildren: () => import('./pages/facturas-paseador/facturas-paseador.module').then( m => m.FacturasPaseadorPageModule)
  },
  {
    path: 'mis-puntos-de-interes-paseador',
    loadChildren: () => import('./pages/mis-puntos-de-interes-paseador/mis-puntos-de-interes-paseador.module').then( m => m.MisPuntosDeInteresPaseadorPageModule)
  },
  {
    path: 'detalle-factura',
    loadChildren: () => import('./pages/detalle-factura/detalle-factura.module').then( m => m.DetalleFacturaPageModule)
  },
  {
    path: 'calendario-empresa',
    loadChildren: () => import('./pages/calendario-empresa/calendario-empresa.module').then( m => m.CalendarioEmpresaPageModule)
  },
  {
    path: 'mi-perfil-empresa',
    loadChildren: () => import('./pages/mi-perfil-empresa/mi-perfil-empresa.module').then( m => m.MiPerfilEmpresaPageModule)
  },
  {
    path: 'detalles-solicitud-aceptada-servicio',
    loadChildren: () => import('./pages/detalles-solicitud-aceptada-servicio/detalles-solicitud-aceptada-servicio.module').then( m => m.DetallesSolicitudAceptadaServicioPageModule)
  },
  {
    path: 'valoracion-servicio',
    loadChildren: () => import('./pages/valoracion-servicio/valoracion-servicio.module').then( m => m.ValoracionServicioPageModule)
  },
  {
    path: 'datos-servicio',
    loadChildren: () => import('./pages/datos-servicio/datos-servicio.module').then( m => m.DatosServicioPageModule)
  },
  {
    path: 'mensaje-chat-empresa',
    loadChildren: () => import('./pages/mensaje-chat-empresa/mensaje-chat-empresa.module').then( m => m.MensajeChatEmpresaPageModule)
  },
  {
    path: 'editar-galeria-empresa',
    loadChildren: () => import('./pages/editar-galeria-empresa/editar-galeria-empresa.module').then( m => m.EditarGaleriaEmpresaPageModule)
  },
  {
    path: 'editar-galeria-paseador',
    loadChildren: () => import('./pages/editar-galeria-paseador/editar-galeria-paseador.module').then( m => m.EditarGaleriaPaseadorPageModule)
  },
  {
    path: 'editar-servicios-paseos',
    loadChildren: () => import('./pages/editar-servicios-paseos/editar-servicios-paseos.module').then( m => m.EditarServiciosPaseosPageModule)
  },
  {
    path: 'editar-servicios-empresa',
    loadChildren: () => import('./pages/editar-servicios-empresa/editar-servicios-empresa.module').then( m => m.EditarServiciosEmpresaPageModule)
  },{
    path: 'anadir-paseo',
    loadChildren: () => import('./pages/anadir-paseo/anadir-paseo.module').then( m => m.AnadirPaseoPageModule)
  },
  {
    path: 'detalle-servicio-paseo',
    loadChildren: () => import('./pages/detalle-servicio-paseo/detalle-servicio-paseo.module').then( m => m.DetalleServicioPaseoPageModule)
  },
  {
    path: 'editar-paseo',
    loadChildren: () => import('./pages/editar-paseo/editar-paseo.module').then( m => m.EditarPaseoPageModule)
  },
  {
    path: 'editar-mascotas-aceptadas',
    loadChildren: () => import('./pages/editar-mascotas-aceptadas/editar-mascotas-aceptadas.module').then( m => m.EditarMascotasAceptadasPageModule)
  },
  {
    path: 'anadir-servicios-empresa',
    loadChildren: () => import('./pages/anadir-servicios-empresa/anadir-servicios-empresa.module').then( m => m.AnadirServiciosEmpresaPageModule)
  },
  {
    path: 'editar-servicio-empresa',
    loadChildren: () => import('./pages/editar-servicio-empresa/editar-servicio-empresa.module').then( m => m.EditarServicioEmpresaPageModule)
  },
  {
    path: 'detalle-servicio-empresa',
    loadChildren: () => import('./pages/detalle-servicio-empresa/detalle-servicio-empresa.module').then( m => m.DetalleServicioEmpresaPageModule)},
    {
    path: 'ajustes-empresa',
    loadChildren: () => import('./pages/ajustes-empresa/ajustes-empresa.module').then( m => m.AjustesEmpresaPageModule)
  },
  {
    path: 'mis-valoraciones-paseador',
    loadChildren: () => import('./pages/mis-valoraciones-paseador/mis-valoraciones-paseador.module').then( m => m.MisValoracionesPaseadorPageModule)
  },
  {
    path: 'detalle-valoracion-empresa',
    loadChildren: () => import('./pages/detalle-valoracion-empresa/detalle-valoracion-empresa.module').then( m => m.DetalleValoracionEmpresaPageModule)
  },










];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

