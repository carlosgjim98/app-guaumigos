import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePaseoPage } from './detalle-paseo.page';

describe('DetallePaseoPage', () => {
  let component: DetallePaseoPage;
  let fixture: ComponentFixture<DetallePaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
