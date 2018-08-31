import { Component, OnInit } from '@angular/core';


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
    }
    return '';
  }
}

export class RegisterViewModel {
  firstName: String;
  lastName: String;
  email: String;
  gender: String;
  dob: String;
  password: String;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.gender = '';
    const m = new Date();
    this.dob = m.getUTCDate() + '/' + (m.getUTCMonth() + 1) + '/' + m.getUTCFullYear();
    this.password = '';
  }



  isValid(): String {
    if (this.firstName === '') {
      return 'Please enter your FirstName';
    } else if (this.password === '') {
      return 'Please enter Password';
    } else if (this.email === '') {
      return 'Please enter Email';
    } else if (this.gender === '') {
      return 'Please select Gender';
    }

    return '';
  }
}


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loginModel: LoginViewModel;
  registerModel: RegisterViewModel;
  constructor() {
    this.loginModel = new LoginViewModel();
    this.registerModel = new RegisterViewModel();
  }

  ngOnInit() {
  }

  btnLoginClick() {
    const validationSummary = this.loginModel.isValid();
    if (validationSummary !== '') {
      alert(validationSummary);
    }
    // If valid Request

  }
  btnRegisterLogin() {
    const validationSummary = this.registerModel.isValid();
    if (validationSummary !== '') {
      alert(validationSummary);
    }
    // If valid Request
  }
  onGenderSelect(value) {
    this.registerModel.gender = value;
    console.log(value);
  }

}
