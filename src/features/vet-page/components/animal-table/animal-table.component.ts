import {Component} from '@angular/core';
import {AnimalInfo} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";
import {Calendar} from "../../../../core/models/calendar.model";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {TestResult} from "../../../../core/models/test-result.model";

@Component({
  selector: 'animal-table',
  templateUrl: './animal-table.component.html',
  styleUrl: './animal-table.component.scss'
})
export class AnimalTableComponent {
  selectedAnimalDetails: AnimalInfo | null = null;
  selectedAnimalVisit: Calendar | null | undefined = null;
  selectedAnimalTests: TestResult | null = null;
  selectedAnimalAddTest: TestResult | null = null;
  userId: number | null = null;

  animals!: AnimalInfo[];

  isAddingAnimal = false;

  constructor(
    private animalService: AnimalService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.loadAllAnimals();
    this.getUserInfo();
  }


  loadAllAnimals(): void {
    this.animalService.getAllAnimals().subscribe(
      (data: AnimalInfo[]) => {
        this.animals = data;
      },
      error => {
        console.error('Error fetching all users', error);
      }
    );
  }

  getUserInfo(): void {
    this.authService.getUserInfo().subscribe({
      next: (userInfo) => {
        console.log('User info received', userInfo);
        this.userId = userInfo.id;
        console.log('User info po przypisaniu do zmiennej', this.userId);
      },
      error: (error) => {
        console.error('Error fetching user info', error);
      }
    });
  }

  onNewAnimal(): void {
    this.isAddingAnimal = true;
  }

  onAnimalEditClick(animalInfo: AnimalInfo) {
    this.selectedAnimalDetails = animalInfo;
  }

  onBookVisitClick(animalInfo: AnimalInfo): void {
    console.log("UserID przed przekazaniem do formularza:", this.userId);
    this.selectedAnimalVisit = {
      animal_id: animalInfo.id,
      user_id: this.userId ?? undefined
    };
  }

  handleUpdate(updatedAnimalInfo: AnimalInfo) {
    this.animalService.updateAnimal(updatedAnimalInfo.id!, updatedAnimalInfo).subscribe(
      response => {
        console.log('Aktualizacja zakończona sukcesem', response);
      },
      error => {
        console.error('Wystąpił błąd podczas aktualizacji', error);
      }
    );
  }

  onViewTestsClick(animalTestResult: AnimalInfo): void {
    this.selectedAnimalTests = {
      animal_id: animalTestResult.id
    };
    console.log(this.selectedAnimalTests)
  }

  onAddTestClick(animalAddTestResult: AnimalInfo): void {
this.selectedAnimalAddTest = {
  animal_id: animalAddTestResult.id
}
  }
}
