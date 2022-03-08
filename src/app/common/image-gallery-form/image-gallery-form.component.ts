import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
    selector: 'app-image-gallery-form',
    templateUrl: './image-gallery-form.component.html',
    styleUrls: ['./image-gallery-form.component.scss']
})
export class ImageGalleryFormComponent implements OnInit {

    imageForm!: FormGroup;
    image!: File;
    blob: any;

    constructor(@ Inject(MAT_DIALOG_DATA) public result: String,
    public dialogRef: MatDialogRef<ImageGalleryFormComponent>,
        private gallerySvc: GalleryService,
        private fb: FormBuilder) { }

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
            this.result = res.type.toString();
            this.dialogRef.close();
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
/*
        if (event.target.value) {
            const file = event.target.files[0];
            const type = file.type;
            this.changeFile(file).then((base64: any): any => {
                this.blob = new Blob([base64], type);
            });
        }*/

        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.imageForm.patchValue({
                fileSource: file
            });
            this.image = event.target.files[0];
        }
    }

}
