import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EulaDesdeAjustesPage } from './eula-desde-ajustes.page';

describe('EulaDesdeAjustesPage', () => {
  let component: EulaDesdeAjustesPage;
  let fixture: ComponentFixture<EulaDesdeAjustesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EulaDesdeAjustesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
