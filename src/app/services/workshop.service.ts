import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.prod';
import { Workshop } from '../models/workshop';

const URL = BASE_URL + '/workshops';

@Injectable({
    providedIn: 'root'
})
export class WorkshopService {

    constructor(private http: HttpClient) { }

    get(): Observable<Workshop[]> {
        return this.http.get<Workshop[]>(URL);
    }

    post(workshop: Workshop, video: File): Observable<HttpEvent<boolean>> {
        let data: FormData = new FormData;
        data.append('video', video);
        data.append('title', workshop.title);

        const req = new HttpRequest('POST', URL, data, {
            reportProgress: true,
            responseType: "text"
        });

        return this.http.request(req);
    }
}
