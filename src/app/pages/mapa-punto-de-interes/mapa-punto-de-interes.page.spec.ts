import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaPuntoDeInteresPage } from './mapa-punto-de-interes.page';

describe('MapaPuntoDeInteresPage', () => {
  let component: MapaPuntoDeInteresPage;
  let fixture: ComponentFixture<MapaPuntoDeInteresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaPuntoDeInteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
