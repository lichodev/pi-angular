import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private tabSvc: PiTabService) { }

  ngOnInit(): void {
    this.tabSvc.setSelected("INICIAR SESIÓN");
  }

}
