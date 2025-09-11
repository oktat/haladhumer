import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLogedIn = false;
  ngOnInit() {
    this.isLogedIn = localStorage.getItem('isLogedIn') === 'true';
  }
}
