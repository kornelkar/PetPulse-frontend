import { Component } from '@angular/core';
import {NewAnimal} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";

@Component({
  selector: 'add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrl: './add-animal-form.component.scss'
})
export class AddAnimalFormComponent {
  animalEdit: NewAnimal = new NewAnimal(); // Użyj modelu Animal jako modelu formularza

  constructor(private animalService: AnimalService) {}

  onSubmit() {
    this.animalService.createNewAnimal(this.animalEdit).subscribe(
      response => {
        console.log('Animal added successfully', response);
        // Tutaj można dodać logikę po pomyślnym dodaniu zwierzęcia (np. wyświetlenie komunikatu, odświeżenie listy)
      },
      error => {
        console.error('Error adding animal', error);
        // Tutaj można dodać obsługę błędów (np. wyświetlenie komunikatu o błędzie)
      }
    );
  }
}
