import { Injectable } from '@angular/core';
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
