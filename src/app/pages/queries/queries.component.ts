import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { QueryService } from 'src/app/services/query.service';

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

    contacts: Contact[] = CONTACTS;
    queryForm!: FormGroup;

    constructor(private tabSvc: PiTabService,
        private fb: FormBuilder,
        private querySvc: QueryService) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("CONSULTAS");
        this.queryForm = this.fb.group({
            name: [null, Validators.required],
            lastname: [null, Validators.required],
            email: [null, Validators.required],
            phone: [null, Validators.required],
            text: [null, Validators.required],
        })
    }

    send(): void {
        this.querySvc.postQuery(this.queryForm.value());
    }

    cancel(): void {
        //BORRAR FORMULARIO
    }

}
