import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appBrokenImg]'
})
export class BrokenImgDirective {

  @Input() alternativeImg:string = '';

  // Ecucha evento del host
  @HostListener('error') handleError():void{
    this.host.nativeElement.src = this.alternativeImg === '' ? '../../../assets/images/cover_404.jpg' : this.alternativeImg;
  };

  // Inyectamos el host para manipulacion
  
  constructor( private host:ElementRef ) { }
}