import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Employee';
  log: boolean;
  u1: string;
  p1: string;
  constructor(private lser: LoginService, public auth: AuthService) {}

  ngOnInit() {
    this.log = this.lser.login(this.u1, this.p1);
  }
}
