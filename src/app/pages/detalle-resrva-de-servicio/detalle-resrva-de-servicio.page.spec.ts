import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleResrvaDeServicioPage } from './detalle-resrva-de-servicio.page';

describe('DetalleResrvaDeServicioPage', () => {
  let component: DetalleResrvaDeServicioPage;
  let fixture: ComponentFixture<DetalleResrvaDeServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleResrvaDeServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
