export interface GalleryImage {
    id: number |null;
    image: string;
    description: string;
}

export interface ImageRequest {
    image: FormData;
    description: string;
}

export interface ImageResponse {
    id: number;
    image: any[];
    description: string;
}