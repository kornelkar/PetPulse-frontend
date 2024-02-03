import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;
  // availableAppointments$: Observable<Date[]>; // Przykład, jak można zarządzać dostępnymi terminami
  veterinarians = ['Dr. Smith', 'Dr. Johnson']; // Przykładowi weterynarze
  pets = ['Pies', 'Kot', 'Królik']; // Przykładowe zwierzęta

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      pet: ['', Validators.required],
      veterinarian: ['', Validators.required],
      purpose: ['', Validators.required],
      appointmentDate: ['', Validators.required]
    });

    // Tutaj można pobrać dostępne terminy, np. z serwera
    // this.availableAppointments$ = ...
  }

  submit() {
    if (this.appointmentForm.valid) {
      // Przetwarzaj dane formularza, np. wysyłaj do API
      console.log(this.appointmentForm.value);
    }
  }
}
