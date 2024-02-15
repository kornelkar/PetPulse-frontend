import {Component} from '@angular/core';
import {AnimalBreed, AnimalInfo, AnimalType} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";
import {Calendar} from "../../../../core/models/calendar.model";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {TestResult} from "../../../../core/models/test-result.model";
import {AnimalTypeService} from "../../../../core/services/animal/animal-type.service";
import {AnimalBreedService} from "../../../../core/services/animal/animal-breed.service";

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

  animalTypes!: AnimalType[];
  animalBreeds!: AnimalBreed[];
  animals!: AnimalInfo[];

  isAddingAnimal = false;

  constructor(
    private animalService: AnimalService,
    private authService: AuthService,
    private animalTypeService: AnimalTypeService,
    private animalBreedService: AnimalBreedService,
  ) {
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.loadAllAnimals();
  }


  loadAllAnimals(): void {
    this.animalService.getAllAnimals().subscribe(
      (animals: AnimalInfo[]) => {
        // Upewnij się, że typy zwierząt zostały już załadowane
        if (this.animalTypes && this.animalTypes.length > 0) {
          animals.forEach(animal => {
            // Przypisz `animal_type` na podstawie `animal_type_id`
            animal.animal_type = this.animalTypes.find(type => type.id === animal.animal_type_id);
            console.log('przypisane')
          });
        }
        this.animals = animals;
      },
      error => {
        console.error('Error fetching all animals', error);
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

  loadAnimalTypes(): void {
    this.animalTypeService.getAnimalTypes().subscribe({
      next: (data) => {
        this.animalTypes = data;
        console.log('animal types:', this.animalTypes);
      },
      error: (error) => console.error(error),
    });
  }

  loadAnimalBreeds(): void {
    this.animalBreedService.getAnimalBreeds().subscribe({
      next: (breeds) => {
        this.animalBreeds = breeds;
      },
      error: (error) => {
        console.error('Error fetching animal breeds', error);
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
