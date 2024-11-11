import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiPerfilEmpresaPage } from './mi-perfil-empresa.page';

describe('MiPerfilEmpresaPage', () => {
  let component: MiPerfilEmpresaPage;
  let fixture: ComponentFixture<MiPerfilEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPerfilEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
