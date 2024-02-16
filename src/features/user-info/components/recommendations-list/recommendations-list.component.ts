import {Component, Input, OnInit} from '@angular/core';
import {TestResult} from "../../../../core/models/test-result.model";
import {RecommendationService} from "../../../../core/services/recommendation/recommendation.service";
import {Recommendation} from "../../../../core/models/recommendation.model";

@Component({
  selector: 'recommendations-list',
  templateUrl: './recommendations-list.component.html',
  styleUrl: './recommendations-list.component.scss'
})
export class RecommendationsListComponent implements OnInit {
  @Input() animalId!: number | undefined;

  recommendations?: Recommendation[];

  constructor(private recommendationService: RecommendationService) {
  }

  ngOnInit() {
    this.loadAllRecommendations();
  }

  loadAllRecommendations(): void {
    this.recommendationService.getRecommendationsByAnimalId(this.animalId).subscribe(
      (data: Recommendation[]) => {
        this.recommendations = data;
      },
      error => {
        console.log('Nie udało się pobrać wyników badań', error);
      }
    );
  }
}
