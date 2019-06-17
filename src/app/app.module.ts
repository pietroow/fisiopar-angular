import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FormLoginComponent } from './seguranca/form-login/form-login.component';
import { AuthService } from './seguranca/auth.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './shared/auth-interceptor';
import { MainComponent } from './pages/main/main.component';
import { FisioterapeutaComponent } from './pages/fisioterapeuta/fisioterapeuta.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { ErrorInterceptor } from './shared/error-interceptor';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const material = [
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    MainComponent,
    FisioterapeutaComponent,
    PacienteComponent
  ],
  imports: [
    material,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    AuthService,
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
