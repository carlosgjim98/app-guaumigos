import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotasAceptadasPage } from './mascotas-aceptadas.page';

describe('MascotasAceptadasPage', () => {
  let component: MascotasAceptadasPage;
  let fixture: ComponentFixture<MascotasAceptadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasAceptadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
