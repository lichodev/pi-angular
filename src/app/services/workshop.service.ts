import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from '../models/workshop';

const WORKSHOPS: Workshop[] = [
    {
        id: 0,
        title: "Primer encuentro",
        description: "...",
        image: "",
        videos: [],
    },
    {
        id: 1,
        title: "Segundo encuentro",
        description: "...",
        image: "",
        videos: [],
    },
    {
        id: 2,
        title: "Tercer encuentro",
        description: "...",
        image: "",
        videos: [],
    },
    {
        id: 3,
        title: "Cuarto encuentro",
        description: "...",
        image: "",
        videos: [],
    },
    {
        id: 4,
        title: "Quinto encuentro",
        description: "...",
        image: "",
        videos: [],
    },
]

@Injectable({
    providedIn: 'root'
})
export class WorkshopService {

    constructor() { }

    getWorkshops(): Workshop[] {
        return WORKSHOPS;
    }
}
