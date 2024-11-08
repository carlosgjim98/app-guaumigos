import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValoracionPaseoPage } from './valoracion-paseo.page';

describe('ValoracionPaseoPage', () => {
  let component: ValoracionPaseoPage;
  let fixture: ComponentFixture<ValoracionPaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionPaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
