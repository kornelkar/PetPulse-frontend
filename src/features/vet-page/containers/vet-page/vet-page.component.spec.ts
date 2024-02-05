import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetPageComponent } from './vet-page.component';

describe('VetPageComponent', () => {
  let component: VetPageComponent;
  let fixture: ComponentFixture<VetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
