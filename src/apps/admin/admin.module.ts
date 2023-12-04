import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginPageComponent } from 'src/core/components/login-page/login-page.component';

@NgModule({
  declarations: [
    AdminComponent,
  LoginPageComponent
],
  imports: [
    BrowserModule,
     SharedModule
    ],
  providers: [],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule {}
