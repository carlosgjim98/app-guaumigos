import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPuntoDeInteresPage } from './editar-punto-de-interes.page';

describe('EditarPuntoDeInteresPage', () => {
  let component: EditarPuntoDeInteresPage;
  let fixture: ComponentFixture<EditarPuntoDeInteresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPuntoDeInteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
