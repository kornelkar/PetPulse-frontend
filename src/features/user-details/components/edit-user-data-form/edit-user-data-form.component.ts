import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserDetails} from "../../models/user-details.model";
import {RoleService} from "../../../../core/services/role/role.service";
import {Role} from "../../../../core/models/role.model";

@Component({
  selector: 'edit-user-data-form',
  templateUrl: './edit-user-data-form.component.html',
  styleUrl: './edit-user-data-form.component.scss'
})
export class EditUserDataFormComponent {
  @Input() userEdit!: UserDetails;
  @Output() updateUser: EventEmitter<UserDetails> = new EventEmitter();

  roles!: Role[];

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getRoles().subscribe(
      (roles: Role[]) => {
        this.roles = roles;
      },
      error => {
        console.error('Error fetching roles', error);
      }
    );
  }

  onSubmit() {
    // Aktualizacja roli użytkownika
    if (this.userEdit && this.userEdit.role_id) {
      this.roleService.updateUserRole(this.userEdit.id, this.userEdit.role_id).subscribe({
        next: (response) => {
          // Tutaj można dodać logikę obsługi po pomyślnej aktualizacji roli, np. wyświetlić komunikat
          console.log('UserRole updated successfully', response);
          // Emitowanie zmian użytkownika do komponentu nadrzędnego
          this.updateUser.emit(this.userEdit);
        },
        error: (error) => {
          // Obsługa błędów, np. wyświetlenie komunikatu o błędzie
          console.error('Error updating user role', error);
        }
      });
    } else {
      // Jeśli rola nie została zmieniona, po prostu emituj zmiany
      this.updateUser.emit(this.userEdit);
    }
  }
}
