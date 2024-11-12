import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleServicioEmpresaPage } from './detalle-servicio-empresa.page';

describe('DetalleServicioEmpresaPage', () => {
  let component: DetalleServicioEmpresaPage;
  let fixture: ComponentFixture<DetalleServicioEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleServicioEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
