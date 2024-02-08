import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {CalendarService} from "../../../../core/services/calendar/calendar.service";

@Component({
  selector: 'appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'] // Poprawiono na styleUrls
})
export class AppointmentFormComponent implements OnInit {
  @Input() animalId: number | null | undefined = null;
  @Input() userId: number | null | undefined = null;

  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.initForm();
    console.log(this.userId)
    console.log(this.animalId)
  }

  private initForm(): void {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      user_id: [this.userId, ],
      animal_id: [this.animalId, Validators.required]
    });
  }

  submit(): void {
    if (this.appointmentForm.valid) {
      this.calendarService.createAppointment(this.appointmentForm.value).subscribe(
        result => {
          console.log('Wizyta została zapisana', result);
          // Opcjonalnie: Wyczyść formularz lub przekieruj użytkownika
        },
        error => {
          console.error('Wystąpił błąd podczas zapisywania wizyty', error);
        }
      );
    }
  }
}
