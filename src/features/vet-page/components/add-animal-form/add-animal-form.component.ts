import {Component, OnInit} from '@angular/core';
import {AnimalBreed, AnimalType, NewAnimal} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";
import {AnimalTypeService} from "../../../../core/services/animal/animal-type.service";
import {AnimalBreedService} from "../../../../core/services/animal/animal-breed.service";

@Component({
  selector: 'add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrl: './add-animal-form.component.scss'
})
export class AddAnimalFormComponent implements OnInit {
  animalEdit: NewAnimal = new NewAnimal();
  animalTypes!: AnimalType[];
  animalBreeds!: AnimalBreed[];

  constructor(
    private animalService: AnimalService,
    private animalTypeService: AnimalTypeService,
    private animalBreedService: AnimalBreedService,
  ) {}

  ngOnInit(): void {
    this.loadAnimalTypes();
    this.loadAnimalBreeds();
  }

  onSubmit() {
    this.animalService.createNewAnimal(this.animalEdit).subscribe(
      response => {
        console.log('Animal added successfully', response);
      },
      error => {
        console.error('Error adding animal', error);
      }
    );
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
}
