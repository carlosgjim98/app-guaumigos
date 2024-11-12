import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarServicioEmpresaPage } from './editar-servicio-empresa.page';

describe('EditarServicioEmpresaPage', () => {
  let component: EditarServicioEmpresaPage;
  let fixture: ComponentFixture<EditarServicioEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarServicioEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
