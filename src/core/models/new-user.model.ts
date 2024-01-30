export class NewUser {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;

  constructor(email: string, name: string, password: string, passwordCheck: string) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.passwordCheck = passwordCheck;
  }
}
