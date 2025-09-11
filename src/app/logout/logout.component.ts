import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private app: AppComponent) {
    this.app.isLogedIn = false;    
  }

  ngOnInit() {

    localStorage.removeItem('isLogedIn');    
  }

  ngOnDestroy() {
  
  }
}
