import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['main'])
      })
      .catch( () => {
        this.password = '';
      });
  }

}
