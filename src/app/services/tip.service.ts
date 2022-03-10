import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.prod';
import { Tip } from '../models/tip';

const TIPS: Tip[] = [
    {
        id: 1,
        title: "",
        image: "../../../assets/tips/tip1.png",
        text: "TIP 1",
    },
    {
        id: 2,
        title: "",
        image: "../../../assets/tips/tip2.png",
        text: "TIP 2",
    },
    {
        id: 3,
        title: "",
        image: "../../../assets/tips/tip3.png",
        text: "TIP 3",
    },
    {
        id: 4,
        title: "",
        image: "../../../assets/tips/tip4.png",
        text: "TIP 4",
    },
    {
        id: 5,
        title: "",
        image: "../../../assets/tips/tip5.png",
        text: "TIP 5",
    },
    {
        id: 6,
        title: "",
        image: "../../../assets/tips/tip6.png",
        text: "TIP 6",
    },
];

const URL = BASE_URL + '/tips';
const URL_DAILY = BASE_URL + '/daily-tip';

@Injectable({
    providedIn: 'root'
})
export class TipService {
    
    constructor(private http: HttpClient) { }
    
    getTips(): Observable<Tip[]> {
        return this.http.get<Tip[]>(URL);
    }
    
    getTip(id: number): Observable<Tip> {
        return this.http.get<Tip>(URL+'/'+id);
    }
    
    getWelcomeTip(): Observable<Tip> {
        return this.http.get<Tip>(URL_DAILY);
    }

    post(tip: Tip, image: File): Observable<HttpEvent<String>> {
        let data: FormData = new FormData;
        data.append('file', image);
        data.append('title', tip.title);
        data.append('text', tip.text);

        const req = new HttpRequest('POST', URL, data, {
            reportProgress: true,
            responseType: 'text'
        })
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
