import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleValoracionPaseadorPage } from './detalle-valoracion-paseador.page';

describe('DetalleValoracionPaseadorPage', () => {
  let component: DetalleValoracionPaseadorPage;
  let fixture: ComponentFixture<DetalleValoracionPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleValoracionPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
