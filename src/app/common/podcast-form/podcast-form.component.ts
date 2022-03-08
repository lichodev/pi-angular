import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
    selector: 'app-podcast-form',
    templateUrl: './podcast-form.component.html',
    styleUrls: ['./podcast-form.component.scss']
})
export class PodcastFormComponent implements OnInit {

    podcastForm!: FormGroup;
    audio!: File;
    image!: File;

    constructor(@ Inject(MAT_DIALOG_DATA) public result: String,
    public dialogRef: MatDialogRef<PodcastFormComponent>,
    private podcastSvc: PodcastService,
        private fb: FormBuilder,) { }

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
            this.result = r.type.toString();
            this.dialogRef.close();
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

}
