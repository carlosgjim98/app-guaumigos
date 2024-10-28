import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPuntoDeInteresPage } from './nuevo-punto-de-interes.page';

describe('NuevoPuntoDeInteresPage', () => {
  let component: NuevoPuntoDeInteresPage;
  let fixture: ComponentFixture<NuevoPuntoDeInteresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPuntoDeInteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
