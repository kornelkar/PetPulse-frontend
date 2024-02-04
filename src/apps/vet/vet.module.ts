import { NgModule } from "@angular/core";
import { SharedModule } from 'src/shared/shared.module';
import { VetComponent } from "./vet.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PetHeaderComponent } from "src/core/components/pet-header/pet-header.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "../../core/interceptor/token-interceptor";
import {RouterOutlet} from "@angular/router";
import {VetRoutingModule} from "./vet-routing.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {VetPageModule} from "../../features/vet-page/vet-page.module";

@NgModule({
    declarations: [
      VetComponent,
    PetHeaderComponent
    ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    VetRoutingModule,
    VetPageModule,
  ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, provideAnimationsAsync()],
    bootstrap: [
      VetComponent
    ]
  })
  export class VetModule {}
