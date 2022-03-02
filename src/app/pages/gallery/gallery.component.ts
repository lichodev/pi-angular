import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageGalleryFormComponent } from 'src/app/common/image-gallery-form/image-gallery-form.component';
import { ImagePopUpComponent } from 'src/app/common/image-pop-up/image-pop-up.component';
import { GalleryImage } from 'src/app/models/gallery-image';
import { AuthService } from 'src/app/services/auth.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    gallery: string[] = [];
    folder: string = "../../../assets/gallery/img";
    extension: string = ".jpg";
    quantity: number = 49;
    gallery1: GalleryImage[] = [];

    constructor(private matDialog: MatDialog,
        private authSvc: AuthService,
        private tknSvc: TokenService,
        private gallerySvc: GalleryService) { }

    ngOnInit(): void {
        //this.searchPics();
        this.gallerySvc.get().subscribe(gallery => {
            gallery.forEach(img => {
                let path = 'data:image/jpeg;base64,' + img.image;
                let newImage: GalleryImage = {id: 0, image: path, description: img.description};
                this.gallery1.push(newImage);
            });
        });
    }

    searchPics() {
        for (let i = 0; i < this.quantity; i++) {
            let num: number = i+1;
            let path: string = this.folder + num + this.extension;
            this.gallery.push(path);
        }
    }

    openSingleShow(img: string) {
        this.matDialog.open(ImagePopUpComponent, {
            data: {
                image: img,
                poll: false,
            }
        })
    }

    openForm(): void {
        this.matDialog.open(ImageGalleryFormComponent);
    }

    isLogged(): boolean {
        if (this.tknSvc.getToken()) {
            return true;
        }
        return false;
    }
}
