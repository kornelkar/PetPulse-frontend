import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {BasicOwnerInfoTableComponent} from "./components/basic-owner-info-table/basic-owner-info-table.component";
import {HttpClientModule} from "@angular/common/http";
import {PetUserPageComponent} from "./containers/pet-user-page/pet-user-page.component";
import {EditOwnerDataFormComponent} from "./components/edit-owner-data-form/edit-owner-data-form.component";
import {BasicAnimalInfoTableComponent} from "./components/basic-animal-info-table/basic-animal-info-table.component";
import {RecommendationsListComponent} from "./components/recommendations-list/recommendations-list.component";
import {VetPageModule} from "../vet-page/vet-page.module";
import {AllOwnerVisitsComponent} from "./components/all-owner-visits/all-owner-visits.component";

@NgModule({
  declarations: [
    BasicOwnerInfoTableComponent,
    PetUserPageComponent,
    EditOwnerDataFormComponent,
    RecommendationsListComponent,
    BasicAnimalInfoTableComponent,
    AllOwnerVisitsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    VetPageModule,
  ],
  providers: [],
  exports: [
    BasicOwnerInfoTableComponent,
    PetUserPageComponent,
    RecommendationsListComponent,
    BasicAnimalInfoTableComponent,
  ]
})
export class UserDetailsModule {
}
