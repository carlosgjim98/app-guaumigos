import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilEmpresaGaleriaPage } from './perfil-empresa-galeria.page';

describe('PerfilEmpresaGaleriaPage', () => {
  let component: PerfilEmpresaGaleriaPage;
  let fixture: ComponentFixture<PerfilEmpresaGaleriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEmpresaGaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
