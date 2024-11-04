import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSolicitudAceptadaPage } from './detalle-solicitud-aceptada.page';

describe('DetalleSolicitudAceptadaPage', () => {
  let component: DetalleSolicitudAceptadaPage;
  let fixture: ComponentFixture<DetalleSolicitudAceptadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudAceptadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
