import { NgModule } from "@angular/core";
import { SharedModule } from 'src/shared/shared.module';
import { UserComponent } from "./user.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PetHeaderComponent } from "src/core/components/pet-header/pet-header.component";

@NgModule({
    declarations: [
      UserComponent,
    PetHeaderComponent],
    imports: [
      BrowserModule,
      SharedModule,
      CommonModule,
      FormsModule,
    ],
    providers: [],
    bootstrap: [
      UserComponent
    ]
  })
  export class UserModule {}