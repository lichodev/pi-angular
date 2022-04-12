import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopUpComponent } from 'src/app/common/confirm-pop-up/confirm-pop-up.component';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { RequestService } from 'src/app/services/request.service';
import { PRIVATE_DATA } from 'src/environments/environment.prod';

@Component({
  selector: 'app-join-user',
  templateUrl: './join-user.component.html',
  styleUrls: ['./join-user.component.scss']
})
export class JoinUserComponent implements OnInit {
    
    requestForm!: FormGroup;
    message: String = PRIVATE_DATA;

    constructor(private tabSvc: PiTabService,
      private fb: FormBuilder,
      private matDialog: MatDialog,
      private requestSvc: RequestService) { }
  
    ngOnInit(): void {
        this.tabSvc.setSelected("QUIERO SER PARTE");
        this.initForm();
    }
    
    initForm() {
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
      const dialog = this.matDialog.open(ConfirmPopUpComponent, {
          data: {
              action: action,
              object: object,
              send: action == "enviar",
              service: this.requestSvc,
          }
      });

      dialog.afterClosed().subscribe(data => {
          if (data) {
              this.initForm();
          }
    });
  }
  
  
    send() {
        this.requestSvc.setRequest(this.requestForm.value);
        this.openConfirmPopUp("enviar");
    }
  
    readKey(event: any): void {
        if (event.keyCode < 48 || event.keyCode > 57) {
            event.target.value = this.requestForm.value.phone.slice(0, -1);
        }
    }

}
