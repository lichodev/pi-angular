import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopUpComponent } from 'src/app/common/confirm-pop-up/confirm-pop-up.component';
import { Query } from 'src/app/models/query';
import { QueryService } from 'src/app/services/query.service';

@Component({
    selector: 'app-queries-admin',
    templateUrl: './queries-admin.component.html',
    styleUrls: ['./queries-admin.component.scss']
})
export class QueriesAdminComponent implements OnInit {

    queries: Query[] = [];
    displayedColumns: string[] = ['name', 'lastname', 'email', 'phone', 'question', 'status', 'actions'];
    dataSource = this.queries;

    constructor(private querySvc: QueryService,
        private matDialog: MatDialog) { }

    ngOnInit(): void {
        this.get();
    }

    get() {
        this.querySvc.get().subscribe(q => {
            this.queries = q;
            this.dataSource = this.queries;
        })

    }

    openConfirmPopUp(action: string): void {
        let object: string = "pregunta";
        const dialog = this.matDialog.open(ConfirmPopUpComponent, {
            data: {
                action: action,
                object: object,
                send: false,
                admin: true,
                service: this.querySvc,
            }
        });

        dialog.afterClosed().subscribe(result => {
            this.get();
        });
    }

    agree(id: number) {
        this.querySvc.agree(id);
        this.openConfirmPopUp("marcar como respondida");
    }

}
