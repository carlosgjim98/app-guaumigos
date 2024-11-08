import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPuntosDeInteresPaseadorPage } from './mis-puntos-de-interes-paseador.page';

describe('MisPuntosDeInteresPaseadorPage', () => {
  let component: MisPuntosDeInteresPaseadorPage;
  let fixture: ComponentFixture<MisPuntosDeInteresPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPuntosDeInteresPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
