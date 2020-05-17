import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

  @Input('appInputformat') format: string;

  constructor(private element: ElementRef) { }


  @HostListener('focus') onFocus() {
    console.log('Focus ');
  }

  @HostListener('blur') onBlur() {
    const value: string = this.element.nativeElement.value;
    this.element.nativeElement.value = (this.format == 'lowercase') ? value.toLowerCase() : value.toUpperCase();
  }
}
