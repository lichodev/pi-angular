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
    image : File = new File([], "");

    constructor(private experienceSvc: ExperienceService,
        private fb: FormBuilder,
        private matDialog: MatDialog,) { }

    ngOnInit(): void {
        this.experienceSvc.get().subscribe(experiences => {
            experiences.forEach(e => {
                if (e.image != null) {   
                    let path = 'data:image/jpeg;base64,' + e.image;
                    e.image = path;
                } else e.image = "";
            });
            this.experiences = experiences} );

        this.experienceForm = this.fb.group({
            text: [null, Validators.required],
            image: [null],
        })
    }


    onFileChange(event: any) {

        if (event.target.files.length > 0) {
            this.image = event.target.files[0];
        }
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
        this.experienceSvc.setExperience(this.experienceForm.value, this.image);
        this.openConfirmPopUp("enviar");
    }

}
