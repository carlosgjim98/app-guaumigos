import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPaseadoresPage } from './listado-paseadores.page';

describe('ListadoPaseadoresPage', () => {
  let component: ListadoPaseadoresPage;
  let fixture: ComponentFixture<ListadoPaseadoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPaseadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
