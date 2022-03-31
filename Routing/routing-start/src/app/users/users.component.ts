import { Component } from '@angular/core'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      id: 96,
      name: 'Manish',
    },
    {
      id: 99,
      name: 'Aman',
    },
    {
      id: 2000,
      name: 'Boss',
    },
    {
      id: 97,
      name: 'Tanuj',
    },
  ]
}
