import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimalDataFormComponent } from './edit-animal-data-form.component';

describe('EditAnimalDataFormComponent', () => {
  let component: EditAnimalDataFormComponent;
  let fixture: ComponentFixture<EditAnimalDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAnimalDataFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAnimalDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
