
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {NewUser} from "../../../core/models/new-user.model";
import {Location} from "@angular/common";
import {LoginUser} from "../../../core/models/login-user.model";
import {Component} from "@angular/core";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  user: LoginUser = new LoginUser('', '');
  newUser: NewUser = new NewUser('', '', '', '')

  isCreatingAccount = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
  ) {
  }

  onLogin(): void {
    this.authService.login(this.user.email, this.user.password).subscribe(
      data => {
        console.log('Login successful', data);
        // Logika sprawdzająca adres URL
        const path = this.location.path();
        if (path.includes('/user/petpulse')) {
          this.router.navigate(['/pet-user-page']);
        } else if (path.includes('/admin/petpulse')) {
          this.router.navigate(['/pet-admin-page']);
        } else {
          // Przekierowanie domyślne lub obsługa błędu
          console.error()
          // Tutaj możesz przekierować do strony domowej lub pokazać komunikat błędu
        }
      },
      error => {
        console.error('Error logging in', error);
        // Handle login error
      }
    );
  }

  onSwitch(): void {
    this.isCreatingAccount = !this.isCreatingAccount;
  }

  onRegister(): void {
    this.authService.register(this.newUser.email, this.newUser.name, this.newUser.password, this.newUser.passwordCheck).subscribe(
      data => {
        console.log('Register successful', data);
        this.isCreatingAccount = false;
      },
      error => {
        console.error('Error logging in', error);
      }
    )
  }
}
