import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginUsuarioPaseadorPage } from './login-usuario-paseador.page';

describe('LoginUsuarioPaseadorPage', () => {
  let component: LoginUsuarioPaseadorPage;
  let fixture: ComponentFixture<LoginUsuarioPaseadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUsuarioPaseadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
