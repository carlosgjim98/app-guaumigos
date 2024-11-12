import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleValoracionEmpresaPage } from './detalle-valoracion-empresa.page';

describe('DetalleValoracionEmpresaPage', () => {
  let component: DetalleValoracionEmpresaPage;
  let fixture: ComponentFixture<DetalleValoracionEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleValoracionEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
