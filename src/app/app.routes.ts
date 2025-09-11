import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }  
];
