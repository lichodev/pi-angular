import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.prod';
import { Response } from '../models/response';
import { User } from '../models/user';

const URL_LOGIN = BASE_URL + '/auth/login';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isLogged$: boolean = false;
    isLogged: BehaviorSubject<boolean> = new BehaviorSubject(this.isLogged$);

    constructor(private http: HttpClient) { }

    login(user: User): Observable<Response> {
        return this.http.post<Response>(URL_LOGIN, user);
    }
    
    /**
     * login() {
        this.isLogged$ = true;
        this.isLogged.next(this.isLogged$);
    }
     */

    logout() {
        this.isLogged$ = false;
        this.isLogged.next(this.isLogged$);
    }

    getIsLogged(): boolean {
        return this.isLogged$;
    }
}
