import { HttpEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipService } from 'src/app/services/tip.service';

@Component({
    selector: 'app-tip-form',
    templateUrl: './tip-form.component.html',
    styleUrls: ['./tip-form.component.scss']
})
export class TipFormComponent implements OnInit {

    tipForm!: FormGroup;
    image!: File;

    constructor(@ Inject(MAT_DIALOG_DATA) public result: String,
    public dialogRef: MatDialogRef<TipFormComponent>,
        private tipSvc: TipService,
        private fb: FormBuilder,) { }

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
            this.result = res.type.toString();
            this.dialogRef.close();
        })
    }

}
