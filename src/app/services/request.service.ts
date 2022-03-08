import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.prod';
import { Request } from '../models/request';

const REQUESTS: Request[] = [];
const URL = BASE_URL +'/requests';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    request: Request = {
        id:  0,
        name: "",
        lastname: "",
        email: "",
        phone: "",
        why: "",
        how: "",
        replied: false,
    }

    constructor(private http: HttpClient) { }

    setRequest(r: Request): void {
        this.request = r;
    }

    clear() {
        this.request = {
            id: null,
            name: "",
            lastname: "",
            email: "",
            phone: "",
            why: "",
            how: "",
            replied: null,
        }
    }

    post(): Observable<boolean> {
        return this.http.post<boolean>(URL, this.request);
    }

    get(): Observable<Request[]> {
        return this.http.get<Request[]>(URL);
    }


    agree(id: number) {
        this.request.id = id;
        this.request.replied = true;
    }

    confirm() {
        this.put()
        .subscribe( r=> {
            console.log(r);
        })
    }

    put(): Observable<boolean> {
        return this.http.put<boolean>(URL + '/' + this.request.id, null);
    }
    
}
