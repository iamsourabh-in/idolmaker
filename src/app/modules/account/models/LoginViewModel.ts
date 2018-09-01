export class LoginViewModel {
  constructor() {
    this.userId = '';
    this.password = '';
    this.remember = true;
  }
  userId: String;
  password: String;
  remember: boolean;
  isValid(): String {
    if (this.userId === '') {
      return 'Invalid Username';
    } else if (this.password === '') {
      return 'Please enter Password';
    } else {
      return 'Valid';
    }
  }
}
