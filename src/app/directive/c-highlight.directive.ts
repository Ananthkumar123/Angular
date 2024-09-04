import { Directive, HostBinding, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '.appCHighlight'
})
export class CHighlightDirective {

  constructor() { }
@HostBinding('style.background-Color') c="red";
@HostListener('mouseover')on(){

  this.c="yellow";
  
};
@HostListener('mouseleave') om(){
  this.c="red";
}
@HostListener('onclick') om1(){
  this.c="green"
}
 
}
