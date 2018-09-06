import { Injectable } from '@angular/core';
import { ResourceString } from '../config/resource.string';

@Injectable({ providedIn: 'root' })
export class ClientAuthService {

    //#region  UserTokenSetup
    getUserToken(): any {
        return localStorage.getItem(ResourceString.clientTokenKey);
    }
    setUserToken(value: Object): void {
        localStorage.setItem(ResourceString.clientTokenKey, JSON.stringify(value));
    }
    removeToken() {
        localStorage.removeItem(ResourceString.clientTokenKey);
    }
    //#endregion


    //#region  UserSetup
    setUser(value: Object): any {
        return localStorage.setItem(ResourceString.userKey, JSON.stringify(value));
    }
    removeUser() {
        localStorage.removeItem(ResourceString.userKey);
    }
    getUser(): any {
        return localStorage.getItem(ResourceString.userKey);
    }
    //#endregion



    isLoggedIn(): boolean {
        return localStorage.getItem(ResourceString.clientTokenKey) == null ? false : true;
    }

}
