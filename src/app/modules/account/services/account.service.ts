import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { LoginViewModel } from '../models/LoginViewModel';

@Injectable()
export class AccountService {
    baseAuthUrl = 'https://localhost/api/auth/';
    decodedToken: any;
    currentUser: any;
    // photoUrl = new BehaviorSubject<string>('../../assets/user.png');
    // currentPhotoUrl = this.photoUrl.asObservable();

    constructor(private http: HttpClient) {

    }

    // changeMemberPhoto(photoUrl: string) {
    //     this.photoUrl.next(photoUrl);
    // }
    authenticate(loginRequest: LoginViewModel) {
        return this.http.post(this.baseAuthUrl + 'login', loginRequest);
        // .pipe(
        //     map((response: any) => {
        //         const user = response;
        //         if (user) {
        //             // localStorage.setItem('token', user.token);
        //             // localStorage.setItem('user', JSON.stringify(user.user));
        //             // this.decodedToken = this.jwtHelper.decodeToken(user.token);
        //             // this.currentUser = user.user;
        //             // this.changeMemberPhoto(this.currentUser.photoUrl);
        //         }
        //     })
        // );

    }




}
