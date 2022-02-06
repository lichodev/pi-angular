import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from '../models/workshop';

const WORKSHOPS: Workshop[] = [
    {
        id: 0,
        title: "Capítulo 1",
        description: "Dale amor, seguridad y confianza a tu bebé",
        video: "../../../assets/workshops/capitulo1.mp4",
        video2: "",
    },
    {
        id: 1,
        title: "Capítulo 2",
        description: "Valorá sus logros",
        video: "../../../assets/workshops/capitulo2.mp4",
        video2: "",
    },
    {
        id: 2,
        title: "Capítulo 3",
        description: "Transformá el momento del baño en un juego",
        video: "../../../assets/workshops/capitulo3.mp4",
        video2: "",
    },
    {
        id: 3,
        title: "Capítulo 4",
        description: "Construyan juguetes de colores y texturas diferentes",
        video: "../../../assets/workshops/capitulo4.mp4",
        video2: "",
    },
    {
        id: 4,
        title: "Capítulo 5",
        description: "Armen rompecabezas juntos",
        video: "../../../assets/workshops/capitulo5.mp4",
        video2: "",
    },
    {
        id: 4,
        title: "Capítulo 6",
        description: "Dibujen y descubran nuevas formas",
        video: "../../../assets/workshops/capitulo6.mp4",
        video2: "",
    },
    {
        id: 4,
        title: "Capítulo 7",
        description: "Mostrale objetos nuevos y nombráselos",
        video: "../../../assets/workshops/capitulo7.mp4",
        video2: "",
    },
    {
        id: 4,
        title: "Capítulo 8",
        description: "Ampliá su mundo a través de palabras y gestos",
        video: "../../../assets/workshops/capitulo8.mp4",
        video2: "",
    },
    {
        id: 4,
        title: "Capítulo 9",
        description: "Hablale con palabras claras y distintos tipos de voz",
        video: "../../../assets/workshops/capitulo9.mp4",
        video2: "",
    },
    {
        id: 4,
        title: "Capítulo 10",
        description: "Prestá atención a sus gustos, acompañalo a explorar",
        video: "../../../assets/workshops/capitulo10.mp4",
        video2: "",
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
