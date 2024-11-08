import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSolicitudAceptadaIniciarPaseoPage } from './detalle-solicitud-aceptada-iniciar-paseo.page';

describe('DetalleSolicitudAceptadaIniciarPaseoPage', () => {
  let component: DetalleSolicitudAceptadaIniciarPaseoPage;
  let fixture: ComponentFixture<DetalleSolicitudAceptadaIniciarPaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudAceptadaIniciarPaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
