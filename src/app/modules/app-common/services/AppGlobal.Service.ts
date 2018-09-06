import { Injectable } from '@angular/core';
import { ResourceString } from '../config/resource.string';
import { LoginObject } from '../models/LoginObject';
import { ClientAuthService } from './ClientAuth.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppGlobalService {
    constructor(private _router: Router, private _clientAuth: ClientAuthService) { }

    login(value: LoginObject): void {
        this._clientAuth.setUserToken(value.Token);
        this._clientAuth.setUser(value.User);
        this._router.navigate(['/home']);
    }
    logout(): void {
        this._clientAuth.removeToken();
        this._clientAuth.removeUser();
    }
    isLoggedIn(): boolean {
        return this._clientAuth.isLoggedIn();
    }
    // To be moved Inside Main App
    // currentPage(): boolean {
    //     return localStorage.getItem(ResourceString.clientTokenKey) == null ? false : true;
    // }
}
