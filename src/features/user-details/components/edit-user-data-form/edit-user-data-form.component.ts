import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserDetails} from "../../models/user-details.model";

@Component({
  selector: 'edit-user-data-form',
  templateUrl: './edit-user-data-form.component.html',
  styleUrl: './edit-user-data-form.component.scss'
})
export class EditUserDataFormComponent {
  @Input() userEdit!: UserDetails;

  @Output() updateUser: EventEmitter<UserDetails> = new EventEmitter();

  onSubmit() {
    this.updateUser.emit(this.userEdit);
  }
}
