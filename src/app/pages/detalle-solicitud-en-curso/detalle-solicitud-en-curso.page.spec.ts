import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSolicitudEnCursoPage } from './detalle-solicitud-en-curso.page';

describe('DetalleSolicitudEnCursoPage', () => {
  let component: DetalleSolicitudEnCursoPage;
  let fixture: ComponentFixture<DetalleSolicitudEnCursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudEnCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
