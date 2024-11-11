import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarServiciosEmpresaPage } from './editar-servicios-empresa.page';

describe('EditarServiciosEmpresaPage', () => {
  let component: EditarServiciosEmpresaPage;
  let fixture: ComponentFixture<EditarServiciosEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarServiciosEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
