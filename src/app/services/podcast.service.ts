import { Injectable } from '@angular/core';
import { Podcast } from '../models/podcast';

const PODCASTS: Podcast[] = [
    {
        title: "Primer podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "",
    },
    {
        title: "Segundo podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "",
    },
    {
        title: "Tercer podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "",
    },
    {
        title: "Cuarto podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "",
    },
    {
        title: "Quinto podcast",
        audio: "../../../assets/PodInfancia1.mp3",
        image: "",
    },
];

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
    
    constructor() { }
    
    getPodcasts(): Podcast[] {
        return PODCASTS;
    }

    post(podcast: Podcast) {
        console.log("post", podcast)
    }
}
