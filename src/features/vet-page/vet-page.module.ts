import {NgModule} from "@angular/core";
import {AppointmentFormComponent} from "./components/appointment-form/appointment-form.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {VetPageComponent} from "./containers/vet-page/vet-page.component";
import {AnimalTableComponent} from "./components/animal-table/animal-table.component";
import {VisitFormComponent} from "./components/visit-form/visit-form.component";
import {EditAnimalDataFormComponent} from "./components/edit-animal-data-form/edit-animal-data-form.component";


@NgModule({
  declarations: [
    AppointmentFormComponent,
    VetPageComponent,
    AnimalTableComponent,
    VisitFormComponent,
    EditAnimalDataFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    AppointmentFormComponent,
    VetPageComponent,
    AnimalTableComponent,
  ]
})
export class VetPageModule {
}
