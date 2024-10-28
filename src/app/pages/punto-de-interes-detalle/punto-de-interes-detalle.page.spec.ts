import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuntoDeInteresDetallePage } from './punto-de-interes-detalle.page';

describe('PuntoDeInteresDetallePage', () => {
  let component: PuntoDeInteresDetallePage;
  let fixture: ComponentFixture<PuntoDeInteresDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDeInteresDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
