import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { AppHeader } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, AppHeader, FormsModule, NgIf, NgFor, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // isLogged:boolean = false;
  // userName:string = 'John Doe';
  // isAdmin: boolean = false;
  // isMember: boolean = false;
  // isGuest: boolean = true;
  // loginCount: number = 0;
  
  // countLoginAttempts = () => {
  //   this.loginCount++;
  //   console.log(this.loginCount)
  // }

  users: Array<string> = ['John', 'Sam', 'Smith']
}