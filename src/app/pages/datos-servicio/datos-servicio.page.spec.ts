import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosServicioPage } from './datos-servicio.page';

describe('DatosServicioPage', () => {
  let component: DatosServicioPage;
  let fixture: ComponentFixture<DatosServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
