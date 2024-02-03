import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetUserPageComponent } from './pet-user-page.component';

describe('PetUserPageComponent', () => {
  let component: PetUserPageComponent;
  let fixture: ComponentFixture<PetUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetUserPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
