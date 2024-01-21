import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailsModule } from 'src/features/user-details/user-details.module';

@NgModule({
  declarations: [
    AdminComponent,
],
  imports: [
    BrowserModule,
     SharedModule,
     CommonModule,
     FormsModule,
     UserDetailsModule,
    ],
  providers: [],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule {}
