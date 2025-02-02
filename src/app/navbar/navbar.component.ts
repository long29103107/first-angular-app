import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  //   imports: [RouterOutlet],
  template: 
  `<h1>Navbar component</h1>
  <p>Dummy</p>
  `,
  // templateUrl: './navbar.component.html',
  styles: `
    h1{
      color: red;
      background: black;
    }  
  `,
//   styleUrl: './navbar.component.css'
})
export class AppNavbar {
  title = 'first-angular-app';
}
