import { Component } from '@angular/core';

@Component({
  selector: 'pet-header',
  templateUrl: './pet-header.component.html',
  styleUrls: ['./pet-header.component.scss']
})
export class PetHeaderComponent {



  onLogOutButton(): void {
    console.log('Wylogowuje');
  }
}
