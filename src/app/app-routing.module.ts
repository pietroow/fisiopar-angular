import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Router } from '@angular/router';
import { FormLoginComponent } from './seguranca/form-login/form-login.component';

const routes: Route[] = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: FormLoginComponent},
]

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports:  [RouterModule]
})
export class AppRoutingModule { }
