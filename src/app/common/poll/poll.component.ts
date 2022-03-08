import { Component, Input, OnInit } from '@angular/core';
import { ReminderService } from 'src/app/services/reminder.service';
import { TipService } from 'src/app/services/tip.service';

@Component({
    selector: 'app-poll',
    templateUrl: './poll.component.html',
    styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

    @Input()
    type!: string;

    @Input()
    id!: number;

    service: any;

    constructor(private reminderSvc: ReminderService,
        private tipSvc: TipService) { }

    ngOnInit(): void {
        if (this.type === "tip") this.service = this.tipSvc;
        else this.service = this.reminderSvc;
    }

    yes() {
        this.service.yes(this.id);
    }

    no() {
        this.service.no(this.id);
    }

}
