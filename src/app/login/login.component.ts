import { Component } from '@angular/core';
import { 
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private builder: FormBuilder,
    private app: AppComponent,
    private router: Router
  ) {}

  loginForm = this.builder.group({
    user: 'admin',
    pass: 'admin'
  });

  login() {
    console.log(this.loginForm.value);
    const user = this.loginForm.value.user;
    const pass = this.loginForm.value.pass;

    if (user === 'admin' && pass === 'admin') {
      this.app.isLogedIn = true;
      localStorage.setItem('isLogedIn', 'true');
      this.router.navigate(['emp']);
    }
  }
}
