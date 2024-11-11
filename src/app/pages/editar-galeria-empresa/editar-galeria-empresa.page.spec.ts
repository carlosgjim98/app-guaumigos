import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarGaleriaEmpresaPage } from './editar-galeria-empresa.page';

describe('EditarGaleriaEmpresaPage', () => {
  let component: EditarGaleriaEmpresaPage;
  let fixture: ComponentFixture<EditarGaleriaEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGaleriaEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
