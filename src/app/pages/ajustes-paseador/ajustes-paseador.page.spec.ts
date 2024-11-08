import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjustesPaseadorPage } from './ajustes-paseador.page';

describe('AjustesPaseadorPage', () => {
  let component: AjustesPaseadorPage;
  let fixture: ComponentFixture<AjustesPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
