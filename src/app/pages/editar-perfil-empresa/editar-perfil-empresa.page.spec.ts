import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPerfilEmpresaPage } from './editar-perfil-empresa.page';

describe('EditarPerfilEmpresaPage', () => {
  let component: EditarPerfilEmpresaPage;
  let fixture: ComponentFixture<EditarPerfilEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
