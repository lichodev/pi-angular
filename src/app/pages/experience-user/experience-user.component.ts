import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.experiences = this.experienceSvc.getExperiences();
        this.experienceForm = this.fb.group({
            text: [null, Validators.required],
            image: [null],
        })
    }

    send(): void {
        this.experienceSvc.postExperience(this.experienceForm.value());
    }

}
