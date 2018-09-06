import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from './models/LoginViewModel';
import { RegisterViewModel } from './models/RegisterViewModel';
import { AccountService } from './services/account.service';
import { AppGlobalService } from '../app-common/services/AppGlobal.Service';
import { HttpResponse } from '@angular/common/http';
import { LoginObject } from '../app-common/models/LoginObject';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loginModel: LoginViewModel;
  registerModel: RegisterViewModel;

  constructor(private _router: Router, private _accountService: AccountService, private _appService: AppGlobalService) {
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

      this._accountService.authenticate(this.loginModel).subscribe(
        (response: any) => {
          console.log('AccountComponent', response);
          if (response.status === 200) {
            this._appService.login(response);
          } else {
            this._appService.logout();
          }
        },
        (error) => { console.log('AccountComponent', error); },
        () => console.log('AccountComponent: auth complete')

      );

    }
  }








  btnRegisterLogin() {
    const validationSummary = this.registerModel.isValid();
    if (validationSummary !== 'Valid') {
      alert(validationSummary);
    } else {
      this._router.navigate(['/home']);
    }
    // If valid Request

  }
  onGenderSelect(value) {
    this.registerModel.gender = value;
  }

}
