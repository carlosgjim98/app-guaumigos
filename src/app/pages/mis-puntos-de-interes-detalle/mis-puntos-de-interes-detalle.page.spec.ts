import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPuntosDeInteresDetallePage } from './mis-puntos-de-interes-detalle.page';

describe('MisPuntosDeInteresDetallePage', () => {
  let component: MisPuntosDeInteresDetallePage;
  let fixture: ComponentFixture<MisPuntosDeInteresDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPuntosDeInteresDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
