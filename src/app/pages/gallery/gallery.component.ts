import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FastNoteComponent } from 'src/app/common/fast-note/fast-note.component';
import { ImageGalleryFormComponent } from 'src/app/common/image-gallery-form/image-gallery-form.component';
import { ImagePopUpComponent } from 'src/app/common/image-pop-up/image-pop-up.component';
import { GalleryImage } from 'src/app/models/gallery-image';
import { AuthService } from 'src/app/services/auth.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { TokenService } from 'src/app/services/token.service';
import { ERROR_CLASS, SAVED_IMAGE, SAVE_ERROR, SUCCESS_CLASS } from 'src/environments/environment.prod';

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
        this.getImages();
    }
    
    getImages() {
        this.gallery1 = [];
        this.gallerySvc.get().subscribe(gallery => {
            gallery.forEach(img => {
                let path = 'data:image/jpeg;base64,' + img.image;
                img.image = path;
                this.gallery1.push(img);
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

    openSingleShow(id: number) {
        this.matDialog.open(ImagePopUpComponent, {
            data: {
                id: id,
                poll: false,
            }
        })
    }

    openForm(): void {
        const dialog = this.matDialog.open(ImageGalleryFormComponent);

        dialog.afterClosed().subscribe(result => {
            this.getImages();
        });
    }

    isLogged(): boolean {
        if (this.tknSvc.getToken()) {
            return true;
        }
        return false;
    }

}
