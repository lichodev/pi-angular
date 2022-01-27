import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { PiTabService } from 'src/app/services/pi-tab.service';

const CONTACTS: Contact[] = [
    {
        name: "Carrillo",
        phone: "2261 410816",
    },
    {
        name: "CIC",
        phone: "2261 410202",
    },
    {
        name: "San Martín",
        phone: "2261 411747",
    },
    {
        name: "Itatí",
        phone: "2261 410329",
    },
    {
        name: "Tamangueyú",
        phone: "2261 411447",
    },
];

@Component({
    selector: 'app-queries',
    templateUrl: './queries.component.html',
    styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

    thereIsUserLoged: boolean = false;

    constructor(private tabSvc: PiTabService,) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("CONSULTAS");
 }

    
}
