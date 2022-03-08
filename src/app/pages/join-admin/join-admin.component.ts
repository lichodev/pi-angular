import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopUpComponent } from 'src/app/common/confirm-pop-up/confirm-pop-up.component';
import { Request } from 'src/app/models/request';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-join-admin',
  templateUrl: './join-admin.component.html',
  styleUrls: ['./join-admin.component.scss']
})
export class JoinAdminComponent implements OnInit {

    requests: Request[] = [];
    displayedColumns: string[] = ['name', 'lastname', 'email', 'phone', 'why', 'how', 'status', 'actions'];
    dataSource = this.requests;

  constructor(private requestSvc: RequestService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
      this.requestSvc.get().subscribe(r => {
          this.requests = r;
          this.dataSource = this.requests;
      })
  }

  openConfirmPopUp(action: string): void {
    let object: string = "solicitud";
    this.matDialog.open(ConfirmPopUpComponent, {
        data: {
            action: action,
            object: object,
            send: false,
            admin: true,
            service: this.requestSvc,
        }
    });
}

agree(id: number) {
    this.requestSvc.agree(id);
    this.openConfirmPopUp("marcar como respondida");
}

}
