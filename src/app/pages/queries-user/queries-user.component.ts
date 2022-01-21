import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopUpComponent } from 'src/app/common/confirm-pop-up/confirm-pop-up.component';
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
  selector: 'app-queries-user',
  templateUrl: './queries-user.component.html',
  styleUrls: ['./queries-user.component.scss']
})
export class QueriesUserComponent implements OnInit {

    contacts: Contact[] = CONTACTS;
    queryForm!: FormGroup;

    constructor(private tabSvc: PiTabService,
        private fb: FormBuilder,
        private querySvc: QueryService,
        private matDialog: MatDialog) { }

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

    openConfirmPopUp(action: string): void {
        let object: string = "consulta";
        this.matDialog.open(ConfirmPopUpComponent, {
            data: {
                action: action,
                object: object,
                send: action == "enviar",
                service: this.querySvc,
            }
        });
    }

    send(): void {
        this.querySvc.setQuery(this.queryForm.value);
        this.openConfirmPopUp("enviar");
    }

    cancel(): void {
        //BORRAR FORMULARIO
    }


}
