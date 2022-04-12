import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QueryResponse } from 'src/app/models/query';
import { QueryService } from 'src/app/services/query.service';
import { ERROR_CLASS, SAVED_RESPONSE, SAVE_ERROR, SUCCESS_CLASS } from 'src/environments/environment.prod';
import { FastNoteComponent } from '../fast-note/fast-note.component';

@Component({
    selector: 'app-response-form',
    templateUrl: './response-form.component.html',
    styleUrls: ['./response-form.component.scss']
})
export class ResponseFormComponent implements OnInit {

    responseForm!: FormGroup;
    timer: any;

    constructor(public dialogRef: MatDialogRef<ResponseFormComponent>,
        private matDialog: MatDialog,
        private querySvc: QueryService,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.responseForm = this.fb.group({
            response: [null, Validators.required]
        })
    }

    post() {
        let response: QueryResponse = {
            text: this.responseForm.value.response,
            questionId: 0,
        }
        this.querySvc.postResponse(response)
        .subscribe(r => {
            this.showResult(this.getSuccess());
            this.timer = setTimeout(() =>{
                this.dialogRef.close();
            }, 3000)
        },
        err => {
            this.showResult(this.getError());
        })
    }

    getSuccess(): any {
        return {
            response: SAVED_RESPONSE,
            className: SUCCESS_CLASS,
        }
    }
    
    getError(): any {
        return {
            response: SAVE_ERROR,
            className: ERROR_CLASS,
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


}
