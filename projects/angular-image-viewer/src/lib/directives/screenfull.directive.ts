import { Directive, Input, ElementRef, OnChanges, OnInit } from '@angular/core';
import * as screenFull from 'screenfull';

@Directive({
  selector: '[appScreenfull]'
})
export class ScreenfullDirective implements OnChanges, OnInit {

  @Input('appScreenfull') isFullscreen: boolean;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    console.log('isFullscreen:', this.isFullscreen);
    if (this.isFullscreen && screenFull.isEnabled) {
      screenFull.request(this.el.nativeElement);
    } else if (screenFull.isEnabled) {
      screenFull.exit();
    }
  }

  ngOnInit() {

  }

}
