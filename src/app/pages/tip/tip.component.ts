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
    type: string ="tip";
    id!: number; 

    constructor(private tipSvc: TipService) { }

    ngOnInit(): void {
        this.id = parseInt(location.href.slice(-1)); 
        this.tipSvc.getTip(this.id).subscribe(tip => { 
            let path = 'data:image/jpeg;base64,' + tip.image;
            tip.image = path;
            this.tip = tip;
        });
    }

}
