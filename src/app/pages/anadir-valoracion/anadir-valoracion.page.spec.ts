import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirValoracionPage } from './anadir-valoracion.page';

describe('AnadirValoracionPage', () => {
  let component: AnadirValoracionPage;
  let fixture: ComponentFixture<AnadirValoracionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirValoracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
