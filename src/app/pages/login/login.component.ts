import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FastNoteComponent } from 'src/app/common/fast-note/fast-note.component';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { TokenService } from 'src/app/services/token.service';
import { ERROR_CLASS, LOGIN_ERROR } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLogged = false;
    isLoginFail = false;
    loginForm!: FormGroup;
    user!: User;
    errMsg: string = "";

  constructor(private tabSvc: PiTabService,
    private authSvc: AuthService,
    private tokenSvc: TokenService,
    private fb: FormBuilder,
    private router: Router,
    private matDialog: MatDialog,) { }

  ngOnInit(): void {
    this.tabSvc.setSelected("INICIAR SESIÓN");
    this.loginForm = this.fb.group({
        username: [null, Validators.required],
        password: [null, Validators.required],
    });

    if (this.tokenSvc.getToken()) {
        this.isLogged = true;
        this.isLoginFail = false;
    }
  }

  login() {
      this.authSvc.login(this.loginForm.value)
      .subscribe(res => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenSvc.setToken(res.token);
        this.tokenSvc.setUsername(res.username);
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsg = err.error;
        this.showResult();
      }
      )
  }

  showResult() {
    this.matDialog.open(FastNoteComponent, {
        data: {
            response: LOGIN_ERROR,
            class: ERROR_CLASS
        }
    })
}

}
