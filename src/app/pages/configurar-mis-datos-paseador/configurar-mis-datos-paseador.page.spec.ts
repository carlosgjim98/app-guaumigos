import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurarMisDatosPaseadorPage } from './configurar-mis-datos-paseador.page';

describe('ConfigurarMisDatosPaseadorPage', () => {
  let component: ConfigurarMisDatosPaseadorPage;
  let fixture: ComponentFixture<ConfigurarMisDatosPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarMisDatosPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
