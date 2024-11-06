import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CondicionesDeVentaDesdeAjustesPage } from './condiciones-de-venta-desde-ajustes.page';

describe('CondicionesDeVentaDesdeAjustesPage', () => {
  let component: CondicionesDeVentaDesdeAjustesPage;
  let fixture: ComponentFixture<CondicionesDeVentaDesdeAjustesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesDeVentaDesdeAjustesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
