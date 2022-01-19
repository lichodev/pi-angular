import { Injectable } from '@angular/core';
import { Request } from '../models/request';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    request!: Request;

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
}
