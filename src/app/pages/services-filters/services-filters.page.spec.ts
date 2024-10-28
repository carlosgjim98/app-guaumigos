import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesFiltersPage } from './services-filters.page';

describe('ServicesFiltersPage', () => {
  let component: ServicesFiltersPage;
  let fixture: ComponentFixture<ServicesFiltersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesFiltersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
