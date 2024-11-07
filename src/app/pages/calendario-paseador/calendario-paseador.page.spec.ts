import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioPaseadorPage } from './calendario-paseador.page';

describe('CalendarioPaseadorPage', () => {
  let component: CalendarioPaseadorPage;
  let fixture: ComponentFixture<CalendarioPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
