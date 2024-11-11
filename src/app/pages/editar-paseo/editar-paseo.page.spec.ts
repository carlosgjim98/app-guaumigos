import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPaseoPage } from './editar-paseo.page';

describe('EditarPaseoPage', () => {
  let component: EditarPaseoPage;
  let fixture: ComponentFixture<EditarPaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
