import { Component } from '@angular/core';
import {NewAnimal} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrl: './add-animal-form.component.scss'
})
export class AddAnimalFormComponent {
  animalEdit: NewAnimal = new NewAnimal();

  constructor(private animalService: AnimalService) {}

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
}
