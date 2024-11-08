import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarServiciosPaseosPage } from './editar-servicios-paseos.page';

describe('EditarServiciosPaseosPage', () => {
  let component: EditarServiciosPaseosPage;
  let fixture: ComponentFixture<EditarServiciosPaseosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarServiciosPaseosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
