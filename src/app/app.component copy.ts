import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { AppHeader } from './header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, AppHeader, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title:string = 'This loaded dynamically';
  image:string = 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/meme-meo-4.jpg';
  isDisabled:boolean = true;
  fruitName:string='Apple';
  isActive: boolean = false;
  userName: string = 'John Doe'

  buttonClick = () => {
    console.log(1)
  }

  keyEnter = (event: any) => {
    if(event.keyCode == 13)
    {
      console.log('Enter Key Pressed')
    } 
  }

  keyUpFiltering = (user: HTMLInputElement) => {
    console.log(user.value)
  }

  updateUsername = (username: HTMLInputElement) => {
    this.userName = username.value
    console.log(this.userName)
  }
}
