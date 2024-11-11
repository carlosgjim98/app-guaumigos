import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesSolicitudAceptadaServicioPage } from './detalles-solicitud-aceptada-servicio.page';

describe('DetallesSolicitudAceptadaServicioPage', () => {
  let component: DetallesSolicitudAceptadaServicioPage;
  let fixture: ComponentFixture<DetallesSolicitudAceptadaServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesSolicitudAceptadaServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
