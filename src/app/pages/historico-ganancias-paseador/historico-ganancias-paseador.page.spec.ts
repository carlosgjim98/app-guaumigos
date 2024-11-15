import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoGananciasPaseadorPage } from './historico-ganancias-paseador.page';

describe('HistoricoGananciasPaseadorPage', () => {
  let component: HistoricoGananciasPaseadorPage;
  let fixture: ComponentFixture<HistoricoGananciasPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoGananciasPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
