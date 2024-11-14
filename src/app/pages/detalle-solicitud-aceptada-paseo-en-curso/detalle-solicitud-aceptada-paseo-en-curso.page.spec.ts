import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSolicitudAceptadaPaseoEnCursoPage } from './detalle-solicitud-aceptada-paseo-en-curso.page';

describe('DetalleSolicitudAceptadaPaseoEnCursoPage', () => {
  let component: DetalleSolicitudAceptadaPaseoEnCursoPage;
  let fixture: ComponentFixture<DetalleSolicitudAceptadaPaseoEnCursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudAceptadaPaseoEnCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
