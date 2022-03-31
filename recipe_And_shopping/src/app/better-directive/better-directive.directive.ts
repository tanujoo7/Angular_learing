import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input,
} from '@angular/core'

@Directive({
  selector: '[appBetterDirective]',
})
export class BetterDirectiveDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input('appBetterDirective') highlightColor: string = '#E6B891'
  @HostBinding('style.backgroundColor') backgroundColor: string = this
    .defaultColor
  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','green');
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
    this.backgroundColor = this.defaultColor
  }
}

@Directive({
  selector: '[BetterDirective]',
})
export class BetterDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  constructo() {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = '#C0C0C0'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent'
  }
}

@Directive({
  selector: '[KissMyTanColor]',
})
export class KissMyTanColor implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  constructo() {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = '#E6B891'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent'
  }
}

@Directive({
  selector: '[onClick]',
})
export class onClick implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = '	#DDA0DD'
  @HostBinding('style.border') border: string

  @HostListener('mouseover') mouseenter() {
    this.border = '5px solid #C0C0C0'
  }
  constructo() {}

  ngOnInit() {}

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.border = 'transparent'
  }

  @HostListener('click') onClick() {
    window.alert('Recipe Selected')
  }
}
