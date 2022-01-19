import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopUpComponent } from 'src/app/common/confirm-pop-up/confirm-pop-up.component';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

    requestForm!: FormGroup;

  constructor(private tabSvc: PiTabService,
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private requestSvc: RequestService) { }

  ngOnInit(): void {
      this.tabSvc.setSelected("QUIERO SER PARTE");
      this.requestForm = this.fb.group({
        name: [null, Validators.required],
        lastname: [null, Validators.required],
        email: [null, Validators.required],
        phone: [null, Validators.required],
        why: [null, Validators.required],
        how: [null, Validators.required],
      })
  }

  openConfirmPopUp(action: string): void {
    let object: string = "solicitud";
    this.matDialog.open(ConfirmPopUpComponent, {
        data: {
            action: action,
            object: object,
            send: action == "enviar",
            service: this.requestSvc,
        }
    });
}


  send() {
      this.requestSvc.setRequest(this.requestForm.value);
      this.openConfirmPopUp("enviar");
  }

}
