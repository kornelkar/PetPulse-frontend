import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDataFormComponent } from './edit-user-data-form.component';

describe('EditUserDataFormComponent', () => {
  let component: EditUserDataFormComponent;
  let fixture: ComponentFixture<EditUserDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserDataFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUserDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
