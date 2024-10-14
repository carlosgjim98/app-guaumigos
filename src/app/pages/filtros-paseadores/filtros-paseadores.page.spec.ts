import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrosPaseadoresPage } from './filtros-paseadores.page';

describe('FiltrosPaseadoresPage', () => {
  let component: FiltrosPaseadoresPage;
  let fixture: ComponentFixture<FiltrosPaseadoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosPaseadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
