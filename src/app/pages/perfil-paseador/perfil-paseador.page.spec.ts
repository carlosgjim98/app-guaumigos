import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPaseadorPage } from './perfil-paseador.page';

describe('PerfilPaseadorPage', () => {
  let component: PerfilPaseadorPage;
  let fixture: ComponentFixture<PerfilPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
