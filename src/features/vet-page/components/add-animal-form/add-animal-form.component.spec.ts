import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalFormComponent } from './add-animal-form.component';

describe('AddAnimalFormComponent', () => {
  let component: AddAnimalFormComponent;
  let fixture: ComponentFixture<AddAnimalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnimalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
