import { Injectable } from '@angular/core';
import { Query } from '../models/query';

@Injectable({
    providedIn: 'root'
})
export class QueryService {

    query!: Query;

    constructor() { }

    setQuery(q: Query) {
        this.query = q;
    }

    clear() {
        this.query = {
            name: "",
            lastname: "",
            email: "",
            phone: "",
            text: "",
        }
    }

    post() {
        console.log("post")//post
    }
}
