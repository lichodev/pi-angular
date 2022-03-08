import { Component, OnInit } from '@angular/core';
import { Workshop } from 'src/app/models/workshop';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { WorkshopService } from 'src/app/services/workshop.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
    selector: 'app-workshops',
    templateUrl: './workshops.component.html',
    styleUrls: ['./workshops.component.scss']
})

export class WorkshopsComponent implements OnInit, PipeTransform {
    
    @Pipe({
        name: 'safe'
    })
    workshops: Workshop[] = [];
    video!: File;
    workshopForm!: FormGroup;

    constructor(private tabSvc: PiTabService,
        private workshopSvc: WorkshopService,
        private sanitizer: DomSanitizer,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
        this.workshopSvc.get().subscribe(workshops => {
            workshops.forEach(w => {
                w.video = this.transform('data:video/mp4;base64,' + w.video);
            });
            this.workshops = workshops;
        })
        this.workshopForm = this.fb.group({
            title: [null, Validators.required],
            video: [null, Validators.required],
        })
    }

    transform(url: string) {
        console.log(url)
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    onVideoChange(event: any) {
        if (event.target.files.length > 0) {
            this.video = event.target.files[0];
        }
    }

    post(){
        this.workshopSvc.post(this.workshopForm.value, this.video)
        .subscribe(r => {
            console.log(r);
        })
    }

}
