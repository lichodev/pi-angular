import { Component, OnInit } from '@angular/core';
import { Workshop } from 'src/app/models/workshop';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { WorkshopService } from 'src/app/services/workshop.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';




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

    constructor(private tabSvc: PiTabService,
        private workshopSvc: WorkshopService,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
        this.workshops = this.workshopSvc.getWorkshops();
        
    }

    transform(url: string) {
        console.log(url)
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
