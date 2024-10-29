import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuntoDeInteresPublicadoClientePage } from './punto-de-interes-publicado-cliente.page';

describe('PuntoDeInteresPublicadoClientePage', () => {
  let component: PuntoDeInteresPublicadoClientePage;
  let fixture: ComponentFixture<PuntoDeInteresPublicadoClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDeInteresPublicadoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
