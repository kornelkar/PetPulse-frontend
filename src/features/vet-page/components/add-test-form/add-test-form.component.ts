import {Component, Input, OnInit} from '@angular/core';
import {TestResultsService} from "../../../../core/services/test/test.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'add-test-form',
  templateUrl: './add-test-form.component.html',
  styleUrl: './add-test-form.component.scss'
})
export class AddTestFormComponent implements OnInit {
  @Input() animalId: number | null | undefined = null;

  testForm!: FormGroup;

  constructor(private testService: TestResultsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.testForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      animal_id: [this.animalId, Validators.required]
    });
  }

  onSubmit() {
    if (this.testForm.valid) {
      this.testService.createTestResult(this.testForm.value).subscribe(
        response => {
          console.log('Dodano nowe wyniki', response);
        },
        error => {
          console.error('Error, coś poszło nie tak', error);
        }
      );
    }
   }
}
