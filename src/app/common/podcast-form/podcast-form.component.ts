import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PodcastService } from 'src/app/services/podcast.service';
import { ERROR_CLASS, SAVED_PODCAST, SAVE_ERROR, SUCCESS_CLASS } from 'src/environments/environment.prod';
import { FastNoteComponent } from '../fast-note/fast-note.component';

@Component({
    selector: 'app-podcast-form',
    templateUrl: './podcast-form.component.html',
    styleUrls: ['./podcast-form.component.scss']
})
export class PodcastFormComponent implements OnInit {

    podcastForm!: FormGroup;
    audio!: File;
    image!: File;
    timer: any;

    constructor(@ Inject(MAT_DIALOG_DATA) public result: any,
    public dialogRef: MatDialogRef<PodcastFormComponent>,
    private podcastSvc: PodcastService,
        private fb: FormBuilder,
        private matDialog: MatDialog,) { }

    ngOnInit(): void {
        this.podcastForm = this.fb.group({
            title: [null, Validators.required],
            audio: [null, Validators.required],
            image: [null, Validators.required],
        })
    }

    post(): void {
        this.podcastSvc.post(this.podcastForm.value, this.audio, this.image)
        .subscribe(r => {
            this.result = this.getSuccess();
            this.timer = setTimeout(() =>{
                this.dialogRef.close();
            }, 3000)
        },
        err => {
            this.showResult(this.getError());
        })
    }

    onAudioChange(event: any) {
        if (event.target.files.length > 0) {
            this.audio = event.target.files[0];
        }
    }

    onImageChange(event: any) {
        if (event.target.files.length > 0) {
            this.image = event.target.files[0];
        }
    }

    getSuccess(): any {
        return {
            response: SAVED_PODCAST,
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
