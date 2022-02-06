import { Injectable } from '@angular/core';
import { Query } from '../models/query';

const QUERIES: Query[] = [];

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

    constructor() { }

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

    post() {
        console.log("post")//post
    }

    agree(id: number) {
        this.query.id = id;
        this.query.status = 1;
    }

    getQueries(): Query[] {
        return QUERIES;
    }

    confirm() {
        this.put();
    }

    put(): void {
        console.log("put")
    }
}
