import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VisitInfo} from "../../../../core/models/visit.model";
import {VisitService} from "../../../../core/services/visit/visit.service";
import {RecommendationService} from "../../../../core/services/recommendation/recommendation.service";
import {compileResults} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector: 'visit-form',
  templateUrl: './visit-form.component.html',
  styleUrl: './visit-form.component.scss'
})
export class VisitFormComponent implements OnInit {
  @Input() animalId!: number;
  @Input() visitId!: number;


  @Output() updateVisit: EventEmitter<VisitInfo> = new EventEmitter();

  visitForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private visitService: VisitService,
    private recommendationService: RecommendationService,
  ) {
  }

  ngOnInit() {
    this.visitForm = this.fb.group({
      name: [''],
      description: [''],
      status: [''],
      recommendationName: [''],
      recommendation: [''],
      animal_id: [this.animalId, Validators.required]
    });
    console.log('visit id:', this.visitId)
    console.log('animal id:', this.animalId)
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

      const recommendationData = {
        name: this.visitForm.get('recommendationName')?.value,
        description: this.visitForm.get('recommendation')?.value,
        animal_id: this.animalId
      };

      this.recommendationService.createRecommendation(recommendationData).subscribe(
        result => {
          console.log('Zalecenia wyslane', result)
        },
        error => {
          console.error('Wystąpił błąd podczas wysyłania zaleceń', error);
        }
      );
    }
  }
}
