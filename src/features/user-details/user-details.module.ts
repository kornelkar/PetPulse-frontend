import {NgModule} from "@angular/core";
import {UserTableComponent} from "./components/user-table/user-table.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {EditUserDataFormComponent} from "./components/edit-user-data-form/edit-user-data-form.component";

@NgModule({
  declarations: [
    UserTableComponent,
    EditUserDataFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    UserTableComponent,
    EditUserDataFormComponent,
  ]
})
export class UserDetailsModule {
}
