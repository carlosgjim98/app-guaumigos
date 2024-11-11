import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajeChatEmpresaPage } from './mensaje-chat-empresa.page';

describe('MensajeChatEmpresaPage', () => {
  let component: MensajeChatEmpresaPage;
  let fixture: ComponentFixture<MensajeChatEmpresaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeChatEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
