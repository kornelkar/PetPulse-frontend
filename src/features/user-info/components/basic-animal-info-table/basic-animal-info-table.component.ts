import {Component} from '@angular/core';
import {AnimalInfo} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";
import {SharedModule} from "../../../../shared/shared.module";
import {OwnerInfo} from "../../../../core/models/owner-info.model";
import {OwnerService} from "../services/owner.service";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {VetPageModule} from "../../../vet-page/vet-page.module";
import {TestResult} from "../../../../core/models/test-result.model";

@Component({
  selector: 'basic-animal-info-table',
  standalone: true,
  imports: [
    SharedModule,
    VetPageModule
  ],
  templateUrl: './basic-animal-info-table.component.html',
  styleUrl: './basic-animal-info-table.component.scss'
})
export class BasicAnimalInfoTableComponent {
  selectedAnimalDetails: AnimalInfo | null = null;
  selectedAnimalTests: TestResult | null = null;

  animal!: AnimalInfo;
  ownerInfo!: OwnerInfo;
  userInfo!: OwnerInfo

  constructor(
    private animalService: AnimalService,
    private ownerService: OwnerService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }


  loadOwnersAnimal(): void {
    this.animalService.getAnimalById(this.userInfo.id).subscribe(
      (data: AnimalInfo) => {
        this.animal = data;
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
        console.log(this.userInfo);
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
}
