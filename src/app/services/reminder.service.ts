import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.prod';
import { Reminder } from '../models/reminder';

const URL = BASE_URL + '/reminder';

@Injectable({
    providedIn: 'root'
})
export class ReminderService {
    

    constructor(private http: HttpClient) { }

    get(): Observable<Reminder[]> {
        return this.http.get<Reminder[]>(URL);
    }

    getById(id: number): Observable<Reminder> {
        return this.http.get<Reminder>(URL + '/' + id);
    }
    
    post(reminder: Reminder, image: File): Observable<HttpEvent<String>> {
        let data: FormData = new FormData;
        data.append('file', image);
        data.append('since', reminder.since.toString());
        data.append('until', reminder.until.toString());

        let req = new HttpRequest('POST', URL, data, {
            reportProgress: true,
            responseType: 'text'
        });

        return this.http.request(req);
    }

    yes(id: number) {
        this.put(id, 1)
        .subscribe( r => {
            console.log(r);
        })
    }

    no(id: number) {
        this.put(id, -1)
        .subscribe( r => {
            console.log(r);
        })
    }

    put(id: number, value: number): Observable<boolean> {
        return this.http.put<boolean>(URL + '/' + id, value);
    }
}
