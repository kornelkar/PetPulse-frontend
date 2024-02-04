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

  // Załóżmy, że te dane są pobierane z serwisu lub API
  owners = [{ id: 1, name: 'Jan Kowalski' }, { id: 2, name: 'Anna Nowak' }];
  animals = [{ id: 1, owner_id: 1, name: 'Rex' }, { id: 2, owner_id: 2, name: 'Mruczek' }];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      owner: [''],
      animal: [''],
      visitPurpose: [''],
      appointmentDateTime: [new Date()] // Połączone pole dla daty i godziny
    });
  }

  submit() {
    const formValue = this.appointmentForm.value;
    // Zakładając, że `appointmentDateTime` jest stringiem w formacie 'YYYY-MM-DDTHH:mm'
    // np. wartość z inputa typu "datetime-local"

    console.log(formValue.appointmentDateTime); // Wypisz wartość, aby zobaczyć format

    // Nie potrzebujemy już ręcznie łączyć daty i czasu, ponieważ zakładamy, że są one już połączone w jednym polu formularza
    const submitValue = {
      ...formValue,
      appointmentDateTime: new Date(formValue.appointmentDateTime) // Konwersja stringa na obiekt Date
    };

    console.log(submitValue);
    // Tutaj możesz wysłać `submitValue` do backendu
  }
}
