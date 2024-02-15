import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AnimalBreed, AnimalInfo, AnimalType} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";
import {AnimalTypeService} from "../../../../core/services/animal/animal-type.service";
import {AnimalBreedService} from "../../../../core/services/animal/animal-breed.service";

@Component({
  selector: 'edit-animal-data-form',
  templateUrl: './edit-animal-data-form.component.html',
  styleUrl: './edit-animal-data-form.component.scss'
})
export class EditAnimalDataFormComponent implements OnInit {
  @Input() animalEdit!: AnimalInfo;

  @Output() updateAnimal: EventEmitter<AnimalInfo> = new EventEmitter();

  animalTypes!: AnimalType[];
  animalBreeds!: AnimalBreed[];

  constructor(
    private animalTypeService: AnimalTypeService,
    private animalBreedService: AnimalBreedService,
  ) {}

  ngOnInit(): void {
    this.loadAnimalTypes();
    this.loadAnimalBreeds();
  }

  loadAnimalTypes(): void {
    this.animalTypeService.getAnimalTypes().subscribe({
      next: (types) => {
        this.animalTypes = types;
      },
      error: (error) => console.error('Error fetching animal types:', error)
    });
  }

  loadAnimalBreeds(): void {
    this.animalBreedService.getAnimalBreeds().subscribe({
      next: (breeds) => {
        this.animalBreeds = breeds;
      },
      error: (error) => console.error('Error fetching animal breeds:', error)
    });
  }

  onSubmit() {
    this.updateAnimal.emit(this.animalEdit);
  }
}
