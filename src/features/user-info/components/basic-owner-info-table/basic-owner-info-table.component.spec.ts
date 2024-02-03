import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOwnerInfoTableComponent } from './basic-owner-info-table.component';

describe('BasicOwnerInfoTableComponent', () => {
  let component: BasicOwnerInfoTableComponent;
  let fixture: ComponentFixture<BasicOwnerInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicOwnerInfoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicOwnerInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
