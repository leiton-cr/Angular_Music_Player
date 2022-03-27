import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appBrokenImg]'
})
export class BrokenImgDirective {

  @Input() alternativeImg:string | boolean = false;



  // Ecucha evento del host
  @HostListener('error') handleError():void{
    
    const { nativeElement } = this.host;

    if(this.alternativeImg){
      nativeElement.src = this.alternativeImg;
    }else{
      nativeElement.src = '../../../assets/images/cover_404.jpg';
    }
    
    
  };

  // Inyectamos el host para manipulacion
  
  constructor( private host:ElementRef ) { }
}