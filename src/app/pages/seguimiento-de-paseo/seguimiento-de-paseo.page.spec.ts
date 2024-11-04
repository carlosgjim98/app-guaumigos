import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguimientoDePaseoPage } from './seguimiento-de-paseo.page';

describe('SeguimientoDePaseoPage', () => {
  let component: SeguimientoDePaseoPage;
  let fixture: ComponentFixture<SeguimientoDePaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoDePaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
