import { HttpEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipService } from 'src/app/services/tip.service';
import { ERROR_CLASS, SAVED_TIP, SAVE_ERROR, SUCCESS_CLASS } from 'src/environments/environment.prod';
import { FastNoteComponent } from '../fast-note/fast-note.component';

@Component({
    selector: 'app-tip-form',
    templateUrl: './tip-form.component.html',
    styleUrls: ['./tip-form.component.scss']
})
export class TipFormComponent implements OnInit {

    tipForm!: FormGroup;
    image!: File;
    timer: any;

    constructor(@ Inject(MAT_DIALOG_DATA) public result: any,
    public dialogRef: MatDialogRef<TipFormComponent>,
        private tipSvc: TipService,
        private fb: FormBuilder,
        private matDialog: MatDialog,) { }

    ngOnInit(): void {
        this.tipForm = this.fb.group({
            title: [null, Validators.required],
            text: [null, Validators.required],
            image: [null, Validators.required],
        })
    }

    onFileChange(event: any) {

        if (event.target.files.length > 0) {
            this.image = event.target.files[0];
        }
    }

    post() {
        this.tipSvc.post(this.tipForm.value, this.image)
        .subscribe(res => {
            this.showResult(this.getSuccess());
            this.timer = setTimeout(() => {
                this.dialogRef.close();
            }, 3000)
        },
        err => {
            this.showResult(this.getError());
        })
    }

    getSuccess(): any {
        return {
            response: SAVED_TIP,
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
