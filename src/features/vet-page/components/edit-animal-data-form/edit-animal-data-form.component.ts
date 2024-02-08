import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AnimalInfo} from "../../../../core/models/animal-info.model";

@Component({
  selector: 'edit-animal-data-form',
  templateUrl: './edit-animal-data-form.component.html',
  styleUrl: './edit-animal-data-form.component.scss'
})
export class EditAnimalDataFormComponent {
  @Input() animalEdit!: AnimalInfo;

  @Output() updateAnimal: EventEmitter<AnimalInfo> = new EventEmitter();

  onSubmit() {
    this.updateAnimal.emit(this.animalEdit);
  }
}
