import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoGananciasEmpresaPage } from './historico-ganancias-empresa.page';

describe('HistoricoGananciasEmpresaPage', () => {
  let component: HistoricoGananciasEmpresaPage;
  let fixture: ComponentFixture<HistoricoGananciasEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoGananciasEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
