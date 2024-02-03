import { NgModule } from "@angular/core";
import { SharedModule } from 'src/shared/shared.module';
import { UserComponent } from "./user.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PetHeaderComponent } from "src/core/components/pet-header/pet-header.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "../../core/interceptor/token-interceptor";
import {RouterOutlet} from "@angular/router";
import {UserRoutingModule} from "./user-routing.module";
import {UserDetailsModule} from "../../features/user-info/user-info.module";
import {
  AppointmentFormComponent
} from "../../features/user-info/components/appointment-form/appointment-form.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    declarations: [
      UserComponent,
    PetHeaderComponent
    ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    UserRoutingModule,
    UserDetailsModule,
  ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, provideAnimationsAsync()],
    bootstrap: [
      UserComponent
    ]
  })
  export class UserModule {}
