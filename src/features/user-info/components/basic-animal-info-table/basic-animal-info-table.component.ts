import {Component, OnInit} from '@angular/core';
import {AnimalInfo} from "../../../../core/models/animal-info.model";

@Component({
  selector: 'basic-animal-info-table',
  standalone: true,
  imports: [],
  templateUrl: './basic-animal-info-table.component.html',
  styleUrl: './basic-animal-info-table.component.scss'
})
export class BasicAnimalInfoTableComponent {
  animals: AnimalInfo[] = [
    {
      id: 1,
      name: "Luna",
      microchip_number: 123456789012345,
      weight: 50,
      age: 5,
      color: "black",
      gender: "XYZ",
      animal_type_id: 1,
      created_at: "2024-01-29T18:58:03.000000Z",
      updated_at: "2024-01-29T18:58:03.000000Z"
    }
  ];

  // constructor(private animalService: AnimalService) { }
  //
  // ngOnInit(): void {
  //   this.animalService.getAnimals().subscribe(data => {
  //     this.animals = data;
  //   });
  // }
}
