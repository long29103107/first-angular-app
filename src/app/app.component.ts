import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { AppHeader } from './header/header.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbar,
    AppHeader,
    PostsListComponent,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  appPostTitle: string = 'Post 1';
  appIsLogin: boolean = false;
  message: string = '';
  messageFromChild: string = '';
  @ViewChild(PostsListComponent) childMessage: any;
  /**
   *
   */
  constructor() {
    console.log(this.childMessage);
  }

  ngAfterViewInit(): void {
    this.message = this.childMessage.childMessage;
  }

  receiveMessage = (message: string) => {
    this.messageFromChild = message;
  };
}
