import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOwnerDataFormComponent } from './edit-owner-data-form.component';

describe('EditUserDataFormComponent', () => {
  let component: EditOwnerDataFormComponent;
  let fixture: ComponentFixture<EditOwnerDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOwnerDataFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOwnerDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
