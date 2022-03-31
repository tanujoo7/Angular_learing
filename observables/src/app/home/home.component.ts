import { Component, OnDestroy, OnInit } from '@angular/core'
import {  Observable, Subscription } from 'rxjs'
import {filter, map} from 'rxjs/operators'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroySubscription: Subscription
  constructor() {}

  ngOnInit() {
    const customeObservable = new Observable((observer) => {
      let count = 0
      setInterval(() => {
        observer.next(count);
        if(count>4){
          observer.error(new Error("errrr adfads f"))
          observer.complete();
        }
        count++
      }, 1000)
    })
  

    // this.destroySubscription = customeObservable.pipe(map((data:number)=>{
    //     let temp;
    //     temp=data*5;  
    //   return temp;
    // }),filter((data)=>{
    //     return data%2===0;
    // })).subscribe((data)=>{
    //   console.log(data)
    // },(error)=>{
    //   alert(error.message)
    // },()=>{
    //   alert("Observable Completed at 444  !!!")
    // })
  }

  ngOnDestroy() {
    // this.destroySubscription.unsubscribe()
  }
}
