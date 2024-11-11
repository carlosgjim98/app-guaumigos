import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioEmpresaPage } from './calendario-empresa.page';

describe('CalendarioEmpresaPage', () => {
  let component: CalendarioEmpresaPage;
  let fixture: ComponentFixture<CalendarioEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
