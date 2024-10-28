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
  },  {
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
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'services-filters',
    loadChildren: () => import('./pages/services-filters/services-filters.module').then( m => m.ServicesFiltersPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
