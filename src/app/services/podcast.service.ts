import { Injectable } from '@angular/core';
import { Podcast } from '../models/podcast';

const PODCASTS: Podcast[] = [
    {
        title: "Primer podcast",
        audio: "../../../assets/PodInfancia1.mp3",
    },
    {
        title: "Segundo podcast",
        audio: "../../../assets/PodInfancia1.mp3",
    },
    {
        title: "Tercer podcast",
        audio: "../../../assets/PodInfancia1.mp3",
    },
    {
        title: "Cuarto podcast",
        audio: "../../../assets/PodInfancia1.mp3",
    },
    {
        title: "Quinto podcast",
        audio: "../../../assets/PodInfancia1.mp3",
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
}
