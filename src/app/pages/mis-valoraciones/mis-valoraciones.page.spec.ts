import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisValoracionesPage } from './mis-valoraciones.page';

describe('MisValoracionesPage', () => {
  let component: MisValoracionesPage;
  let fixture: ComponentFixture<MisValoracionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisValoracionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
