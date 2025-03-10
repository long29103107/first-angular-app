import {
  Component,
  ViewChild,
  AfterViewInit,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { AppHeader } from './header/header.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardComponent } from './card/card.component';
import { NgComponentOutlet } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbar,
    AppHeader,
    PostsListComponent,
    CardComponent,
    NgComponentOutlet,
    ProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //} implements AfterViewInit {
  // appPostTitle: string = 'Post 1';
  // appIsLogin: boolean = false;
  // message: string = '';
  // messageFromChild: string = '';
  // @ViewChild(PostsListComponent) childMessage: any;
  // /**
  //  *
  //  */
  constructor(private viewContainer: ViewContainerRef) {}

  // ngAfterViewInit(): void {
  //   this.message = this.childMessage.childMessage;
  // }

  // receiveMessage = (message: string) => {
  //   this.messageFromChild = message;
  // };
  userName: string = 'John Doe';

  loadComponent = () => {
    this.viewContainer.createComponent(PostsListComponent);
  };

  removeComponent = () => {
    this.viewContainer.remove();
  };

  changeUser = () => {
    console.log(1);
    this.userName = 'John Smith';
  };
}
