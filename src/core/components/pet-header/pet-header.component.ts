import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'pet-header',
  templateUrl: './pet-header.component.html',
  styleUrls: ['./pet-header.component.scss']
})
export class PetHeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }


  onLogOutButton(): void {
    this.authService.logout().subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error logging out', error);
      }
    );
  }
}
