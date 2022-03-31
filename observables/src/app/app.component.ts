import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';
import { UserService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit,OnDestroy {
  heyThere = false;
 private holdSubscription:Subscription;
  constructor(private usersService: UserService) {}

  ngOnInit() {
   this.holdSubscription= this.usersService.activateEmitter.subscribe((heyThereActivated) => {
      this.heyThere = heyThereActivated
    })
  }

  ngOnDestroy(){
    this.holdSubscription.unsubscribe();
  }
}
