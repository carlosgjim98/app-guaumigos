import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuntosDeInteresPage } from './puntos-de-interes.page';

describe('PuntosDeInteresPage', () => {
  let component: PuntosDeInteresPage;
  let fixture: ComponentFixture<PuntosDeInteresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosDeInteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
