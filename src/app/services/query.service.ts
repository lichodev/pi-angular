import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BASE_URL, ERROR_CLASS, SAVED_CHANGES, SAVED_MSG, SAVE_ERROR, SUCCESS_CLASS } from 'src/environments/environment.prod';
import { FastNoteComponent } from '../common/fast-note/fast-note.component';
import { Query, QueryResponse, QuestionResponse } from '../models/query';

const QUERIES: Query[] = [];
const URL = BASE_URL + '/questions';
const URL_RESPONSE = BASE_URL + '/response';

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
        replied: false
    }

    constructor(private http: HttpClient,
        private matDialog: MatDialog,) { }

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
        return this.http.post<boolean>(URL, this.query);
    }

    agree(id: number) {
        this.query.id = id;
        this.query.replied = true;
    }

    get(): Observable<Query[]> {
        return this.http.get<Query[]>(URL);
    }

    confirm() {
        this.put()
        .subscribe( r=> {
            this.showResult(r.toString(), this.getSuccessMsg(true));
        })
    }

    put(): Observable<boolean> {
        return this.http.put<boolean>(URL + '/' + this.query.id, this.query);
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


    // RESPONSES //

    postResponse(response: QueryResponse): Observable<boolean> {
        response.questionId = this.query.id;
        return this.http.post<boolean>(URL_RESPONSE, response);
    }

    getResponses(): Observable<QuestionResponse[]> {
        return this.http.get<QuestionResponse[]>(URL_RESPONSE);
    }
}
