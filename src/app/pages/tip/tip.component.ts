import { Component, OnInit } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/services/tip.service';

@Component({
    selector: 'app-tip',
    templateUrl: './tip.component.html',
    styleUrls: ['./tip.component.scss']
})
export class TipComponent implements OnInit {

    tip!: Tip;

    constructor(private tipSvc: TipService) { }

    ngOnInit(): void {
        let id: number = parseInt(location.href.slice(-1)); 
        this.tip = this.tipSvc.getTip(id);
    }

}
