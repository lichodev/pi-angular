import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-image-pop-up',
    templateUrl: './image-pop-up.component.html',
    styleUrls: ['./image-pop-up.component.scss']
})
export class ImagePopUpComponent implements OnInit {

    image!: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,) {
        this.image = data.image;
    }

    ngOnInit(): void {
    }

}
