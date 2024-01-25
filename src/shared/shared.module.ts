import { NgModule } from '@angular/core';
import { BaseButtonComponent } from './components/base-button/base-button.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LoginPageComponent} from "./components/login-page/login-page.component";


@NgModule({
  declarations: [
    BaseButtonComponent,
    LoginPageComponent,
  ],
  imports: [
  CommonModule,
  FormsModule,
],
  providers: [],
  exports: [
    BaseButtonComponent,
    LoginPageComponent,
  ]
})
export class SharedModule {}
