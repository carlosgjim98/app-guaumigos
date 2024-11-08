import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteIniciarPaseoPage } from './cliente-iniciar-paseo.page';

describe('ClienteIniciarPaseoPage', () => {
  let component: ClienteIniciarPaseoPage;
  let fixture: ComponentFixture<ClienteIniciarPaseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteIniciarPaseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
