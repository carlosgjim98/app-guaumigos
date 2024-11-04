import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurarDatosPage } from './configurar-datos.page';

describe('ConfigurarDatosPage', () => {
  let component: ConfigurarDatosPage;
  let fixture: ComponentFixture<ConfigurarDatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
