import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurarMisDatosEmpresaPage } from './configurar-mis-datos-empresa.page';

describe('ConfigurarMisDatosEmpresaPage', () => {
  let component: ConfigurarMisDatosEmpresaPage;
  let fixture: ComponentFixture<ConfigurarMisDatosEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarMisDatosEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
