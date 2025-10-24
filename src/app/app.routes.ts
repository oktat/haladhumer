import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'emp', component: EmpComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }  
];
