import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { TokenService } from 'src/app/services/token.service';

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
    opened: boolean = false;
    timer: any;

    constructor(private tabSvc: PiTabService,
        private tknSvc: TokenService) { }

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
        this.showOptions = false;
        this.opened = false;
        this.timer = setInterval(()=>{
        }, 10)
        clearInterval(this.timer);
    }

    isLogged(): boolean {
        if (this.tknSvc.getToken()) return true;
        return false;
    }

    logout() {
        this.tknSvc.logout();
        this.hideOptions();
    }

    toggleOpened() {
        this.opened = !this.opened;
    }
}
