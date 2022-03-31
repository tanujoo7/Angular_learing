import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('tanujInput') element: { type: string; name: string; content: string }
  constructor() {
    console.log('server-element constructor element');
  }

  ngOnInit() {
    console.log('ngOnInit from server-element')
  }
}
