import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPuntosDeInteresPage } from './mis-puntos-de-interes.page';

describe('MisPuntosDeInteresPage', () => {
  let component: MisPuntosDeInteresPage;
  let fixture: ComponentFixture<MisPuntosDeInteresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPuntosDeInteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
