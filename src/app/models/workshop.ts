import { SafeResourceUrl } from "@angular/platform-browser";

export interface Workshop {
    id: number;
    title: string;
    description: string;
    video: string | SafeResourceUrl;
    video2: string;
}