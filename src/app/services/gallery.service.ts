import { Injectable } from '@angular/core';
import { GalleryImage } from '../models/gallery-image';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
    
    constructor() { }
    
    post(img: GalleryImage): void {
        console.log("post", img);
    }
}
