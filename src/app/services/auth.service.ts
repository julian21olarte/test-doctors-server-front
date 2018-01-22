import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    private user: any;
    private apiUrl: string;
    constructor(private http: Http) {
        this.apiUrl = 'http://localhost:3000/';
    }

    public login(login_user: any) {
        return this.http.post(this.apiUrl + 'auth/login', login_user);
    }

    public logout() {
        return this.http.post(this.apiUrl + 'auth/logout', {});
    }

    public getCurrentUser() {
        return this.user;
    }

    public setCurrentUser(newUser: any) {
        this.user = newUser;
    }
}
