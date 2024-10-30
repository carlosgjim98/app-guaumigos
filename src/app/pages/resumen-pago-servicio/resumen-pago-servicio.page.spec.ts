import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenPagoServicioPage } from './resumen-pago-servicio.page';

describe('ResumenPagoServicioPage', () => {
  let component: ResumenPagoServicioPage;
  let fixture: ComponentFixture<ResumenPagoServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenPagoServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
