import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  @Input() postListTitle: string = '';
  @Input() postIsLogin: boolean = false;

  childMessage: string = 'Hello From Child Component';
  postCount: number = 0;
  parentMessage: string = 'Message from the child using click event';

  @Output() MessageEvent = new EventEmitter();
  sendMessage = () => {
    this.MessageEvent.emit(this.parentMessage);
  };
}
