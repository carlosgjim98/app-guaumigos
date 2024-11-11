import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleServicioPaseoPage } from './detalle-servicio-paseo.page';

describe('DetalleServicioPaseoPage', () => {
  let component: DetalleServicioPaseoPage;
  let fixture: ComponentFixture<DetalleServicioPaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleServicioPaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
