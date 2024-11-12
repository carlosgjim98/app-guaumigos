import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisValoracionesEmpresaPage } from './mis-valoraciones-empresa.page';

describe('MisValoracionesEmpresaPage', () => {
  let component: MisValoracionesEmpresaPage;
  let fixture: ComponentFixture<MisValoracionesEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisValoracionesEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
