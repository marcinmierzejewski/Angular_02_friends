import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from './friends-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FriendsListComponent],
  template: `
    <h1>My friends list</h1>
    <app-friends-list />
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular_02_friends';
}
