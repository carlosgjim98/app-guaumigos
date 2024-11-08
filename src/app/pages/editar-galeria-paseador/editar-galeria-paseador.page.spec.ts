import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarGaleriaPaseadorPage } from './editar-galeria-paseador.page';

describe('EditarGaleriaPaseadorPage', () => {
  let component: EditarGaleriaPaseadorPage;
  let fixture: ComponentFixture<EditarGaleriaPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGaleriaPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
