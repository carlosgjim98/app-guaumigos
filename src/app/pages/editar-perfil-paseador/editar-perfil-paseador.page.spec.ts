import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPerfilPaseadorPage } from './editar-perfil-paseador.page';

describe('EditarPerfilPaseadorPage', () => {
  let component: EditarPerfilPaseadorPage;
  let fixture: ComponentFixture<EditarPerfilPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
