import {Component} from '@angular/core';
import {AnimalInfo} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";
import {SharedModule} from "../../../../shared/shared.module";
import {OwnerInfo} from "../../../../core/models/owner-info.model";
import {OwnerService} from "../services/owner.service";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {VetPageModule} from "../../../vet-page/vet-page.module";
import {TestResult} from "../../../../core/models/test-result.model";
import {NgForOf, NgIf} from "@angular/common";
import {Recommendation} from "../../../../core/models/recommendation.model";
import {RecommendationsListComponent} from "../recommendations-list/recommendations-list.component";
import {UserInfo} from "../../../../core/models/user-info.model";

@Component({
  selector: 'basic-animal-info-table',
  templateUrl: './basic-animal-info-table.component.html',
  styleUrl: './basic-animal-info-table.component.scss'
})
export class BasicAnimalInfoTableComponent {
  selectedAnimalDetails: AnimalInfo | null = null;
  selectedAnimalTests: TestResult | null = null;
  selectedAnimalRecommendation: Recommendation | null = null;

  animal!: AnimalInfo[];
  ownerInfo!: OwnerInfo;
  userInfo!: UserInfo

  constructor(
    private animalService: AnimalService,
    private ownerService: OwnerService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }


  // loadOwnersAnimal(): void {
  //   this.animalService.getAnimalById(1).subscribe(
  //     (data: AnimalInfo) => {
  //       this.animal = data;
  //     },
  //     error => {
  //       console.error('Error fetching all users', error);
  //     }
  //   );
  // }

  loadOwnersAnimal(): void {
    this.animalService.getAllOwnersAnimals(this.userInfo.owner?.id).subscribe(
      (data: AnimalInfo[]) => {
        this.animal = data;
        console.log('owners animals',this.animal)
      },
      error => {
        console.error('Error fetching all users', error);
      }
    );
  }

  loadUserInfo(): void {
    this.authService.getUserInfo().subscribe(
      data => {
        this.userInfo = data;
        this.loadOwnersAnimal();
      },
      error => {
        console.error('Error fetching user info', error);
      }
    );
  }

  onViewTestsClick(animalTestResult: AnimalInfo): void {
    this.selectedAnimalTests = {
      animal_id: animalTestResult.id
    };
    console.log(this.selectedAnimalTests)
  }

  onViewRecommendationClick(animalRecommendation: Recommendation): void {
    this.selectedAnimalRecommendation = {
      animal_id: animalRecommendation.id
    };
  }
}
