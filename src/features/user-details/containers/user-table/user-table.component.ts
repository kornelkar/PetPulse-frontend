import {Component, Input} from '@angular/core';
import {UserDetails} from '../../models/user-details.model';
import {UserService} from "../../../../core/services/user-info/user.service";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  selectedUserDetails: UserDetails | null = null;

  users!: UserDetails[];

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.loadAllUsers();
    // loadOwnerInfo jest teraz wywoływane wewnątrz loadUserInfo, gdy dane są dostępne
  }


  loadAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: UserDetails[]) => {
        this.users = data;
      },
      error => {
        console.error('Error fetching all users', error);
      }
    );
  }


  onUserEditClick(userDetails: UserDetails) {
    this.selectedUserDetails = userDetails;
  }

  handleUpdate(updatedUserDetails: UserDetails) {
    this.userService.updateUserData(updatedUserDetails.id, updatedUserDetails).subscribe(
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
    if(confirm('Czy na pewno chcesz usunąć tego użytkownika?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          console.log(`Deleted user with id ${userId}`);
          this.loadAllUsers(); // Ponownie załaduj listę użytkowników, aby odświeżyć widok
        },
        error: error => {
          console.error('Error deleting user', error);
        }
      });
    }
  }
}
