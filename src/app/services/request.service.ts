import { Injectable } from '@angular/core';
import { Request } from '../models/request';

const REQUESTS: Request[] = [];

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    request: Request = {
        id:  null,
        name: "",
        lastname: "",
        email: "",
        phone: "",
        why: "",
        how: "",
        replied: null,
    }

    constructor() { }

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

    post(): void {
        console.log("post")//post
    }

    getRequests(): Request[] {
        return REQUESTS;
    }


    agree(id: number) {
        this.request.id = id;
        this.request.replied = true;
    }
    
}
