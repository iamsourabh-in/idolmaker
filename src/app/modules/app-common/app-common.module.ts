import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGlobalService } from './services/AppGlobal.Service';
import { ClientAuthService } from './services/ClientAuth.service';
import { LoginObject } from './models/LoginObject';
import { UserModel } from './models/UserModel';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ClientAuthService, AppGlobalService],
  exports: [],
})
export class AppCommonModule { }

export const Models = [LoginObject, UserModel];
