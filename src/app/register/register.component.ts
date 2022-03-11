import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private rr: Router) {}

  userform: FormGroup;
  data: any = {};
  isRegister = true;

  ngOnInit() {
    this.userform = new FormGroup({
      fname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  save() {
    alert('hi');
    debugger;
    let newarr = JSON.parse(localStorage.getItem('user1'));
    if (newarr == null) {
      newarr = [];
    }

    newarr.push(this.userform.value);
    localStorage.setItem('user1', JSON.stringify(newarr));

    alert('registration successfull');
    this.rr.navigate(['/login']);
  }
}
