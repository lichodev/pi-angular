import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';

interface NavOption {
    value: string;
    viewValue: string;
  }

@Component({
    selector: 'app-pi-nav',
    templateUrl: './pi-nav.component.html',
    styleUrls: ['./pi-nav.component.scss']
})
export class PiNavComponent implements OnInit {

    selected: string = "";
    showOptions: boolean = false;

    constructor(private tabSvc: PiTabService) { }

    ngOnInit(): void {
        this.tabSvc.pageSetected.subscribe(p => this.selected = p);
    }

    getSelected(): string {
        return this.tabSvc.getSelected();
    }

    toggleShowOptions() {
        this.showOptions = !this.showOptions;
    }
    
    hideOptions() {
        if(this.showOptions) {
            this.showOptions = false;
        }
    }

}
