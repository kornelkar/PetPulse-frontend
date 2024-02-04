import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserDetails} from "../../../user-details/models/user-details.model";
import {OwnerInfo} from "../../../../core/models/owner-info.model";

@Component({
  selector: 'edit-user-data-form',
  templateUrl: './edit-user-data-form.component.html',
  styleUrl: './edit-user-data-form.component.scss'
})
export class EditUserDataFormComponent {
@Input() userEdit!: OwnerInfo;

@Output() updateUser: EventEmitter<OwnerInfo> = new EventEmitter();

onSubmit() {
  this.updateUser.emit(this.userEdit);
}
}
