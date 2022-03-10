import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BASE_URL, ERROR_CLASS, SAVED_CHANGES, SAVED_MSG, SAVE_ERROR, SUCCESS_CLASS } from 'src/environments/environment.prod';
import { FastNoteComponent } from '../common/fast-note/fast-note.component';
import { Request } from '../models/request';

const REQUESTS: Request[] = [];
const URL = BASE_URL + '/requests';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    request: Request = {
        id: 0,
        name: "",
        lastname: "",
        email: "",
        phone: "",
        why: "",
        how: "",
        replied: false,
    }

    constructor(private http: HttpClient,
        private matDialog: MatDialog,) { }

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
            replied: false,
        }
    }

    ok() {
        this.post()
            .subscribe(r => {
                this.showResult(r.toString(), this.getSuccessMsg(false));
            });
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
            .subscribe(r => {
                this.showResult(r.toString(), this.getSuccessMsg(true));
            })
    }

    put(): Observable<boolean> {
        return this.http.put<boolean>(URL + '/' + this.request.id, null);
    }


    showResult(result: String, success: String) {
        let response: String;
        let className: String;
        if (result == "true") {
            response = success;
            className = SUCCESS_CLASS;
        }
        else {
            response = SAVE_ERROR;
            className = ERROR_CLASS;
        }
        this.matDialog.open(FastNoteComponent, {
            data: {
                response: response,
                class: className
            }
        })
    }

    getSuccessMsg(admin: boolean): String {
        if (admin) {
            return SAVED_CHANGES;
        }
        return SAVED_MSG;
    }

}
