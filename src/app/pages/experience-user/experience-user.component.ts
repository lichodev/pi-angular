import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopUpComponent } from 'src/app/common/confirm-pop-up/confirm-pop-up.component';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
    selector: 'app-experience-user',
    templateUrl: './experience-user.component.html',
    styleUrls: ['./experience-user.component.scss']
})
export class ExperienceUserComponent implements OnInit {

    experiences: Experience[] = [];
    experienceForm!: FormGroup;

    constructor(private experienceSvc: ExperienceService,
        private fb: FormBuilder,
        private matDialog: MatDialog,) { }

    ngOnInit(): void {
        this.experiences = this.experienceSvc.getExperiences();
        this.experienceForm = this.fb.group({
            text: [null, Validators.required],
            image: [null],
        })
    }

    openConfirmPopUp(action: string): void {
        let object: string = "experiencia";
        this.matDialog.open(ConfirmPopUpComponent, {
            data: {
                action: action,
                object: object,
                send: action == "enviar",
                service: this.experienceSvc,
            }
        });
    }

    send(): void {
        this.experienceSvc.setExperience(this.experienceForm.value);
        this.openConfirmPopUp("enviar");
    }

}
