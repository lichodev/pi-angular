import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.prod';
import { Podcast } from '../models/podcast';

const PODCASTS: Podcast[] = [
    {
        title: "Primer podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "../../../assets/podcasts/images/p1.png",
    },
    {
        title: "Segundo podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "../../../assets/podcasts/images/p1.png",
    },
    {
        title: "Tercer podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "../../../assets/podcasts/images/p1.png",
    },
    {
        title: "Cuarto podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "../../../assets/podcasts/images/p1.png",
    },
    {
        title: "Quinto podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "../../../assets/podcasts/images/p1.png",
    },
];

const URL = BASE_URL + '/podcast';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
    
    constructor(private http: HttpClient) { }
    
    getPodcasts(): Observable<Podcast[]> {
        return this.http.get<Podcast[]>(URL);
    }

    post(podcast: Podcast, audio: File, image: File): Observable<HttpEvent<String>> {
        let data: FormData = new FormData;
        data.append('title', podcast.title);
        data.append('audio', audio);
        data.append('file', image);

        const req = new HttpRequest('POST', URL, data, {
            reportProgress: true,
            responseType: "text",
        });

        return this.http.request(req);
    }
}
