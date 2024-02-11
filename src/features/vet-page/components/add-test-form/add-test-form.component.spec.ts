import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestFormComponent } from './add-test-form.component';

describe('AddTestFormComponent', () => {
  let component: AddTestFormComponent;
  let fixture: ComponentFixture<AddTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
