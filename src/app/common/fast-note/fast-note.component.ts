import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SUCCESS_CLASS } from 'src/environments/environment.prod';

const SUCCESS_IMAGE = "";
const ERROR_IMAGE = "";

@Component({
    selector: 'app-fast-note',
    templateUrl: './fast-note.component.html',
    styleUrls: ['./fast-note.component.scss']
})
export class FastNoteComponent implements OnInit {

    response: String = "";
    class: String = "";
    image: String = "";
    timer: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FastNoteComponent>,) {
        this.response = data.response;
        this.class = data.class;
        if (this.class == SUCCESS_CLASS) 
            this.image = SUCCESS_IMAGE;
        else
            this.image = ERROR_IMAGE;
     }

    ngOnInit(): void {
        this.timer = setTimeout(() => {
            this.dialogRef.close();
        }, 3000);
    }
}
