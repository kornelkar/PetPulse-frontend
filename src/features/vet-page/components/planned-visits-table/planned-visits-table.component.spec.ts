import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedVisitsTableComponent } from './planned-visits-table.component';

describe('PlannedVisitsTableComponent', () => {
  let component: PlannedVisitsTableComponent;
  let fixture: ComponentFixture<PlannedVisitsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannedVisitsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannedVisitsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
