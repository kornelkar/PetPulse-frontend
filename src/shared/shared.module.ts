import {NgModule} from '@angular/core';
import {BaseButtonComponent} from './components/base-button/base-button.component';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RouterLink} from "@angular/router";
import {RippleEffectDirective} from "./directives/ripple-effect.directive";
import {ChatRoomsComponent} from "./components/chat-rooms/chat-rooms.component";
import {HttpClientModule} from "@angular/common/http";
import {ChatRoomComponent} from "./components/chat-room/chat-room.component";


@NgModule({
  declarations: [
    BaseButtonComponent,
    LoginPageComponent,
    RippleEffectDirective,
    ChatRoomsComponent,
    ChatRoomComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    BaseButtonComponent,
    LoginPageComponent,
    ChatRoomsComponent,
    ChatRoomComponent,
  ]
})
export class SharedModule {
}
