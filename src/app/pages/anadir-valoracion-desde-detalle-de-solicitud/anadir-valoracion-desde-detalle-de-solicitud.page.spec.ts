import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirValoracionDesdeDetalleDeSolicitudPage } from './anadir-valoracion-desde-detalle-de-solicitud.page';

describe('AnadirValoracionDesdeDetalleDeSolicitudPage', () => {
  let component: AnadirValoracionDesdeDetalleDeSolicitudPage;
  let fixture: ComponentFixture<AnadirValoracionDesdeDetalleDeSolicitudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirValoracionDesdeDetalleDeSolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
