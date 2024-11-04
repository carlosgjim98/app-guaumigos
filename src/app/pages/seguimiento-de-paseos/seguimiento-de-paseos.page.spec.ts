import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguimientoDePaseosPage } from './seguimiento-de-paseos.page';

describe('SeguimientoDePaseosPage', () => {
  let component: SeguimientoDePaseosPage;
  let fixture: ComponentFixture<SeguimientoDePaseosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoDePaseosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
