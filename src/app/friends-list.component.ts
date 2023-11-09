import { Component } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { Friend } from "./Friend";

@Component({
  selector: "app-friends-list",
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <div>
      <ul>
        <li
          class="flex justify-start items-center"
          *ngFor="let friend of friends"
        >
          <button
            class="w-5 h-5 rounded-xl m-4 {{
              friend.isOnline ? 'bg-lime-500' : 'bg-rose-900'
            }}"
            (click)="changeLoginStatus(friend)"
          ></button>
          {{ friend.name }}
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class FriendsListComponent {
  friends: Friend[] = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
      name: "Mango",
      isOnline: true,
      id: 1812,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
      name: "Kiwi",
      isOnline: false,
      id: 1137,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
      name: "Ajax",
      isOnline: true,
      id: 1213,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
      name: "Jay",
      isOnline: true,
      id: 1714,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
      name: "Poly",
      isOnline: false,
      id: 1284,
    },
  ];

  changeLoginStatus(friend: Friend) {
    friend.isOnline = !friend.isOnline;
  }
}
