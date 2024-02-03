import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {BasicOwnerInfoTableComponent} from "./components/basic-owner-info-table/basic-owner-info-table.component";
import {HttpClientModule} from "@angular/common/http";
import {PetUserPageComponent} from "./containers/pet-user-page/pet-user-page.component";
import {AppointmentFormComponent} from "./components/appointment-form/appointment-form.component";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    BasicOwnerInfoTableComponent,
    PetUserPageComponent,
    AppointmentFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [
    BasicOwnerInfoTableComponent,
    PetUserPageComponent,
    AppointmentFormComponent,
  ]
})
export class UserDetailsModule {
}
