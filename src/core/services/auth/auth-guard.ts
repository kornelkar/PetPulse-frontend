import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('Current Token in AuthGuard:', this.authService.currentToken); // Dodaj tę linię dla debugowania
    if (this.authService.currentToken) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
