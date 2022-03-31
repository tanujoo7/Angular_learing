import { Injectable, OnInit } from '@angular/core'
import { CounterService } from './counterService.service'

@Injectable()
export class UsersService implements OnInit {
  activeUsers = ['java', 'php']
  inactiveUsers = ['JavaScript', 'C++']

  constructor(private counterService: CounterService) {}

  ngOnInit() {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id, 1)
    this.counterService.returnCountInactiveUsers()
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id])
    this.inactiveUsers.splice(id, 1)
    this.counterService.returnCountActiveUsers()
  }
}
