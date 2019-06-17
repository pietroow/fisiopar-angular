import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './seguranca/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fisiopar-Angular';

  constructor(
    private router: Router,
    private auth: AuthService
    ){  }

  exibirNavBar(){
    return this.router.url !== '/login';
  }

  obterNovoAccessToken(){
    this.auth.obterNovoAccessToken();
  }

}
