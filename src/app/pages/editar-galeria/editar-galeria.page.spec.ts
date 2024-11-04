import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarGaleriaPage } from './editar-galeria.page';

describe('EditarGaleriaPage', () => {
  let component: EditarGaleriaPage;
  let fixture: ComponentFixture<EditarGaleriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
