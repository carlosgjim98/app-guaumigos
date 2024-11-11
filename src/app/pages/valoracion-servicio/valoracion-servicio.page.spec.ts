import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValoracionServicioPage } from './valoracion-servicio.page';

describe('ValoracionServicioPage', () => {
  let component: ValoracionServicioPage;
  let fixture: ComponentFixture<ValoracionServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
