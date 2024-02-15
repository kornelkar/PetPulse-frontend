import {NgModule} from "@angular/core";
import {UserTableComponent} from "./containers/user-table/user-table.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {EditUserDataFormComponent} from "./components/edit-user-data-form/edit-user-data-form.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    UserTableComponent,
    EditUserDataFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
    UserTableComponent,
    EditUserDataFormComponent,
  ]
})
export class UserDetailsModule {
}
