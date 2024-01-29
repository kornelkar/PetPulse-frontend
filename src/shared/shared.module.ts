import { NgModule } from '@angular/core';
import { BaseButtonComponent } from './components/base-button/base-button.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RouterLink} from "@angular/router";
import {RippleEffectDirective} from "./directives/ripple-effect.directive";


@NgModule({
  declarations: [
    BaseButtonComponent,
    LoginPageComponent,
    RippleEffectDirective,
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterLink,
    ],
  providers: [],
  exports: [
    BaseButtonComponent,
    LoginPageComponent,
  ]
})
export class SharedModule {}
