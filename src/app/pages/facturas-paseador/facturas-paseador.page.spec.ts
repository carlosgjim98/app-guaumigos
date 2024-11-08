import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacturasPaseadorPage } from './facturas-paseador.page';

describe('FacturasPaseadorPage', () => {
  let component: FacturasPaseadorPage;
  let fixture: ComponentFixture<FacturasPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
