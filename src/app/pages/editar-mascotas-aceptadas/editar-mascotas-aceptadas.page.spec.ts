import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarMascotasAceptadasPage } from './editar-mascotas-aceptadas.page';

describe('EditarMascotasAceptadasPage', () => {
  let component: EditarMascotasAceptadasPage;
  let fixture: ComponentFixture<EditarMascotasAceptadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMascotasAceptadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
