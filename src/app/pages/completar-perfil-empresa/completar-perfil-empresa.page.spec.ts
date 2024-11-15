import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletarPerfilEmpresaPage } from './completar-perfil-empresa.page';

describe('CompletarPerfilEmpresaPage', () => {
  let component: CompletarPerfilEmpresaPage;
  let fixture: ComponentFixture<CompletarPerfilEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarPerfilEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
