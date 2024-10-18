import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenPagoPaseoPage } from './resumen-pago-paseo.page';

describe('ResumenPagoPaseoPage', () => {
  let component: ResumenPagoPaseoPage;
  let fixture: ComponentFixture<ResumenPagoPaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenPagoPaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
