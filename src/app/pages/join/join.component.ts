import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

    thereIsUserLoged!: boolean;

  constructor(private tabSvc: PiTabService,
    private authSvc: AuthService) { }

  ngOnInit(): void {
      this.tabSvc.setSelected("QUIERO SER PARTE");
      this.authSvc.isLogged.subscribe(v => this.thereIsUserLoged = v);
  }

  isLogged(): boolean {
    return this.authSvc.getIsLogged();
  }

}
