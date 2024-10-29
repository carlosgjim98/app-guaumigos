import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltroPuntoDeInteresPage } from './filtro-punto-de-interes.page';

describe('FiltroPuntoDeInteresPage', () => {
  let component: FiltroPuntoDeInteresPage;
  let fixture: ComponentFixture<FiltroPuntoDeInteresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPuntoDeInteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
