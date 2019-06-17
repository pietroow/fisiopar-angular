import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { FormLoginComponent } from './seguranca/form-login/form-login.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { FisioterapeutaComponent } from './pages/fisioterapeuta/fisioterapeuta.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './seguranca/auth.guard';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: FormLoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'fisioterapeuta',
    component: FisioterapeutaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_FISIOTERAPEUTA']}
  },
  {
    path: 'paciente',
    component: PacienteComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PACIENTE']}
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
