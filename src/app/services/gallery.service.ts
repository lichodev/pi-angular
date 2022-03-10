import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.prod';
import { GalleryImage, ImageRequest, ImageResponse } from '../models/gallery-image';

const URL = BASE_URL + '/gallery';

@Injectable({
    providedIn: 'root'
})
export class GalleryService {

    constructor(private http: HttpClient) { }

    get(): Observable<GalleryImage[]> {
        return this.http.get<GalleryImage[]>(URL);
    }

    getById(id: number): Observable<GalleryImage> {
        return this.http.get<GalleryImage>(URL + "/" + id);
    }

    post(imgData: GalleryImage, img: File): Observable<HttpEvent<String>> {
        const data: FormData = new FormData;
        data.append('file', img);
        data.append('description', imgData.description);

        const newRequest = new HttpRequest('POST', URL, data, {
            reportProgress: true,
            responseType: 'text'
        })
        return this.http.request(newRequest);
    }


}
