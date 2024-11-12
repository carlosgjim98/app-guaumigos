import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirServiciosEmpresaPage } from './anadir-servicios-empresa.page';

describe('AnadirServiciosEmpresaPage', () => {
  let component: AnadirServiciosEmpresaPage;
  let fixture: ComponentFixture<AnadirServiciosEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirServiciosEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
