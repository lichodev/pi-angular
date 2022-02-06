import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isLogged$: boolean = false;
    isLogged: BehaviorSubject<boolean> = new BehaviorSubject(this.isLogged$);

    constructor() { }

    login() {
        this.isLogged$ = true;
        this.isLogged.next(this.isLogged$);
    }

    logout() {
        this.isLogged$ = false;
        this.isLogged.next(this.isLogged$);
    }

    getIsLogged(): boolean {
        return this.isLogged$;
    }
}
