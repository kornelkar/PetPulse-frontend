import { Component } from '@angular/core';
import {UserDetails} from "../../../user-details/models/user-details.model";
import {UserService} from "../../../../core/services/user-info/user.service";
import {AnimalInfo} from "../../../../core/models/animal-info.model";
import {AnimalService} from "../../../../core/services/animal/animal.service";

@Component({
  selector: 'animal-table',
  templateUrl: './animal-table.component.html',
  styleUrl: './animal-table.component.scss'
})
export class AnimalTableComponent {
  selectedAnimalDetails: AnimalInfo | null = null;

  animals!: AnimalInfo[];

  constructor(
    private animalService: AnimalService,
  ) {
  }

  ngOnInit(): void {
    this.loadAllAnimals();
    // loadOwnerInfo jest teraz wywoływane wewnątrz loadUserInfo, gdy dane są dostępne
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


  onUserEditClick(animalInfo: AnimalInfo) {
    this.selectedAnimalDetails = animalInfo;
  }

  handleUpdate(updatedAnimalInfo: AnimalInfo) {
    this.animalService.updateAnimal(updatedAnimalInfo.id!, updatedAnimalInfo).subscribe(
      response => {
        console.log('Aktualizacja zakończona sukcesem', response);
        // Tutaj możesz na przykład odświeżyć listę użytkowników lub wyświetlić komunikat o powodzeniu
      },
      error => {
        console.error('Wystąpił błąd podczas aktualizacji', error);
        // Obsługa błędów, np. wyświetlenie komunikatu o błędzie
      }
    );
  }

  onUserDeleteClick(userId: number): void {
    // if(confirm('Czy na pewno chcesz usunąć tego użytkownika?')) {
    //   this.userService.deleteUser(userId).subscribe({
    //     next: () => {
    //       console.log(`Deleted user with id ${userId}`);
    //       this.loadAllUsers(); // Ponownie załaduj listę użytkowników, aby odświeżyć widok
    //     },
    //     error: error => {
    //       console.error('Error deleting user', error);
    //     }
    //   });
    // }
  }
}
