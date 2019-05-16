import { Directive, HostBinding, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseFocus]'
})
export class MouseFocusDirective {
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter')  mouseEnterFunc(){
    this.el.nativeElement.style.backgroundColor =  "blue";
  }
  @HostListener('mouseleave') mouseLeaveFunc(){
    this.el.nativeElement.style.backgroundColor =  "purple";
  }
  @HostListener('mousedown') mouseDownFunc(){
    this.el.nativeElement.style.backgroundColor =  "yellow";
  }
  @HostListener('mouseup') mouseUpFunc(){
    this.el.nativeElement.style.backgroundColor = null;
  }  
} 
