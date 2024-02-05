import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {SharedModule} from 'src/shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserDetailsModule} from 'src/features/user-details/user-details.module';
import {PetHeaderComponent} from "../../core/components/pet-header/pet-header.component";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {TokenInterceptor} from "../../core/interceptor/token-interceptor";
import {PetAdminPageComponent} from "../../core/components/pet-admin-page/pet-admin-page.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {
  EditOwnerDataFormComponent
} from "../../features/user-info/components/edit-owner-data-form/edit-owner-data-form.component";

@NgModule({
  declarations: [
    AdminComponent,
    PetHeaderComponent,
    PetAdminPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    FormsModule,
    UserDetailsModule,
    HttpClientModule,
    AdminRoutingModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule {
}
