import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirPaseoPage } from './anadir-paseo.page';

describe('AnadirPaseoPage', () => {
  let component: AnadirPaseoPage;
  let fixture: ComponentFixture<AnadirPaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirPaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
