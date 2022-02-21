import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipService } from 'src/app/services/tip.service';

@Component({
    selector: 'app-tip-form',
    templateUrl: './tip-form.component.html',
    styleUrls: ['./tip-form.component.scss']
})
export class TipFormComponent implements OnInit {

    tipForm!: FormGroup;

    constructor(private tipSvc: TipService,
        private fb: FormBuilder,) { }

    ngOnInit(): void {
        this.tipForm = this.fb.group({
            title: [null, Validators.required],
            text: [null, Validators.required],
            image: [null, Validators.required],
        })
    }

    postTip(): void {
        this.tipSvc.post(this.tipForm.value);
    }

}
