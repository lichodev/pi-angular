import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

    requestForm!: FormGroup;

  constructor(private tabSvc: PiTabService,
    private fb: FormBuilder) { }

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

  postRequest() {
      
  }

}
