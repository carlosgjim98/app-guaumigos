import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjustesEmpresaPage } from './ajustes-empresa.page';

describe('AjustesEmpresaPage', () => {
  let component: AjustesEmpresaPage;
  let fixture: ComponentFixture<AjustesEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
