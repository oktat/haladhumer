import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {
  isLogedIn = this.app.isLogedIn;
  constructor(private app: AppComponent) {}
}
