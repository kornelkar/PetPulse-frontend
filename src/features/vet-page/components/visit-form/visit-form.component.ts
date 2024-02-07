import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'visit-form',
  templateUrl: './visit-form.component.html',
  styleUrl: './visit-form.component.scss'
})
export class VisitFormComponent implements OnInit {
  visitForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.visitForm = this.fb.group({
      visitPurpose: [''],
      visitDescription: [''],
      recommendations: [''],
    });
  }

  onSubmit() {
    console.log(this.visitForm.value);
    // Tutaj logika wysyłania danych formularza, np. do serwisu
  }
}
