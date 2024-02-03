import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAnimalInfoTableComponent } from './basic-animal-info-table.component';

describe('BasicAnimalInfoTableComponent', () => {
  let component: BasicAnimalInfoTableComponent;
  let fixture: ComponentFixture<BasicAnimalInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAnimalInfoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicAnimalInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
