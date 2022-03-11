import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f', {
    static: true,
  })
  form: any;

  data1: any = {};
  submitted: boolean;
  loginForm: any;

  constructor(private lser: LoginService) {}

  ngOnInit() {}

  onSubmit() {
    debugger;
    if (this.form.valid) {
      debugger;
      alert('invalid');
    } else {
      alert('valid');
    }
  }

  login() {
    debugger;
    this.lser.login(this.data1.u1, this.data1.p1);
  }
}
