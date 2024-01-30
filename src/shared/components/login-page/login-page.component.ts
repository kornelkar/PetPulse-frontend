import {Component, Input} from '@angular/core';
import {AuthService} from "../../../core/services/auth/auth.service";
import {User} from "../../../core/models/user.model";
import {Router} from "@angular/router";
import {NewUser} from "../../../core/models/new-user.model";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  user: User = new User('', '');
  newUser: NewUser = new NewUser('', '', '', '')

  isCreatingAccount = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  onLogin(): void {
    this.authService.login(this.user.email, this.user.password).subscribe(
      data => {
        console.log('Login successful', data);
        this.router.navigate(['/pet-admin-page']);
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
