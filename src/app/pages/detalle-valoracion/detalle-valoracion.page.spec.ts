import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleValoracionPage } from './detalle-valoracion.page';

describe('DetalleValoracionPage', () => {
  let component: DetalleValoracionPage;
  let fixture: ComponentFixture<DetalleValoracionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleValoracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
