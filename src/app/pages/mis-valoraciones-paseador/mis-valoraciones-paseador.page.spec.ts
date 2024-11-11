import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisValoracionesPaseadorPage } from './mis-valoraciones-paseador.page';

describe('MisValoracionesPaseadorPage', () => {
  let component: MisValoracionesPaseadorPage;
  let fixture: ComponentFixture<MisValoracionesPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisValoracionesPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
