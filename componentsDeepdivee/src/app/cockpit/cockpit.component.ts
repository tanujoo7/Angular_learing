import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string,serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string
    serverContent: string
  }>()

  // newServerName = '';
  // newServerContent = ''
  @ViewChild('newServerContentInput', {
    static: true,
  })
  newServerContentInput: ElementRef
  constructor() {
    console.log("cockpit constructor function!!!")
  }

  ngOnInit(){
    console.log("cockpit ngOnInit function")
  }
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContentInput.nativeElement.value,
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContentInput.nativeElement.value,
    })
  }
}
