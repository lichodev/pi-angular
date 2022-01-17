import { Injectable } from '@angular/core';
import { Query } from '../models/query';

@Injectable({
    providedIn: 'root'
})
export class QueryService {

    query!: Query;

    constructor() { }

    postQuery(q: Query) {
        this.query = q; //POST  
    }
}
