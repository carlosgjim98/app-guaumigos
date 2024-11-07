import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurarCalendarioPage } from './configurar-calendario.page';

describe('ConfigurarCalendarioPage', () => {
  let component: ConfigurarCalendarioPage;
  let fixture: ComponentFixture<ConfigurarCalendarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarCalendarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
