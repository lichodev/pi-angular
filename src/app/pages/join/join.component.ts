import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

    thereIsUserLoged!: boolean;

  constructor(private tabSvc: PiTabService,
    private tknSvc: TokenService,
    private authSvc: AuthService) { }

  ngOnInit(): void {
      this.tabSvc.setSelected("QUIERO SER PARTE");
      this.authSvc.isLogged.subscribe(v => this.thereIsUserLoged = v);
  }

  isLogged(): boolean {
    if (this.tknSvc.getToken()) return true;
    return false;
  }

}
