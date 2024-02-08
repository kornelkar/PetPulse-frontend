import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {VisitInfo} from "../../../../core/models/visit.model";
import {VisitService} from "../../../../core/services/visit/visit.service";

@Component({
  selector: 'visit-form',
  templateUrl: './visit-form.component.html',
  styleUrl: './visit-form.component.scss'
})
export class VisitFormComponent implements OnInit {
  // @Input() visitEdit?: VisitInfo;


  // @Input() animalId: number | null | undefined = null;
  @Input() visitId!: number;


  @Output() updateVisit: EventEmitter<VisitInfo> = new EventEmitter();

  visitForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  private visitService: VisitService,
  ) { }

  ngOnInit() {
    this.visitForm = this.fb.group({
      name: [''],
      description: [''],
      status: [''],
    });
    console.log('visit id:',this.visitId)
  }

  onSubmit() {
    if (this.visitForm.valid) {
      this.visitService.updateVisit(this.visitId, this.visitForm.value).subscribe(
        result => {
          console.log('Wizyta przebiegla pomyslnie', this.visitForm.value, result);
        },
        error => {
          console.error('Wystąpił błąd podczas wysyłania informacji o wizycie', error);
        }
      );
    }
  }
}
