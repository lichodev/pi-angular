import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.prod';
import { Query } from '../models/query';

const QUERIES: Query[] = [];
const URL = BASE_URL + '/questions';

@Injectable({
    providedIn: 'root'
})
export class QueryService {


    query: Query = {
        id: 0,
        name: "",
        lastname: "",
        email: "",
        phone: "",
        text: "",
        status: 0,
    }

    constructor(private http: HttpClient) { }

    setQuery(q: Query) {
        this.query = q;
    }

    clear() {
        this.query = {
            id: null,
            name: "",
            lastname: "",
            email: "",
            phone: "",
            text: "",
            status: 0,
        }
    }

    post(): Observable<boolean> {
        return this.http.post<boolean>(URL, this.query);
    }

    agree(id: number) {
        this.query.id = id;
        this.query.status = 1;
    }

    get(): Observable<Query[]> {
        return this.http.get<Query[]>(URL);
    }

    confirm() {
        this.put()
        .subscribe( r=> {
            console.log(r);
        })
    }

    put(): Observable<boolean> {
        return this.http.put<boolean>(URL + '/' + this.query.id, this.query);
    }
}
