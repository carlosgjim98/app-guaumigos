import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisServiciosReservadosPage } from './mis-servicios-reservados.page';

describe('MisServiciosReservadosPage', () => {
  let component: MisServiciosReservadosPage;
  let fixture: ComponentFixture<MisServiciosReservadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisServiciosReservadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
