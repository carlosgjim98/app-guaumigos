import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSolicitudPaseoPage } from './modal-solicitud-paseo.page';

describe('ModalSolicitudPaseoPage', () => {
  let component: ModalSolicitudPaseoPage;
  let fixture: ComponentFixture<ModalSolicitudPaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSolicitudPaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
