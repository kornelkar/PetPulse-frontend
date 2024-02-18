import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOwnerVisitsComponent } from './all-owner-visits.component';

describe('AllOwnerVisitsComponent', () => {
  let component: AllOwnerVisitsComponent;
  let fixture: ComponentFixture<AllOwnerVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOwnerVisitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllOwnerVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
