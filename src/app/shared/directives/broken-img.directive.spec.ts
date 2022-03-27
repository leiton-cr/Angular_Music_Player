import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Component } from '@angular/core';
import { BrokenImgDirective } from './broken-img.directive';

//
@Component(
  {
    template: `<img class="testing" appBrokenImg [src]='srcMock'>`
  }
)

class TestComponent {
  public srcMock: any = '';
}


describe('BrokenImgDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [
          TestComponent, BrokenImgDirective
        ]
      }
    )

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new BrokenImgDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('should instantiate component', () => {
    expect(component).toBeTruthy();
  });

  it('should change image', (done:DoneFn) => {
    const previousImage = fixture.debugElement.query(By.css('.testing')).nativeElement;
    const previousSRC = previousImage.src
    console.log(previousImage, '🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣');
    
    component.srcMock = undefined;

    setTimeout(() =>{
      const afterImage = fixture.debugElement.query(By.css('.testing')).nativeElement;
      const afterSRC = afterImage.src;

      expect(afterSRC).toEqual('http://localhost:9876/assets/images/cover_404.jpg');
      done();
    },2000)
  })


});
