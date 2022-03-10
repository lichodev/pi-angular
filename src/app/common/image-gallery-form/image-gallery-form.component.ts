import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryService } from 'src/app/services/gallery.service';
import { ERROR_CLASS, SAVED_IMAGE, SAVE_ERROR, SUCCESS_CLASS } from 'src/environments/environment.prod';
import { FastNoteComponent } from '../fast-note/fast-note.component';

@Component({
    selector: 'app-image-gallery-form',
    templateUrl: './image-gallery-form.component.html',
    styleUrls: ['./image-gallery-form.component.scss']
})
export class ImageGalleryFormComponent implements OnInit {

    imageForm!: FormGroup;
    image!: File;
    blob: any;
    timer: any;

    constructor(@ Inject(MAT_DIALOG_DATA) public result: any,
    public dialogRef: MatDialogRef<ImageGalleryFormComponent>,
        private gallerySvc: GalleryService,
        private fb: FormBuilder,
        private matDialog: MatDialog,) { }

    ngOnInit(): void {
        this.imageForm = this.fb.group({
            image: [null, Validators.required],
            imageSrc: [null, Validators.required],
            description: [null, Validators.required],
        })
    }

    post() {
        this.gallerySvc.post(this.imageForm.value, this.image)
        .subscribe(res => {
            this.showResult(this.getSuccess());
            this.timer = setTimeout(() => {
                this.dialogRef.close();
            }, 300);
        },
        err => {
            this.showResult(this.getError());
        })
    }

    changeFile(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    onFileChange(event: any) {

        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.imageForm.patchValue({
                fileSource: file
            });
            this.image = event.target.files[0];
        }
    }

    getSuccess(): any {
        return {
            response: SAVED_IMAGE,
            className: SUCCESS_CLASS,
        }
    }

    showResult(result: any) {
        this.matDialog.open(FastNoteComponent, {
            data: {
                response: result.response,
                class: result.className
            }
        })
    }

    getError(): any {
        return {
            response: SAVE_ERROR,
            className: ERROR_CLASS,
        }
    }
}
