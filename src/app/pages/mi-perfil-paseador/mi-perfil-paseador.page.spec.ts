import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiPerfilPaseadorPage } from './mi-perfil-paseador.page';

describe('MiPerfilPaseadorPage', () => {
  let component: MiPerfilPaseadorPage;
  let fixture: ComponentFixture<MiPerfilPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPerfilPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
