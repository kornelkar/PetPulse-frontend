import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAdminPageComponent } from './pet-admin-page.component';

describe('PetAdminPageComponent', () => {
  let component: PetAdminPageComponent;
  let fixture: ComponentFixture<PetAdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetAdminPageComponent]
    });
    fixture = TestBed.createComponent(PetAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
