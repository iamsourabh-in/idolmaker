import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from './models/LoginViewModel';
import { RegisterViewModel } from './models/RegisterViewModel';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loginModel: LoginViewModel;
  registerModel: RegisterViewModel;
  constructor(private _router: Router) {
    this.loginModel = new LoginViewModel();
    this.registerModel = new RegisterViewModel();
  }

  ngOnInit() {
  }

  btnLoginClick() {
    const validationSummary = this.loginModel.isValid();
    if (validationSummary !== 'Valid') {
      alert(validationSummary);
    } else {
      console.log("asd");
      this._router.navigate(['/home']);
    }
    // If valid Request
  }
  btnRegisterLogin() {
    const validationSummary = this.registerModel.isValid();
    if (validationSummary !== 'Valid') {
      alert(validationSummary);
    } else {
      console.log("asd");
      this._router.navigate(['/home']);
    }
    // If valid Request

  }
  onGenderSelect(value) {
    this.registerModel.gender = value;
    console.log(value);
  }

}
