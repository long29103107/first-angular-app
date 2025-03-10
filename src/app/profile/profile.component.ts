import {
  AfterContentInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit
{
  ngDoCheck() {
    console.log('ngDoCheck', this.pUserName);
  }
  @Input() pUserName: string = '';

  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.pUserName);
  }

  ngOnInit() {
    console.log('ngOnInit', this.pUserName);
  }

  ngOnChanges() {
    console.log('OnChanges', this.pUserName);
  }
}
