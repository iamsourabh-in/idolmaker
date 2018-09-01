import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from 'selenium-webdriver/http';


@Injectable()
export class AccountService {

    constructor(private http: HttpClient) {

    }

    authenticate(username: String, password: String) {
        // return this.http.send({
        //     "heroesUrl": "api/heroes",
        //     "textfile": "assets/textfile.txt"
        // });
    }




}
