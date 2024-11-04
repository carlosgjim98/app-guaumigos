import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisSolicitudesDePaseoPage } from './mis-solicitudes-de-paseo.page';

describe('MisSolicitudesDePaseoPage', () => {
  let component: MisSolicitudesDePaseoPage;
  let fixture: ComponentFixture<MisSolicitudesDePaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisSolicitudesDePaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
