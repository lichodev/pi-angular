import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }


    public setToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): String {
        let token = sessionStorage.getItem(TOKEN_KEY);
        if (token != null) return token;
        else return "";
    }

    public setUsername(username: string): void {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    }

    public getUsername(): String {
        let username = sessionStorage.getItem(USERNAME_KEY);
        if (username != null) return username;
        else return "";
    }

    public logout() {
        window.sessionStorage.clear();
    }
}
